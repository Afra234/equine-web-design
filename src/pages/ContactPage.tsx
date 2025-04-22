"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import SwirlBackground from '../components/background/SwirlBackground';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Clock } from 'lucide-react';

const ContactHero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Swirl background */}
      <div className="absolute inset-0 z-10">
        <SwirlBackground />
      </div>
      
      {/* Grid pattern overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-[0.03] z-20"
      />

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-1.5 text-sm font-medium border border-[#3CAAFF]/20 bg-[#3CAAFF]/5 rounded-full inline-flex items-center">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2 h-2 w-2 rounded-full bg-[#3CAAFF]"
                />
                <span className="text-[#3CAAFF]/90">Available for New Projects</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] via-white to-[#3CAAFF] leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Let's Create<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] to-[#93c5fd]">Something Amazing</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-[#94a3b8]/90 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Have a project in mind? We're here to turn your vision into reality. 
              Our team combines creativity with technical expertise to deliver exceptional results.
            </motion.p>
          </motion.div>

          {/* Right column - Quick contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:pl-12"
          >
            <div className="bg-[#0A0A0A]/40 backdrop-blur-xl rounded-2xl border border-[#3CAAFF]/10 p-8">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="bg-[#3CAAFF]/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-[#3CAAFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90">Email Us</h3>
                    <p className="text-[#94a3b8]/80 font-light">enquiries@equinology.co.uk</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="bg-[#3CAAFF]/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-[#3CAAFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90">Call Us</h3>
                    <p className="text-[#94a3b8]/80 font-light">+44 7493 303857</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="bg-[#3CAAFF]/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#3CAAFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90">Location</h3>
                    <p className="text-[#94a3b8]/80 font-light">East Sussex, England</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Quick Response",
      description: "We aim to respond to all inquiries within 24 hours during business days."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "Monday to Friday: 9:00 AM - 5:00 PM GMT"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3CAAFF]/10 rounded-full filter blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#93c5fd]/10 rounded-full filter blur-[128px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                ease: [0.165, 0.84, 0.44, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-[#0A0A0A] to-[#111111] p-8 rounded-2xl border border-[#3CAAFF]/10 hover:border-[#3CAAFF]/20 transition-all duration-300"
            >
              <div className="bg-[#3CAAFF]/5 p-3 rounded-xl w-fit mb-6">
                <div className="text-[#3CAAFF]/90">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-medium text-white/90 mb-4">{feature.title}</h3>
              <p className="text-[#94a3b8]/80 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <ContactHero />
      <ContactInfo />
    </div>
  );
};

export default ContactPage;