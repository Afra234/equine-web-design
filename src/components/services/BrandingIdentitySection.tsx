import React from 'react';
import { ChevronRight } from 'lucide-react';

const BrandingIdentitySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-white">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Branding & Identity
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              We create distinctive brand identities that capture the essence of your equestrian business. 
              From logo design to brand guidelines, we ensure your visual identity reflects the sophistication 
              and heritage of the equestrian world.
            </p>
            <button className="px-6 py-2 bg-transparent border border-blue-400/30 text-blue-300 rounded-full font-light tracking-wide group flex items-center justify-center gap-2">
              Learn More
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/branding-preview.jpg')] bg-cover bg-center opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingIdentitySection; 