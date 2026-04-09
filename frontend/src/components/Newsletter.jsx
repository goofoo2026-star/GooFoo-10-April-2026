import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Mock newsletter signup
    toast({
      title: "Successfully Subscribed!",
      description: "You'll be the first to know about new products and offers.",
    });
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#1a3a52] to-[#2a4a62] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            JOIN THE CREW!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive offers, new flavor launches, and sweet surprises straight to your inbox
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-yellow-400 h-12"
              />
              <Button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 h-12 transition-all duration-300 transform hover:scale-105"
              >
                SUBSCRIBE
              </Button>
            </div>
          </form>

          <p className="text-sm text-white/60 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
