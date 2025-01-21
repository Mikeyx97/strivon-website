import React from 'react';
import ServiceCard from './ServiceCard';
import { Shield, Globe, Building, Truck, Heart, Factory, Cloud, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Fleet & Transportation',
    description: 'Comprehensive risk management solutions for commercial fleet operations, including autonomous vehicle coverage and logistics protection.',
    icon: <Truck className="h-10 w-10" />,
    link: '/services/fleet',
    testimonial: {
      text: "Strivon's fleet management solutions helped us reduce our insurance costs by 30%.",
      author: "John Smith",
      company: "Global Logistics Co."
    }
  },
  {
    title: 'Healthcare & Medical',
    description: 'Specialized coverage for healthcare facilities and medical professionals, including malpractice and clinical trials insurance.',
    icon: <Heart className="h-10 w-10" />,
    link: '/services/healthcare',
    testimonial: {
      text: "Their healthcare risk solutions are unmatched in the industry.",
      author: "Dr. Sarah Johnson",
      company: "Metropolitan Hospital"
    }
  },
  {
    title: 'Property & Real Estate',
    description: 'Protection for commercial properties, including natural disaster coverage and business interruption insurance.',
    icon: <Building className="h-10 w-10" />,
    link: '/services/property'
  },
  {
    title: 'Manufacturing',
    description: 'Comprehensive coverage for manufacturing operations, including equipment breakdown and product liability.',
    icon: <Factory className="h-10 w-10" />,
    link: '/services/manufacturing'
  },
  {
    title: 'Cyber Security',
    description: 'Advanced protection against cyber threats, data breaches, and digital asset risks.',
    icon: <Cloud className="h-10 w-10" />,
    link: '/services/cyber'
  },
  {
    title: 'Analytics & Insights',
    description: 'Data-driven risk assessment and predictive modeling for strategic decision-making.',
    icon: <BarChart className="h-10 w-10" />,
    link: '/services/analytics'
  }
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
        />
      ))}
    </div>
  );
}

export default ServicesGrid;
