import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load .env
dotenv.config();

// Debug check
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Missing');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

const validateInput = (name, email, message) => {
  const errors = [];
  if (!name || name.length < 2) errors.push('Invalid name');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) errors.push('Invalid email');
  if (!message || message.length < 1) errors.push('Message too short');
  return errors;
};

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const errors = validateInput(name, email, message);
  if (errors.length > 0) return res.status(400).json({ message: errors[0] });

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

    res.json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('[Mail Error]', err);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ message: 'API is healthy' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
