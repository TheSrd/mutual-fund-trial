import React, { useState } from 'react';
import { IndianRupee, GraduationCap, TrendingUp, Shield, ArrowRight, Target, School } from 'lucide-react';
import Header from './components/Header';
import FundCard from './components/FundCard';
import InvestmentGoal from './components/InvestmentGoal';

function App() {
  const [activeTab, setActiveTab] = useState('crore');

  const croreFunds = [
    {
      name: "Aggressive Growth Basket",
      type: "High Growth",
      returns: "15-18",
      risk: "High",
      minInvestment: "10000",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=400",
      allocation: [
        "Large Cap (40%): ICICI Bluechip + Axis Bluechip",
        "Mid Cap (35%): SBI Midcap + HDFC Midcap",
        "Small Cap (25%): Nippon Small Cap + Kotak Small Cap"
      ]
    },
    {
      name: "Balanced Growth Basket",
      type: "Moderate Growth",
      returns: "12-15",
      risk: "Moderate",
      minInvestment: "5000",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400",
      allocation: [
        "Large Cap (50%): HDFC Index + UTI Nifty",
        "Mid Cap (30%): Kotak Emerging + Axis Midcap",
        "Debt (20%): ICICI Corporate Bond + Aditya BSL"
      ]
    },
    {
      name: "Conservative Growth Basket",
      type: "Stable Growth",
      returns: "10-12",
      risk: "Low to Moderate",
      minInvestment: "5000",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=400",
      allocation: [
        "Large Cap (40%): SBI Bluechip + Mirae Large Cap",
        "Hybrid (35%): ICICI Balanced + HDFC Balanced",
        "Debt (25%): Axis Dynamic Bond + IDFC Bond"
      ]
    }
  ];

  const childEducationFunds = [
    {
      name: "Long-term Education Basket",
      type: "10+ Years Horizon",
      returns: "13-15",
      risk: "Moderate to High",
      minInvestment: "5000",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
      allocation: [
        "Equity (60%): Axis Long Term + SBI Focused",
        "Hybrid (25%): Mirae Asset Hybrid + DSP Equity & Bond",
        "International (15%): Franklin Asian Equity + ICICI US Bluechip"
      ]
    },
    {
      name: "Mid-term Education Basket",
      type: "5-10 Years Horizon",
      returns: "11-13",
      risk: "Moderate",
      minInvestment: "5000",
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80&w=400",
      allocation: [
        "Large Cap (40%): Kotak Bluechip + HDFC Top 100",
        "Hybrid (40%): Canara Robeco + Aditya BSL Balanced",
        "Debt (20%): SBI Dynamic Bond + HDFC Credit Risk"
      ]
    },
    {
      name: "Short-term Education Basket",
      type: "2-5 Years Horizon",
      returns: "9-11",
      risk: "Low to Moderate",
      minInvestment: "10000",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400",
      allocation: [
        "Hybrid (40%): ICICI Regular Savings + HDFC Hybrid",
        "Debt (40%): Axis Banking & PSU + Kotak Bond",
        "Liquid (20%): SBI Liquid + Aditya BSL Liquid"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Your Investment Journey</h1>
          <p className="text-xl text-gray-600">Choose your investment goal and build a secure financial future.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <InvestmentGoal 
            icon={<Target className="w-8 h-8" />}
            title="1 Crore Goal"
            description="Strategic mutual fund baskets designed to help you reach ₹1 Crore"
            stats={["Customized fund allocation", "Professional rebalancing", "₹5000 Min. Monthly SIP"]}
          />
          <InvestmentGoal 
            icon={<GraduationCap className="w-8 h-8" />}
            title="Child Education"
            description="Secure your child's future with dedicated education funding"
            stats={["Age-based allocation", "Lock-in till goal", "Tax Benefits under 80C"]}
          />
        </div>

        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              className={`pb-4 px-4 ${activeTab === 'crore' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('crore')}
            >
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>1 Crore Goal</span>
              </div>
            </button>
            <button
              className={`pb-4 px-4 ${activeTab === 'education' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('education')}
            >
              <div className="flex items-center space-x-2">
                <School className="w-5 h-5" />
                <span>Child Education</span>
              </div>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {(activeTab === 'crore' ? croreFunds : childEducationFunds).map((fund, index) => (
            <FundCard key={index} fund={fund} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
              <p className="mb-6">Our investment experts are here to guide you through your investment journey.</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors">
                Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <Shield className="w-16 h-16 opacity-50" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;