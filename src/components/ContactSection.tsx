
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
  
    try {
      // Sending email using EmailJS with environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not set');
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };
  
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
  
      console.log('Form submitted successfully');
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          
          {/* Contact Form with React Hook Form and Zod */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="w-full bg-gray-900/50 border-0 input-gradient-border rounded-lg px-4 py-3 focus:ring-0 focus:outline-none hover-target"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          type="email"
                          className="w-full bg-gray-900/50 border-0 input-gradient-border rounded-lg px-4 py-3 focus:ring-0 focus:outline-none hover-target"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          rows={5}
                          className="w-full bg-gray-900/50 border-0 input-gradient-border rounded-lg px-4 py-3 focus:ring-0 focus:outline-none hover-target"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-blue py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-purple/20 transition-all hover-target"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message 
                      <Send size={20} />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
