import React from 'react';
import { Printer, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Printer className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Fansoft Services</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}