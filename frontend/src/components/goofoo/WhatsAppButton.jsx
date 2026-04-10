import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '919876543210';
  const message = "Hi, I'd like to order GOOFOO chocolate";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="__blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
      style={{
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37,211,102,0.35)'
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" style={{ color: '#FFFFFF' }} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
