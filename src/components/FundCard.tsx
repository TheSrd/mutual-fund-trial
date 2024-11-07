import React, { useState } from 'react';
import { TrendingUp, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FundCardProps {
  fund: {
    name: string;
    type: string;
    returns: string;
    risk: string;
    minInvestment: string;
    image: string;
    allocation: string[];
  };
}

const FundCard = ({ fund }: FundCardProps) => {
  const [showAllocation, setShowAllocation] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={fund.image} 
          alt={fund.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{fund.name}</h3>
            <p className="text-sm text-gray-600">{fund.type}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {fund.risk}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Expected Returns</p>
            <p className="text-lg font-semibold text-green-600 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {fund.returns}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Min. Investment</p>
            <p className="text-lg font-semibold">₹{fund.minInvestment}</p>
          </div>
        </div>

        <button 
          onClick={() => setShowAllocation(!showAllocation)}
          className="w-full flex items-center justify-between p-2 mb-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-sm font-medium text-gray-700">Fund Allocation</span>
          {showAllocation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showAllocation && (
          <div className="mb-6 p-3 bg-gray-50 rounded-lg">
            {fund.allocation.map((item, index) => (
              <div key={index} className="mb-2 last:mb-0 text-sm text-gray-600">
                • {item}
              </div>
            ))}
          </div>
        )}

        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Start SIP
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <AlertCircle className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundCard;