import { MessageCircle } from 'lucide-react';
import { motion as fMotion } from 'framer-motion';

export const FloatingWhatsApp = () => {
  return (
    <fMotion.a
      href="https://wa.me/5511956076123"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:bg-[#22c35e] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 hover:scale-[1.05]"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', delay: 1, stiffness: 200, damping: 20 }}
    >
      <MessageCircle className="w-8 h-8" />
    </fMotion.a>
  );
};
