import Link from 'next/link';
import { Truck, Heart, Building, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Fleet & Transportation",
      icon: <Truck className="h-10 w-10" />,
      description: "Comprehensive risk management solutions for fleet operations and transportation logistics.",
      link: "/services/fleet"
    },
    {
      title: "Healthcare & Medical",
      icon: <Heart className="h-10 w-10" />,
      description: "Specialized risk management solutions for healthcare institutions and medical professionals.",
      link: "/services/healthcare"
    },
    {
      title: "Property & Real Estate",
      icon: <Building className="h-10 w-10" />,
      description: "Customized solutions for property owners, developers, and real estate managers.",
      link: "/services/property"
    },
    {
      title: "Public Sector",
      icon: <Globe className="h-10 w-10" />,
      description: "Innovative risk management solutions for government agencies and public organizations.",
      link: "/services/public-sector"
    }
  ];

  return (
    <div className="bg-[#1A1F36] text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              href={service.link} 
              key={service.title}
              className="bg-[#232B50] p-8 rounded-xl hover:bg-[#2A325A] transition-all duration-300"
            >
              <div className="text-[#4262FF] mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="text-[#4262FF] font-semibold">Learn More →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
