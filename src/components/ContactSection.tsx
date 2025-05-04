
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-4">
          <Mail size={24} className="text-neon-purple" />
          <h2 className="section-heading">Contact Me</h2>
        </div>
        
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center">
                  <Mail size={20} className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:contact@example.com" className="hover:text-neon-blue hover-target">contact@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <Phone size={20} className="text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-neon-blue hover-target">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                  <Linkedin size={20} className="text-neon-cyan" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue hover-target">linkedin.com/in/example</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center">
                  <Github size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue hover-target">github.com/example</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border-0 input-gradient-border rounded-lg px-4 py-3 focus:ring-0 focus:outline-none hover-target"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border-0 input-gradient-border rounded-lg px-4 py-3 focus:ring-0 focus:outline-none hover-target"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900/50 border-0 input-gradient-border rounded-lg px-4 py-3 focus:ring-0 focus:outline-none hover-target"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-purple to-neon-blue py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-purple/20 transition-all hover-target"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message 
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
