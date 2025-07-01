import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: 'naveenkvg8@gmail.com',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (status.error) {
      setStatus(prev => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }

    if (!formData.message.trim() || formData.message.trim().length < 1) {
      errors.push('Message must be at least 10 characters long');
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      setStatus({ loading: false, success: false, error: errors[0] });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch('https://portserver-production-d357.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: 'naveenkvg8@gmail.com', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "naveenkvg8@gmail.com",
      link: "mailto:naveenkvg8@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 96881 70583",
      link: "tel:+919688170583"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Sathyamangalam, Tamil Nadu, India",
      link: "https://www.google.com/maps/place/Sathyamangalam,+Tamil+Nadu,+India"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Connect</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you're looking for a developer, have a question, or just want to 
                connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{info.title}</h4>
                    <p className="text-slate-600">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8">
            {status.success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {status.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800">{status.error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  disabled={status.loading}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div className='hidden'>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value="naveenkvg8@gmail.com"
                  disabled
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-gray-100 cursor-not-allowed text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={1000}
                  disabled={status.loading}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell me about your project..."
                />
                <p className="text-xs text-slate-500 mt-1">{formData.message.length}/1000 characters</p>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {status.loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
