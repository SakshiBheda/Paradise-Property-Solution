import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Buy Property", path: "/properties?type=buy" },
    { name: "Rent Property", path: "/properties?type=rent" },
    { name: "Sell Property", path: "/sell" },
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#0066FF] p-2.5 rounded-xl">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <span className="font-bold text-2xl text-gray-900">
                  Paradise Property
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                Your trusted partner in finding the perfect property. We help you buy, sell, and rent premium properties across India with professional guidance and exceptional service.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-3 text-gray-700 hover:text-[#0066FF] transition-colors duration-200 group"
                >
                  <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-[#0066FF] transition-colors duration-200">
                    <Phone className="h-4 w-4 text-[#0066FF] group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium">+91 98765 43210</span>
                </a>
                <a 
                  href="mailto:info@paradiseproperty.com" 
                  className="flex items-center gap-3 text-gray-700 hover:text-[#0066FF] transition-colors duration-200 group"
                >
                  <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-[#0066FF] transition-colors duration-200">
                    <Mail className="h-4 w-4 text-[#0066FF] group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium">info@paradiseproperty.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-[#0066FF]" />
                  </div>
                  <span className="text-sm font-medium">
                    123 Business District,<br />Mumbai, Maharashtra 400001
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#0066FF] transition-colors duration-200 text-sm font-medium inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#0066FF] group-hover:w-4 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-600 hover:text-[#0066FF] transition-colors duration-200 text-sm font-medium inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#0066FF] group-hover:w-4 transition-all duration-200"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg text-gray-900 mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-[#0066FF] transition-colors duration-200 text-sm font-medium inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#0066FF] group-hover:w-4 transition-all duration-200"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

    

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {currentYear} <span className="font-semibold text-gray-900">Paradise Property Solution</span>. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 p-3 rounded-xl hover:bg-[#0066FF] hover:text-white text-gray-700 transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
