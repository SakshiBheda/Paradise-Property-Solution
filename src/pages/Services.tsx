import { motion } from "framer-motion";
import { 
  Home, 
  Key, 
  TrendingUp, 
  Building2,
  FileText, 
  Shield, 
  Search,
  DollarSign,
  ArrowRight
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Home,
      title: "Buy Property",
      description: "Premium properties across prime locations",
    },
    {
      icon: Key,
      title: "Rent Property",
      description: "Flexible rental solutions for every lifestyle",
    },
    {
      icon: TrendingUp,
      title: "Sell Property",
      description: "Maximum value through expert marketing",
    },
    {
      icon: Building2,
      title: "Property Management",
      description: "Comprehensive management services",
    },
    {
      icon: FileText,
      title: "Legal Assistance",
      description: "Complete documentation support",
    },
    {
      icon: Shield,
      title: "Verification",
      description: "Thorough property verification",
    },
    {
      icon: Search,
      title: "Consultation",
      description: "Expert guidance for informed decisions",
    },
    {
      icon: DollarSign,
      title: "Home Loans",
      description: "Competitive loan options",
    },
  ];

  const stats = [
    { value: "10+", label: "Years" },
    { value: "5K+", label: "Clients" },
    { value: "10K+", label: "Properties" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-black mb-6"
          >
            Our <span className="text-[#0066FF]">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Professional real estate solutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#0066FF] transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-6">
                    <Icon className="w-10 h-10 text-[#0066FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-black mb-6"
          >
            Ready to get <span className="text-[#0066FF]">started?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 mb-10"
          >
            Let's find your perfect property solution
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // onClick={() => alert("Get Started Clicked!")}
            className="bg-[#0066FF] text-white font-semibold px-12 py-5 rounded-full hover:bg-black transition-colors duration-300 inline-flex items-center gap-3 text-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
