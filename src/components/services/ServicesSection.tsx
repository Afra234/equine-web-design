import React from 'react';

const services = [
  {
    title: "Equine Therapy",
    description: "Professional therapeutic services for horses focusing on rehabilitation and wellness.",
    icon: "🐎"
  },
  {
    title: "Training Programs",
    description: "Customized training programs for both horses and riders of all skill levels.",
    icon: "🎯"
  },
  {
    title: "Health Consultations",
    description: "Expert consultations on equine health, nutrition, and wellness plans.",
    icon: "🏥"
  },
  {
    title: "Performance Enhancement",
    description: "Specialized programs to improve equine athletic performance and recovery.",
    icon: "🏆"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-2xl hover:bg-[#252525] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 