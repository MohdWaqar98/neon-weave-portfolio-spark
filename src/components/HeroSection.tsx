
import React from 'react';
import { Mail, ArrowRight, FileText } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 pb-10 relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neon-purple/10 rounded-full filter blur-[120px] animate-floating" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-blue/10 rounded-full filter blur-[100px] animate-floating" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-neon-cyan/10 rounded-full filter blur-[120px] animate-floating" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <p className="text-lg md:text-xl text-neon-blue">Hi there, I'm a</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Java Full Stack</span> Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            I build modern and responsive applications using Spring Boot, React, and various cloud technologies, 
            focusing on creating seamless user experiences.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="group flex items-center gap-2 bg-gradient-to-r from-neon-purple to-neon-blue py-3 px-6 rounded-full text-white font-medium hover:shadow-lg hover:shadow-neon-purple/20 transition-all hover-target"
            >
              <Mail size={20} />
              Contact Me 
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 border border-gray-700 hover:border-neon-blue py-3 px-6 rounded-full text-white font-medium transition-all hover-target"
            >
              <FileText size={20} />
              Resume
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5b?auto=format&fit=crop&w=800" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-blue/20 rounded-full filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/20 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-400 hover:text-white hover-target">
          <span>Scroll Down</span>
          <div className="mt-2 w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-1.5 bg-gray-400 rounded-full mt-1.5 animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
