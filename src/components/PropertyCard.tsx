import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
  id: number;
  name: string;
  type: string;
  status: string;
  area: string;
  image: string;
  index: number;
}

const PropertyCard = ({ id, name, type, status, area, image, index }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <Link to={`/property/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium">
            {status}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-1">{type}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{area}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
