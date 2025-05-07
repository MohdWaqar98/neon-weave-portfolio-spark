
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import TimelineSection from '../components/TimelineSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Change document title
    document.title = "Java Full Stack Developer Portfolio";
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <ResumeSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
