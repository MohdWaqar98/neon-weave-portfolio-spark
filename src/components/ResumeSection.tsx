
import React from 'react';
import { Eye, Download, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const ResumeSection = () => {
  const handlePreviewResume = () => {
    // Open resume in a new tab
    window.open('/resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'developer-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Resume</h2>
        <div className="mt-12 flex flex-col items-center justify-center">
          <Card className="glass-card border-white/5 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl w-full overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold gradient-text">Professional Resume</CardTitle>
                  <CardDescription className="text-gray-300">View my qualifications and experience</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  My resume highlights my professional journey, technical expertise, and project accomplishments.
                  Download a copy for your reference or preview it online.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <Button 
                    onClick={handlePreviewResume}
                    className="bg-gradient-to-r from-neon-purple to-neon-blue hover:brightness-110 transition-all group flex items-center justify-center gap-2 py-6 px-8 rounded-xl text-white font-medium w-full sm:w-auto"
                  >
                    <Eye size={20} className="group-hover:animate-pulse" />
                    <span>Preview Resume</span>
                  </Button>
                  
                  <Button 
                    onClick={handleDownloadResume}
                    variant="outline" 
                    className="border border-neon-blue/30 hover:border-neon-blue hover:bg-white/5 flex items-center justify-center gap-2 py-6 px-8 rounded-xl text-white font-medium transition-all group w-full sm:w-auto"
                  >
                    <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                    <span>Download Resume</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
