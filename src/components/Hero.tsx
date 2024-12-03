import React from 'react';
import { FileCheck, Printer, Clock } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Printing Services for Your Business
          </h1>
          <p className="text-xl mb-8">
            From design to production, we've got your printing needs covered
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center">
              <FileCheck className="h-8 w-8 mr-3" />
              <span>Professional Design</span>
            </div>
            <div className="flex items-center">
              <Printer className="h-8 w-8 mr-3" />
              <span>Quality Printing</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-8 w-8 mr-3" />
              <span>Fast Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}