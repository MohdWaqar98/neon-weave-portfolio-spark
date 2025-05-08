
import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  technologies,
}) => {
  return (
    <div className="project-card hover-lift h-full">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm h-20 overflow-hidden">{description}</p>
        
        <div className="flex flex-wrap gap-2 py-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white bg-neon-blue/20 hover:bg-neon-blue/30 py-2 px-3 rounded-md transition-colors hover-target"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white bg-gray-700/30 hover:bg-gray-700/50 py-2 px-3 rounded-md transition-colors hover-target"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?auto=format&fit=crop&w=800",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Spring Boot", "React", "MongoDB", "Stripe API"],
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects and deadlines with team collaboration features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Java", "Spring", "MySQL", "React", "Redux"],
    },
    {
      title: "Fitness Tracker",
      description: "An application to track workouts, nutrition, and fitness goals with data visualization.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Spring Boot", "React", "PostgreSQL", "Chart.js"],
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for analyzing and managing social media metrics across platforms.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Java", "Spring Boot", "React", "D3.js", "Firebase"],
    },
    {
      title: "Real Estate Marketplace",
      description: "A platform connecting buyers, sellers and agents with property listings and virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Java", "MongoDB", "Express", "React", "Node.js"],
    },
  ];

  // Use the shadcn/ui Carousel component for smooth transitions
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-black/80 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-4">
          <Code size={24} className="text-neon-purple" />
          <h2 className="section-heading">Projects</h2>
        </div>
        
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Here are some of my recent projects showcasing my skills and experience as a Java Full Stack Developer.
        </p>
        
        <div className="relative">
          <Carousel
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <Project {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="static transform-none rounded-full bg-gray-800/60 hover:bg-gray-700/80 text-white transition-all duration-300 hover:scale-110 focus:outline-none" />
              <CarouselNext className="static transform-none rounded-full bg-gray-800/60 hover:bg-gray-700/80 text-white transition-all duration-300 hover:scale-110 focus:outline-none" />
            </div>
          </Carousel>
          
          {/* Page indicator dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === 0 ? "bg-neon-purple w-6" : "bg-gray-600"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
