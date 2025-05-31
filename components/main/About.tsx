

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I am{' '}
              <span className="hero-gradient">John</span>,
            </h1>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-600">
              Creative Technologist
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            I craft innovative digital experiences that blend creativity with cutting-edge technology. 
            Passionate about bringing ideas to life through code and design.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
              <img 
                src="/lovable-uploads/4ec880da-da1e-4308-ba79-c4b60b2d82ea.png"
                alt="John - Creative Technologist"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;