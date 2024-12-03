import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Printing press"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Fansoft Services</h2>
            <p className="text-gray-600 mb-4">
              Fansoft Services is a leading provider of printing solutions in Nigeria. We specialize in the order and design
              of printing contracts for organizations, companies, individuals, graphics designers, printers, print agents,
              and more.
            </p>
            <p className="text-gray-600 mb-4">
              With our extensive experience and expertise in the industry, we offer a wide range of printing products
              and consumables to meet the diverse needs of our clients.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, reliability, and customer satisfaction sets us apart as a trusted partner
              in the printing industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}