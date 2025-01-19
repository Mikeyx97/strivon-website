import React from 'react';
import { ArrowRight, Shield, BarChart3, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Driving Ambition. <br /> Delivering Excellence.
            </h1>
            <p className="text-xl text-gray-300">
              Strivon stands at the forefront of risk management, delivering innovative and tailored solutions to meet the complexities of modern insurance and reinsurance contracts. With Strivon as your partner, you gain a team driven by ambition and precision, ensuring excellence at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center">
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Contact Us
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <Shield className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">A+ Rated</h3>
              <p className="text-gray-300">Superior financial strength and operational excellence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <Globe className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-300">Operating in 25+ countries with regional expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <BarChart3 className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">$50B+ Managed</h3>
              <p className="text-gray-300">Total risk value under management</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-xl flex items-center justify-center text-center">
              <div>
                <p className="text-2xl font-bold mb-2">500+</p>
                <p className="text-lg">Risk Management Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

