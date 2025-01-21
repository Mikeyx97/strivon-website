import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, client, challenge, solution, results }) => {
  return (
    <div className="bg-[#232B50] rounded-xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-2">Client: {client}</p>
      
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-white mb-3">Challenge</h4>
        <p className="text-gray-400 mb-6">{challenge}</p>

        <h4 className="text-xl font-semibold text-white mb-3">Solution</h4>
        <p className="text-gray-400 mb-6">{solution}</p>

        <h4 className="text-xl font-semibold text-white mb-3">Results</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start text-gray-400">
              <TrendingUp className="h-5 w-5 text-[#4262FF] mr-3 mt-1" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CaseStudy;
