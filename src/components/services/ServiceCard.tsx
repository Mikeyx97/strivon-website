import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  testimonial?: {
    text: string;
    author: string;
    company: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, testimonial }) => {
  return (
    <div className="bg-[#232B50] rounded-xl p-8 hover:bg-[#2A325A] transition-all duration-300">
      <div className="text-[#4262FF] mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      {testimonial && (
        <div className="mb-6 p-4 bg-[#1A1F36] rounded-lg">
          <p className="text-gray-400 italic mb-4">"{testimonial.text}"</p>
          <p className="text-white font-semibold">{testimonial.author}</p>
          <p className="text-gray-400 text-sm">{testimonial.company}</p>
        </div>
      )}
      
      <Link 
        href={link}
        className="inline-flex items-center text-[#4262FF] hover:text-[#5B7BFF] transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}

export default ServiceCard;
