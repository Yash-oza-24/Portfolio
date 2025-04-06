import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_yashoza', // Replace with your EmailJS Service ID
        'template_lzrjbji', // Replace with your EmailJS Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'UdO7THJj_tE6_VH8n' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div ref={ref} className='bg-black text-white py-12'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-8'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>
            Contact Me
          </h2>
          <p className='text-lg md:text-xl text-gray-400'>
            I'd love to hear from you
          </p>
        </motion.div>

        <div className='flex flex-col md:flex-col items-center justify-center gap-8'>
          <div className='bg-gray-800 rounded-lg p-6 w-full md:w-[800px]'>
            <h3 className='text-2xl font-bold text-green-400 mb-4'>
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={form.name}
                onChange={handleChange}
                className='bg-gray-900 text-white rounded-lg py-2 px-4'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={form.email}
                onChange={handleChange}
                className='bg-gray-900 text-white rounded-lg py-2 px-4'
                required
              />
              <textarea
                name='message'
                placeholder='Your Message'
                value={form.message}
                onChange={handleChange}
                className='bg-gray-900 text-white rounded-lg py-2 px-4 h-32'
                required
              />
              <button
                type='submit'
                className='flex items-center justify-center bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg'
              >
                <FaPaperPlane className='mr-2' /> Send Message
              </button>
            </form>
            {status && (
              <p className='text-center text-green-400 mt-4'>{status}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
