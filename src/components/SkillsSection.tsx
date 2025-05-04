
import React from 'react';
import { Code } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, color, level }) => {
  return (
    <div className="glass-card p-5 rounded-xl flex flex-col items-center hover-lift hover-target">
      <div 
        className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl"
        style={{ background: `${color}20`, color: color }}
      >
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className="font-semibold">{name}</h3>
      <div className="w-full mt-3 bg-gray-700/30 h-1.5 rounded-full">
        <div 
          className="h-full rounded-full"
          style={{ width: `${level}%`, background: color }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: "☕", color: "#007396", level: 90 },
    { name: "Spring Boot", icon: "🍃", color: "#6DB33F", level: 85 },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E", level: 85 },
    { name: "React", icon: "⚛️", color: "#61DAFB", level: 80 },
    { name: "MongoDB", icon: "🍃", color: "#47A248", level: 75 },
    { name: "Docker", icon: "🐳", color: "#2496ED", level: 70 },
    { name: "AWS", icon: "☁️", color: "#FF9900", level: 65 },
    { name: "Git", icon: "🔀", color: "#F05032", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-4">
          <Code size={24} className="text-neon-purple" />
          <h2 className="section-heading">My Skills</h2>
        </div>
        
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          These are the technologies and tools I specialize in for building robust and scalable applications.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
