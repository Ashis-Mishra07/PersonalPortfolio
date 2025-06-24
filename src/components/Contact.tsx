import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    const mailtoLink = `mailto:mishralucky074@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(
      message as string
    )}`;

    window.location.href = mailtoLink;
  };
  

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          Get In Touch
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900">
              Let's talk about everything!
            </h3>
            <p className="text-gray-600">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">
                    mishralucky074@gmail.com
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Github</p>
                  <p className="text-gray-900 font-medium">
                    https://github.com/Ashis-Mishra07
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mobile</p>
                  <p className="text-gray-900 font-medium">
                    +91 7749042179
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-900 font-medium">Odisha, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeInUp}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="mt-1 block w-full py-2 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="mt-1 block w-full py-2 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full py-2 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}