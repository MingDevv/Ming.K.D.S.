import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hoverEffect = true, 
  onClick, 
  delay = 0,
  glowOnHover = false 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: delay, ease: 'easeOut' }
    }
  };

  const hoverProps = hoverEffect ? {
    whileHover: { 
      y: -5, 
      borderColor: 'rgba(230, 30, 42, 0.25)',
      boxShadow: glowOnHover 
        ? '0 0 20px rgba(230, 30, 42, 0.15)' 
        : '0 10px 30px rgba(0, 0, 0, 0.4)',
      backgroundColor: 'rgba(25, 20, 20, 0.7)'
    },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  } : {};

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      {...hoverProps}
      onClick={onClick}
      className={`glass rounded-2xl p-6 relative overflow-hidden transition-all border border-white/5 ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
