import React from 'react';
import { PenTool, Package, Calculator } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <PenTool className="h-12 w-12 text-blue-600" />,
      title: "Design and Printing Contracts",
      description: "Professional services for graphics designers, printers, and print agents with comprehensive contract management."
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: "Printing Products",
      description: "High-quality printing products and consumables at competitive prices to meet all your printing needs."
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Printing Cost Estimation",
      description: "Expert consultation to determine accurate printing costs for your projects with detailed breakdowns."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}