import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Building, Shield, TrendingUp, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Properties",
      description: "Find your dream home from our curated collection of residential properties.",
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description: "Premium office and retail spaces for your business growth.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Safe and transparent property transactions with legal support.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance on property investments and market trends.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Property
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover premium residential and commercial properties that match your lifestyle and investment goals.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link to="/properties">
                <Button size="lg" className="group">
                  Explore Properties
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">About Elite Properties</h2>
              <p className="text-muted-foreground mb-4">
                With over 15 years of experience in the real estate industry, Elite Properties has established itself as a trusted name in property solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                We specialize in connecting clients with their ideal properties, whether it's a cozy residential home or a strategic commercial space. Our team of experts ensures a seamless experience from property search to final transaction.
              </p>
              <p className="text-muted-foreground">
                Our commitment to transparency, professionalism, and customer satisfaction sets us apart in the competitive real estate market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
                alt="Modern building"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Property?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with our team today and let us help you find the perfect space.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
