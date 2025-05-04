
import React from 'react';
import { Briefcase, School, Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  institution,
  period,
  description,
  type,
}) => {
  return (
    <div className="timeline-item animate-fade-in">
      <div className="timeline-dot">
        {type === 'work' ? (
          <Briefcase size={16} />
        ) : (
          <School size={16} />
        )}
      </div>
      <div className="timeline-card">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-neon-blue">
              {type === 'work' ? company : institution}
            </p>
          </div>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <Calendar size={16} />
            {period}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const experiences = [
    {
      title: "Senior Java Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led the development of enterprise applications using Spring Boot, implemented microservices architecture, and mentored junior developers.",
      type: 'work' as const,
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description: "Developed and maintained web applications using Spring and React, implemented CI/CD pipelines, and collaborated with cross-functional teams.",
      type: 'work' as const,
    },
    {
      title: "Java Developer",
      company: "Tech Start",
      period: "2016 - 2018",
      description: "Built RESTful APIs using Spring, integrated third-party services, and optimized database queries for better performance.",
      type: 'work' as const,
    },
  ];

  const education = [
    {
      title: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering with a focus on distributed systems and cloud computing.",
      type: 'education' as const,
    },
    {
      title: "Bachelor of Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors, focusing on programming fundamentals, data structures, and algorithms.",
      type: 'education' as const,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black/80 to-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 justify-center mb-8">
              <Briefcase size={24} className="text-neon-purple" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="mt-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  {...exp}
                  type="work"
                />
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 justify-center mb-8">
              <School size={24} className="text-neon-purple" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="mt-12">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  {...edu}
                  type="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
