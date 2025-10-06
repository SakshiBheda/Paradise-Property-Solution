export interface Property {
  id: number;
  name: string;
  type: "Residential" | "Commercial";
  developer: string;
  area: string;
  status: "Available" | "Sold" | "Under Construction";
  furnishType?: "Furnished" | "Semi-Furnished" | "Unfurnished";
  images: string[];
  bankLoan?: string;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Skyline Residency",
    type: "Residential",
    developer: "Urban Developers Ltd",
    area: "Downtown, City Center",
    status: "Available",
    furnishType: "Semi-Furnished",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&auto=format&fit=crop",
    ],
    bankLoan: "Available - Up to 80% financing at 6.5% interest",
    description:
      "Modern residential complex featuring spacious apartments with premium amenities including swimming pool, gym, and 24/7 security.",
  },
  {
    id: 2,
    name: "Green Valley Estates",
    type: "Residential",
    developer: "Eco Builders Inc",
    area: "Suburban Area, North Zone",
    status: "Under Construction",
    furnishType: "Unfurnished",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
    ],
    bankLoan: "Pre-approved loans available from partner banks",
    description:
      "Eco-friendly residential community surrounded by lush greenery. Features include solar panels, rainwater harvesting, and park areas.",
  },
  {
    id: 3,
    name: "Metro Business Hub",
    type: "Commercial",
    developer: "Prime Properties Group",
    area: "Business District, West Wing",
    status: "Available",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
    ],
    bankLoan: "Commercial loans available through major banks",
    description:
      "Premium commercial space perfect for offices and retail. High-speed internet, ample parking, and excellent connectivity.",
  },
  {
    id: 4,
    name: "Lakeview Apartments",
    type: "Residential",
    developer: "Waterfront Developers",
    area: "Lakeside, East Zone",
    status: "Available",
    furnishType: "Furnished",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
    ],
    description:
      "Luxury lakeside living with stunning water views. Premium interiors, modern appliances, and resort-style amenities.",
  },
  {
    id: 5,
    name: "Tech Park Plaza",
    type: "Commercial",
    developer: "Smart Spaces Ltd",
    area: "IT Corridor, South District",
    status: "Sold",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    ],
    description:
      "Modern tech-ready commercial space with smart building features. Ideal for IT companies and startups.",
  },
  {
    id: 6,
    name: "Royal Gardens",
    type: "Residential",
    developer: "Heritage Builders",
    area: "Uptown, Premium Zone",
    status: "Under Construction",
    furnishType: "Semi-Furnished",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop",
    ],
    bankLoan: "Flexible payment plans and loan assistance available",
    description:
      "Elegant residences with landscaped gardens and classical architecture. Features clubhouse, tennis courts, and more.",
  },
];
