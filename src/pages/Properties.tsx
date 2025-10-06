import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const Properties = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our exclusive collection of residential and commercial properties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              name={property.name}
              type={property.type}
              status={property.status}
              area={property.area}
              image={property.images[0]}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
