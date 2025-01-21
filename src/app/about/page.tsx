import Offices from '../../components/about/Offices';

export default function About() {
  return (
    <div className="bg-[#1A1F36] text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">About Strivon</h1>
        
        <p className="text-gray-400 text-xl mb-12">
          Strivon is the global leader in risk management, delivering tailored solutions that address 
          the complexities of modern insurance and reinsurance challenges.
        </p>

        <Offices />
      </div>
    </div>
  );
}
