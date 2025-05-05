
import React from 'react';
import { Eye, Download } from 'lucide-react';

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
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Resume</h2>
        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="glass-card p-8 rounded-xl max-w-3xl w-full">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Resume</h3>
                <p className="text-gray-300 mb-6">
                  Download my resume or preview it online
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handlePreviewResume}
                  className="group flex items-center gap-2 bg-gradient-to-r from-neon-purple to-neon-blue py-3 px-6 rounded-full text-white font-medium hover:shadow-lg hover:shadow-neon-purple/20 transition-all hover-target"
                >
                  <Eye size={20} />
                  Preview Resume
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 border border-gray-700 hover:border-neon-blue py-3 px-6 rounded-full text-white font-medium transition-all hover-target"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
