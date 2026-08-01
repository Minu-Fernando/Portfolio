import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Mail, Phone, MapPin, Copy, Check, Send, Sparkles, Music, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { certificates, personalDetails } from '../data/portfolioData';

export default function CertificationsContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopiedPhone(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/minayafh@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`
        })
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      setFormSubmitted(true);
      confetti({ particleCount: 80, spread: 100, origin: { y: 0.7 } });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
    } catch (error) {
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
      setSubmitError('The message could not be sent automatically, so your email app was opened instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Certifications Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="pill-badge pill-badge-cyan mb-3">
              <Award className="w-3.5 h-3.5" />
              Honors & Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Recognitions & <span className="gradient-text">Certificates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="framer-card p-6 flex flex-col justify-between hover:border-violet-500/40 transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-4">
                    <Award className="w-4 h-4 text-violet-300" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-cyan-300 text-xs font-semibold mb-3">{cert.detail}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono pt-3 border-t border-white/5">
                  Issued: {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Bento Box */}
        <div className="bento-container">
          
          {/* Left Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-5 framer-card p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-950/60 flex flex-col justify-between"
          >
            <div>
              <span className="pill-badge pill-badge-violet mb-4">
                <Mail className="w-3.5 h-3.5" />
                Let's Connect
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-3">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Open for engineering internships, research collaborations, PCB design projects, or robotics initiatives.
              </p>

              {/* Copy Actions */}
              <div className="space-y-4">
                
                {/* Email Copy Card */}
                <div
                  onClick={handleCopyEmail}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-400/50 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Email Address</p>
                      <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {personalDetails.email}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 rounded-xl bg-white/5 text-slate-300 group-hover:text-white transition-colors">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Copy Card */}
                <div
                  onClick={handleCopyPhone}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Phone & WhatsApp</p>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {personalDetails.phone}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 rounded-xl bg-white/5 text-slate-300 group-hover:text-white transition-colors">
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Location</p>
                    <p className="text-sm font-semibold text-white">{personalDetails.location}</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Message Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="col-7 framer-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center py-12">
                <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-3 animate-bounce" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-slate-300 text-sm">
                  Thank you for reaching out, Minaya will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Dr. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    placeholder="Hi Minaya, I would like to discuss an engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-all resize-none"
                  ></textarea>
                </div>

                {submitError && (
                  <p className="text-sm text-amber-300">{submitError}</p>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
