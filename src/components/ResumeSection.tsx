
import React, { useState } from 'react';
import { Eye, Download, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const ResumeSection = () => {
  const [showPdf, setShowPdf] = useState(false);
  
  const handlePreviewResume = () => {
    setShowPdf(true);
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

  const handleClosePdf = () => {
    setShowPdf(false);
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Resume</h2>
        
        {!showPdf ? (
          <div className="mt-12 flex flex-col items-center justify-center">
            <Card className="glass-card border-white/5 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl w-full overflow-hidden">
              <CardHeader className="pb-2 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue mb-3">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold gradient-text">Professional Resume</CardTitle>
                  <CardDescription className="text-gray-300">View my qualifications and experience</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-6 items-center text-center">
                  <p className="text-gray-300 leading-relaxed max-w-2xl">
                    My resume highlights my professional journey, technical expertise, and project accomplishments.
                    Download a copy for your reference or preview it online.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        ) : (
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
              <div className="flex justify-end mb-4">
                <Button 
                  onClick={handleClosePdf} 
                  variant="outline" 
                  className="border border-neon-blue/30 hover:border-neon-blue hover:bg-white/5 text-white"
                >
                  Close PDF
                </Button>
              </div>
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                <iframe 
                  src="/resume.pdf" 
                  className="w-full h-full border-0" 
                  title="Resume PDF"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
