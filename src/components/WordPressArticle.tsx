import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle, Zap, Shield, Clock, DollarSign, Code, Palette, Database } from 'lucide-react';

const WordPressArticle = () => {
  const pros = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      title: "Cost-Effective",
      description: "Lower initial costs compared to custom development, making it accessible for smaller equestrian businesses."
    },
    {
      icon: <Palette className="w-6 h-6 text-blue-400" />,
      title: "User-Friendly",
      description: "Easy to use content management system, perfect for busy equestrian business owners who want to update their site without technical knowledge."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Quick Setup",
      description: "Faster deployment time compared to custom solutions, allowing you to get your equestrian business online quickly."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Large Plugin Ecosystem",
      description: "Wide range of plugins available for various equestrian business needs, from booking systems to e-commerce."
    }
  ];

  const cons = [
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Security Concerns",
      description: "Regular updates and maintenance are required to keep WordPress secure, which can be challenging for busy equestrian business owners."
    },
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: "Performance Issues",
      description: "Plugin bloat and unoptimised themes can lead to slow loading times, which is crucial for mobile users at stables or shows."
    },
    {
      icon: <Code className="w-6 h-6 text-red-400" />,
      title: "Limited Customisation",
      description: "While flexible, WordPress can be restrictive for unique equestrian business needs, especially for specialised booking systems or horse management features."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-400" />,
      title: "Hidden Costs",
      description: "Premium plugins, themes, and necessary security measures can add up, potentially making it more expensive than initially anticipated."
    }
  ];

  const recommendations = [
    "Consider your specific business needs before choosing WordPress",
    "Invest in proper security measures and regular maintenance",
    "Optimise for mobile users who may be accessing your site from stables",
    "Plan for scalability as your equestrian business grows",
    "Consider hybrid solutions that combine WordPress with custom features"
  ];

  const conclusion = {
    title: "Final Verdict",
    content: "WordPress is an excellent choice for equestrian businesses with straightforward needs and limited technical resources. However, businesses requiring specialised features or high performance may benefit from a custom solution. Consider your specific needs, budget, and technical capabilities when making this decision."
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Is WordPress Suitable for Equestrian Businesses?
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-8">
            WordPress powers over 40% of all websites, but is it the right choice for equestrian businesses? 
            This comprehensive analysis explores the benefits and limitations of using WordPress for stables, 
            riding schools, and equestrian service providers.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The Pros of WordPress for Equestrian Businesses</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pros.map((pro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  {pro.icon}
                  <h3 className="text-xl font-semibold text-white">{pro.title}</h3>
                </div>
                <p className="text-gray-400">{pro.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The Limitations and Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {cons.map((con, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  {con.icon}
                  <h3 className="text-xl font-semibold text-white">{con.title}</h3>
                </div>
                <p className="text-gray-400">{con.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Key Considerations for Equestrian Businesses</h2>
          <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 mb-12">
            <ul className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>{recommendation}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-400/10 p-6 rounded-lg border border-blue-400/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{conclusion.title}</h3>
                <p className="text-gray-300">{conclusion.content}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default WordPressArticle; 