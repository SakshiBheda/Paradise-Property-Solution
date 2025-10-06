import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const brandBlue = "#0066FF";
const lightBlue = "#E3F2FD"; // Light blue for selected dropdown items
const actions = ["Buy", "Rent", "Sell", "Lease Out"];
const budgets = ["0 - 2 Cr", "2 - 5 Cr", "5+ Cr"];
const categories = ["Residential", "Commercial"];
const subCategories = ["Penthouse", "Apartment", "Villa"];
const configurations = ["1 BHK", "2 BHK", "3+ BHK"];
const furnishing = ["Fully-Furnished", "Semi-Furnished", "Un-Furnished", "Naked", "Builder Possession"];

// HeroSection Component - Exact Match with Blue Theme
const HeroSection = () => {
  const [selectedAction, setSelectedAction] = useState("Buy");
  const [selectedBudget, setSelectedBudget] = useState(budgets[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(subCategories[0]);
  const [selectedConfiguration, setSelectedConfiguration] = useState(configurations[0]);
  const [selectedFurnishing, setSelectedFurnishing] = useState("");
  const [search, setSearch] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(true);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Action button variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  // Floating animation for decorative elements
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible">
      {/* Animated Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop')",
        }}
      />

      {/* Gradient Overlay with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
      />

      {/* Decorative Animated Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10 flex flex-col items-center w-full px-4">
        {/* Animated Heading with Text Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-28 md:mt-32"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white drop-shadow-2xl"
          >
            {"What Would You Like To ".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent inline-block"
            >
              Do
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="block mt-3 bg-gradient-to-r from-[#00A3FF] to-[#0066FF] bg-clip-text text-transparent"
            >
              Today?
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Actions Row with Stagger Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mt-10 justify-center"
        >
          {actions.map((action, index) => (
            <motion.button
              key={action}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedAction(action)}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 relative overflow-hidden
                ${selectedAction === action
                  ? "bg-[#0066FF] text-white shadow-lg shadow-blue-500/50"
                  : "border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"}
              `}
              style={{ minWidth: "140px" }}
            >
              {/* Shine effect on hover */}
              {selectedAction === action && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              )}
              <span className="relative z-10">{action}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Search Card - NO ANIMATIONS */}
        {isCardVisible && (
          <div className="mt-5 bg-white/95 backdrop-blur-md border border-gray-200 rounded-3xl max-w-6xl w-full px-8 py-8 flex flex-col gap-6 shadow-2xl">
            {/* Search Bar - NO ANIMATION */}
            <div className="w-full flex gap-3 items-center relative">
              {/* Search Icon */}
              <div className="absolute left-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search for area, landmark or project name"
                className="w-full pl-12 pr-4 py-4 text-base rounded-2xl border border-gray-300 outline-none text-gray-800 bg-white placeholder:text-gray-400 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
              />
            </div>

            {/* Filters Grid - NO ANIMATION */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
              <Dropdown
                options={budgets}
                selected={selectedBudget}
                setSelected={setSelectedBudget}
                label="Budget Range"
              />
              <Dropdown
                options={categories}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
                label="Category"
              />
              <Dropdown
                options={subCategories}
                selected={selectedSubCategory}
                setSelected={setSelectedSubCategory}
                label="Sub-Category"
              />
              <Dropdown
                options={configurations}
                selected={selectedConfiguration}
                setSelected={setSelectedConfiguration}
                label="Configuration"
              />
              <Dropdown
                options={furnishing}
                selected={selectedFurnishing}
                setSelected={setSelectedFurnishing}
                label="Furnish Type"
                placeholder="Select furni..."
              />
            </div>

            <div className="flex gap-4 mt-2 w-full justify-end">
              <button
                className="bg-[#0066FF] text-white font-semibold px-16 py-3 text-base rounded-2xl hover:bg-[#0052CC] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Search
              </button>
              <button
                className="bg-white border border-gray-300 text-gray-700 font-semibold px-16 py-3 text-base rounded-2xl hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Dropdown Component - Opens Upward, Light Blue Selected State
const Dropdown = ({ options, selected, setSelected, label, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="block text-gray-600 font-medium text-sm mb-2">
        {label}
      </label>
      
      {/* Dropdown Button */}
      <button
        type="button"
        className={`flex justify-between items-center w-full px-4 py-3.5 text-base rounded-xl border-2 bg-white text-left transition-all duration-200 ${
          open ? "border-[#0066FF] ring-2 ring-[#0066FF]/20" : "border-gray-300 hover:border-gray-400"
        }`}
        onClick={() => setOpen(o => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
      >
        <span className={`font-normal text-base ${selected ? "text-gray-800" : "text-gray-400"}`}>
          {selected || placeholder || `Select ${label}`}
        </span>
        <svg
          className={`ml-2 w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu - Opens UPWARD with Light Blue Selected State */}
      {open && (
        <div
          className="absolute bottom-full mb-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden z-[999]"
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`px-4 py-3 text-base cursor-pointer transition-all duration-150 ${
                option === selected
                  ? "bg-[#E3F2FD] text-[#0066FF] font-medium"
                  : "text-gray-700 hover:bg-[#F5F5F5]"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Enhanced FeaturedSection with Blue Theme and Navigation
const FeaturedSection = () => {
  const featuredProperties = [
    {
      id: 1,
      name: "Luxurious Penthouse",
      location: "Downtown Mumbai",
      price: "₹4.5 Cr",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sqft",
      image: "https://images.unsplash.com/photo-1744311971549-9c529b60b98a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Cozy Apartment",
      location: "Suburb Area, Pune",
      price: "₹1.8 Cr",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Modern Villa",
      location: "Gated Community, Bangalore",
      price: "₹6.2 Cr",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,800 sqft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    }
  ];

  // Function to handle navigation to properties page
  const handleViewProperty = (propertyId) => {
    // In a real app, you would use Next.js router or React Router
    // For Next.js: const router = useRouter(); router.push(`/properties/${propertyId}`);
    // For React Router: const navigate = useNavigate(); navigate(`/properties/${propertyId}`);
    console.log(`Navigating to property ID: ${propertyId}`);
    window.location.href = `/properties/${propertyId}`;
  };

  return (
    <section className="container mx-auto max-w-7xl px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured <span className="text-[#0066FF]">Properties</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our handpicked selection of premium properties in prime locations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-64">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-[#0066FF] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                {property.price}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.name}</h3>
              <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location}
              </p>

              {/* Property Details */}
              <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{property.bedrooms} BHK</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span>{property.area}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleViewProperty(property.id)}
                className="w-full bg-[#0066FF] text-white py-3.5 rounded-xl font-semibold hover:bg-[#0052CC] transition-colors duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
              >
                View Details
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/properties'}
          className="bg-white border-2 border-[#0066FF] text-[#0066FF] font-semibold px-12 py-4 text-lg rounded-2xl hover:bg-[#0066FF] hover:text-white transition-all duration-300 shadow-lg inline-flex items-center gap-3"
        >
          View All Properties
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

// HomePage Component
const HomePage = () => (
  <>
    <HeroSection />
    <FeaturedSection />
  </>
);

export default HomePage;
