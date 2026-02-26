import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import GlobalPresence from '../contact/globalPresence';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    position: '',
    website: '',
    heardFrom: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const CONTACT_EMAIL = 'thuraichamyvithushan19@gmail.com';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please agree to the privacy terms.',
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          website: formData.website,
          heard_from: formData.heardFrom,
          message: formData.message,
          _subject: `New Inquiry from ${formData.firstName} - iTek Solutions LK`,
        }),
      });

      const json = await response.json();

      if (json.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! We will get back to you soon.',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          position: '',
          website: '',
          heardFrom: '',
          message: '',
          consent: false,
        });
      } else {
        throw new Error(json.message || 'Something went wrong');
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or email us directly.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black mt-[-130px]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[150px] opacity-30" />

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-40 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-10 text-red-500">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-black text-[10px] uppercase tracking-[0.4em]">
                Strategic Partnership
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-[-0.04em] mb-8 uppercase">
              LET'S CREATE
              <br />
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-rose-600 bg-clip-text text-transparent italic">
                THE FUTURE.
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              Have a visionary project in mind? We're ready to architect your next digital breakthrough.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area - WHITE */}
      <section className="relative py-24 md:py-32 pt-20 overflow-hidden bg-white">
        {/* Subtle decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-20"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight text-gray-900">
                  Connect with <span className="text-red-500">Precision.</span>
                </h2>

                <div className="space-y-12">
                  {/* Location Card */}
                  <div className="group relative p-8 rounded-3xl border border-red-200 bg-red-50/50 shadow-sm transition-all duration-400 hover:shadow-md">
                    <div className="flex items-start gap-6">
                      <div className="mt-1 w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black tracking-widest text-gray-400 uppercase mb-2">Jaffna Headquarters</h4>
                        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                          Mariyamman veethy, Thirunelvely,<br />
                          Jaffna, Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Methods */}
                  <div className="grid gap-4">
                    <a href="tel:+94771234567" className="group flex items-center gap-5 p-5 rounded-2xl border border-red-200 bg-red-50/50 transition-all duration-400 hover:shadow-md">
                      <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Direct Line</p>
                        <p className="text-lg font-bold text-gray-900">+94 77 123 4567</p>
                      </div>
                      <ArrowRight className="ml-auto w-4 h-4 text-red-500 group-hover:translate-x-1 transition-all duration-300" />
                    </a>

                    <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-5 p-5 rounded-2xl border border-red-200 bg-red-50/50 transition-all duration-400 hover:shadow-md">
                      <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Email Us</p>
                        <p className="text-lg font-bold text-gray-900 truncate">{CONTACT_EMAIL}</p>
                      </div>
                      <ArrowRight className="ml-auto w-4 h-4 text-red-500 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Ecosystem */}
              <div>
                <p className="text-xs font-black tracking-[0.4em] text-gray-400 uppercase mb-8">Follow Our Innovations</p>
                <div className="flex flex-wrap gap-4">
                  {['LinkedIn', 'Instagram', 'Twitter', 'Facebook'].map((platform) => (
                    <motion.button
                      key={platform}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-8 py-3 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-500 shadow-sm"
                    >
                      {platform}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Dynamic Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {status.success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/20">
                        <CheckCircle2 className="w-12 h-12 text-red-500" />
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gray-900 mb-6">Message Received!</h3>
                      <p className="text-base md:text-xl text-gray-500 max-w-sm mx-auto">{status.message}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setStatus({ ...status, success: false })}
                        className="mt-12 px-10 py-4 bg-black text-white font-black uppercase tracking-widest text-xs rounded-full"
                      >
                        Send New Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-10"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group">
                          <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3 block">First Name*</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-gray-200 group-focus-within:border-red-600 transition-all duration-500 py-3 outline-none text-base md:text-lg font-bold text-gray-900 placeholder:text-gray-300"
                          />
                        </div>
                        <div className="relative group">
                          <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3 block">Last Name*</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-gray-200 group-focus-within:border-red-600 transition-all duration-500 py-3 outline-none text-base md:text-lg font-bold text-gray-900 placeholder:text-gray-300"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group">
                          <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3 block">Email Address*</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-gray-200 group-focus-within:border-red-600 transition-all duration-500 py-3 outline-none text-base md:text-lg font-bold text-gray-900 placeholder:text-gray-300"
                          />
                        </div>
                        <div className="relative group">
                          <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3 block">Company Name*</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-gray-200 group-focus-within:border-red-600 transition-all duration-500 py-3 outline-none text-base md:text-lg font-bold text-gray-900 placeholder:text-gray-300"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3 block">Your Message*</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          required
                          className="w-full bg-transparent border-b-2 border-gray-200 group-focus-within:border-red-600 transition-all duration-500 py-3 outline-none text-base md:text-lg font-bold text-gray-900 placeholder:text-gray-300 resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-4">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          className="mt-1.5 w-5 h-5 rounded border-gray-300 bg-white text-red-600 focus:ring-red-500 transition-all cursor-pointer accent-red-600"
                        />
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                          I consent to the processing of my data in accordance with the <a href="/privacy-policy" className="text-gray-900 hover:text-red-500 underline transition-colors">Privacy Policy</a>.
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status.loading}
                        className="w-full py-6 bg-red-600 hover:bg-black text-white font-black uppercase tracking-[0.3em] text-xs rounded-2xl transition-all duration-500 shadow-xl shadow-red-600/20 flex items-center justify-center gap-4 disabled:opacity-50"
                      >
                        {status.loading ? 'Encrypting...' : (
                          <>
                            Initiate Collaboration
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      {status.error && (
                        <p className="text-red-500 text-center font-bold text-xs tracking-widest uppercase mt-4 animate-pulse">
                          {status.message}
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Map Overlay Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative group"
          >
            <h3 className="text-2xl font-black uppercase tracking-widest text-center mb-16 text-gray-900">
              Our <span className="text-red-500 italic">Location</span>
            </h3>
            <div className="rounded-[40px] overflow-hidden border border-gray-200 shadow-xl grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5561.877688362519!2d80.03242588335769!3d9.694571830579239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMariyamman%20veethy%2C%20Thirunelvely%2C%20Jaffna!5e0!3m2!1sen!2slk!4v1771918408652!5m2!1sen!2slk"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="iTek Coordinates"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach - BLACK section */}
      <GlobalPresence />
    </div>
  );
}
