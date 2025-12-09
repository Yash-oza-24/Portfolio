// src/Pages/Contact.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      access_key: "46746de3-0a9a-4000-a1f4-60b65267044e", // Get from web3forms.com
      name: form.name,
      email: form.email,
      message: form.message,
      subject: `New Portfolio Message from ${form.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("✅ Email sent successfully");
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputClasses = (field) => `
    w-full px-4 py-3.5 bg-dark-100/80 backdrop-blur-sm border rounded-xl text-white 
    placeholder-transparent focus:outline-none transition-all duration-300
    ${focusedField === field ? "border-accent shadow-lg shadow-accent/10" : "border-white/10 hover:border-white/20"}
  `;

  return (
    <div ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Left - Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-accent font-mono text-sm mb-4"
            >
              04 / Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              Let's work together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-white/50 mb-12 max-w-md leading-relaxed"
            >
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's create something great together.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <motion.a
                href="mailto:yashoza2408@gmail.com"
                className="flex items-center gap-4 p-4 bg-dark-100/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Email</p>
                  <p className="text-white group-hover:text-accent transition-colors">
                    yashoza2408@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 bg-dark-100/50 rounded-xl border border-white/5"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-accent/10 rounded-xl">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Location</p>
                  <p className="text-white">Surat, Gujarat, India</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-12 hidden lg:block"
            >
              <div className="relative w-32 h-32">
                <motion.div
                  className="absolute inset-0 border-2 border-accent/30 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border border-white/10 rounded-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses("name")}
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "name" || form.name
                    ? "-top-2.5 text-xs text-accent bg-dark px-2"
                    : "top-3.5 text-white/40"
                }`}
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses("email")}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "email" || form.email
                    ? "-top-2.5 text-xs text-accent bg-dark px-2"
                    : "top-3.5 text-white/40"
                }`}
              >
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
                rows={5}
                className={`${inputClasses("message")} resize-none`}
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "message" || form.message
                    ? "-top-2.5 text-xs text-accent bg-dark px-2"
                    : "top-3.5 text-white/40"
                }`}
              >
                Your Message
              </label>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-dark font-medium rounded-xl hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-center gap-2 p-4 rounded-xl ${
                    status === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span className="text-sm">
                    {status === "success"
                      ? "Message sent! I'll get back to you soon."
                      : "Failed to send. Please try again."}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;