import React from 'react';
import { MapPin } from 'lucide-react';

const Offices = () => {
  const offices = {
    international: [
      {
        city: 'London',
        address: 'Canary Wharf 1 Canada Square',
        postalCode: 'E14 5AA',
        country: 'United Kingdom'
      },
      {
        city: 'Japan',
        address: 'Daiwa Roynet Hotel Building 2',
        postalCode: '305-0031',
        country: 'Tsukuba'
      },
      {
        city: 'Dubai',
        address: 'Dubai World Trade Centre C1',
        postalCode: '',
        country: 'UAE'
      }
    ],
    usa: [
      {
        city: 'New York',
        address: '142 W 57th Street',
        postalCode: '10019',
        state: 'NY'
      },
      {
        city: 'Miami Beach',
        address: '1688 Meridian Avenue',
        postalCode: '33139',
        state: 'FL'
      },
      {
        city: 'Dallas',
        address: '5956 Sherry Lane',
        postalCode: '75225',
        state: 'TX'
      },
      {
        city: 'Los Angeles',
        address: '718 South Hill St',
        postalCode: '90014',
        state: 'CA'
      },
      {
        city: 'Chicago',
        address: '1918 N Mendell Street',
        postalCode: '60642',
        state: 'IL'
      },
      {
        city: 'Boston',
        address: '90 Canal Street',
        postalCode: '02114',
        state: 'MA'
      },
      {
        city: 'Washington',
        address: '1050 Connecticut Avenue Northwest',
        postalCode: '20036',
        state: 'DC'
      },
      {
        city: 'Atlanta',
        address: '260 Peachtree Street North West',
        postalCode: '30303',
        state: 'GA'
      },
      {
        city: 'Seattle',
        address: 'US Bank Center',
        postalCode: '98101',
        state: 'WA'
      },
      {
        city: 'Charleston',
        address: 'Faber Center',
        postalCode: '29405',
        state: 'SC'
      }
    ]
  };

  const getGoogleMapsLink = (office: any) => {
    const query = encodeURIComponent(
      `${office.address}, ${office.city}, ${office.state || office.country} ${office.postalCode}`
    );
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-12">Our Global Offices</h2>
      
      {/* International Offices */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-[#4262FF]">International</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.international.map((office, index) => (
            <a 
              key={index}
              href={getGoogleMapsLink(office)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#232B50] p-6 rounded-xl hover:bg-[#2A325A] transition-colors"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#4262FF] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-2">{office.city}</h4>
                  <p className="text-gray-400">{office.address}</p>
                  <p className="text-gray-400">{office.postalCode}</p>
                  <p className="text-gray-400">{office.country}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* US Offices */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-[#4262FF]">United States</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.usa.map((office, index) => (
            <a 
              key={index}
              href={getGoogleMapsLink(office)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#232B50] p-6 rounded-xl hover:bg-[#2A325A] transition-colors"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#4262FF] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-2">{office.city}</h4>
                  <p className="text-gray-400">{office.address}</p>
                  <p className="text-gray-400">{office.city}, {office.state} {office.postalCode}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;
