import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Building2, User, ArrowRight, Home } from "lucide-react";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link to="/properties">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Carousel */}
          <div className="mb-8">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-4">
              <img
                src={property.images[currentImage]}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                {property.status}
              </div>
            </div>

            {property.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImage === index
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{property.name}</h1>
              <p className="text-muted-foreground mb-6">{property.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Type</p>
                    <p className="text-muted-foreground">{property.type}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Developer</p>
                    <p className="text-muted-foreground">{property.developer}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Area</p>
                    <p className="text-muted-foreground">{property.area}</p>
                  </div>
                </div>

                {property.furnishType && (
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Furnish Type</p>
                      <p className="text-muted-foreground">{property.furnishType}</p>
                    </div>
                  </div>
                )}
              </div>

              {property.bankLoan && (
                <div className="bg-secondary/50 border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Bank Loan Information</h3>
                  <p className="text-muted-foreground">{property.bankLoan}</p>
                </div>
              )}
            </div>

            <div>
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact our team to schedule a viewing or get more information.
                </p>
                <Link to="/contact">
                  <Button className="w-full group">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyDetail;
