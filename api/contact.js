import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS setup to allow your frontend to communicate with this API
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input
  const errors = [];
  if (!name || name.length < 2) errors.push('Invalid name');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) errors.push('Invalid email');
  if (!message || message.length < 1) errors.push('Message too short');

  if (errors.length > 0) {
    return res.status(400).json({ message: errors[0] });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
             <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('[Mail Error]', err);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
}
