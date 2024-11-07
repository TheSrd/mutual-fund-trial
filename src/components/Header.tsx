import React from 'react';
import { IndianRupee, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <IndianRupee className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">WealthGrow</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Explore Funds</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Learn</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;