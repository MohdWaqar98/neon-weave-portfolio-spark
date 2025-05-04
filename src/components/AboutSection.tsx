
import React from 'react';
import { User } from 'lucide-react';

interface TechSkillProps {
  name: string;
  icon: string;
  color: string;
}

const TechSkill: React.FC<TechSkillProps> = ({ name, icon, color }) => {
  return (
    <div className="tech-pill hover-target" style={{ borderColor: `${color}30` }}>
      <span className="w-5 h-5" style={{ color }}>
        {icon}
      </span>
      {name}
    </div>
  );
};

const AboutSection = () => {
  const developerName = "John Doe";
  
  const techSkills = [
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "📦", color: "#339933" },
    { name: "TailwindCSS", icon: "🌊", color: "#06B6D4" },
    { name: "GitHub", icon: "🐙", color: "#181717" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Git", icon: "🔀", color: "#F05032" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-4">
          <User size={24} className="text-neon-purple" />
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden glass-card p-3">
                <img 
                  src="/lovable-uploads/7f10d129-4080-4d68-8c5a-2ec9a5de3f0b.png"
                  alt="Developer Avatar" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -z-10 -top-3 -left-3 right-8 bottom-8 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue opacity-20 blur-md"></div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-3/5 space-y-6 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-medium">
              Hello, I'm <span className="gradient-text font-bold">{developerName}</span>
            </h3>
            <p className="text-gray-300">
              I'm a passionate full-stack developer with a keen eye for design and a commitment to creating seamless user experiences. With several years of experience in web development, I specialize in building modern, responsive, and accessible web applications.
            </p>
            <p className="text-gray-300">
              My approach combines technical expertise with creative problem-solving, allowing me to deliver solutions that are both functional and visually impressive. I'm constantly exploring new technologies and methodologies to enhance my skill set.
            </p>
            
            {/* Technical Skills */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {techSkills.map((skill) => (
                  <TechSkill 
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
