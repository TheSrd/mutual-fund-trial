import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface InvestmentGoalProps {
  icon: ReactNode;
  title: string;
  description: string;
  stats: string[];
}

const InvestmentGoal = ({ icon, title, description, stats }: InvestmentGoalProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          {icon}
        </div>
        <ArrowRight className="w-6 h-6 text-gray-400" />
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-700">{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentGoal;