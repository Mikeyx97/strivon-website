'use client';  // Mark this as a client-side component

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Services',
      path: '/services',
      dropdownItems: [
        { 
          name: 'Fleet & Transportation', 
          path: '/services/fleet', 
          description: 'Strivon’s fleet risk management solutions ensure that your fleet operates efficiently while minimizing risk factors such as accidents, maintenance costs, and insurance premiums. With our data-driven approach, your fleet is always optimized for success.'
        },
        { 
          name: 'Healthcare & Medical', 
          path: '/services/healthcare', 
          description: 'Our healthcare risk management strategies help institutions safeguard patient safety, meet regulatory standards, and reduce operational risks, ensuring compliance and operational excellence.'
        },
        { 
          name: 'Property & Real Estate', 
          path: '/services/property', 
          description: 'We specialize in property risk management, covering everything from asset protection to regulatory compliance, helping developers and property managers minimize risks in construction, leasing, and property management.'
        },
        { 
          name: 'Public Sector', 
          path: '/services/public-sector', 
          description: 'We provide innovative risk management solutions to the public sector, helping government organizations, municipalities, and institutions reduce risks in public safety, infrastructure, and government services.'
        },
      ]
    },
    {
      title: 'Solutions',
      path: '/solutions',
      dropdownItems: [
        { 
          name: 'Risk Management', 
          path: '/solutions/risk-management', 
          description: 'At Strivon, we lead the way in strategic risk management, providing businesses with the tools they need to predict, mitigate, and recover from risks, ensuring long-term stability and resilience in an uncertain world.'
        },
        { 
          name: 'Insurance Programs', 
          path: '/solutions/insurance', 
          description: 'Strivon offers cutting-edge insurance solutions designed to meet the unique needs of modern businesses. Our programs are tailored to provide optimal protection while balancing cost efficiency.'
        },
        { 
          name: 'Digital Solutions', 
          path: '/solutions/digital', 
          description: 'We integrate advanced digital tools and technologies to optimize risk management operations, from AI-powered analytics to predictive modeling, ensuring data-driven decisions and future-proof solutions.'
        },
        { 
          name: 'Analytics', 
          path: '/solutions/analytics', 
          description: 'Harnessing the power of data, Strivon’s advanced analytics solutions help businesses gain deeper insights into their risk profile, allowing for smarter decision-making and resource allocation.'
        },
      ]
    },
    {
      title: 'About',
      path: '/about',
      dropdownItems: [
        { 
          name: 'Our Story', 
          path: '/about', 
          description: 'For over a decade, Strivon has been the leader in risk management, providing world-class solutions across a variety of industries. We are committed to delivering tailored risk strategies that drive success and innovation.'
        },
        { 
          name: 'Leadership', 
          path: '/about/leadership', 
          description: 'Our leadership team brings decades of experience in risk management, business strategy, and innovative solutions, guiding Strivon toward becoming the premier risk management firm worldwide.'
        },
        { 
          name: 'Global Offices', 
          path: '/about/locations', 
          description: 'Strivon operates globally, with offices strategically located around the world, providing us with local expertise and the ability to serve clients across diverse markets, from the U.S. to Asia and Europe.'
        },
        { 
          name: 'Careers', 
          path: '/careers', 
          description: 'At Strivon, we are always looking for passionate and driven professionals to join our team. Work with the best in the industry and be part of a company that is shaping the future of risk management.'
        },
      ]
    }
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">STRIVON</div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => toggleDropdown(item.title)}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <div>
                          <strong>{dropdownItem.name}</strong>
                          <p className="text-sm text-gray-500">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Globe className="h-5 w-5" />
            </button>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {menuItems.map((item) => (
            <div key={item.title} className="px-4 py-2">
              <button
                className="flex items-center justify-between w-full text-gray-700"
                onClick={() => toggleDropdown(item.title)}
              >
                <span>{item.title}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === item.title && (
                <div className="mt-2 space-y-2 pl-4">
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.path}
                      className="block py-2 text-gray-600 hover:text-blue-600"
                    >
                      <div>
                        <strong>{dropdownItem.name}</strong>
                        <p className="text-sm text-gray-500">{dropdownItem.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

