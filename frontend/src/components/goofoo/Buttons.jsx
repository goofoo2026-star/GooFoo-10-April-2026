import React from 'react';

const GoldButton = ({ children, onClick, href, className = '', type = 'button', fullWidth = false }) => {
  const baseClasses = `
    font-bebas uppercase tracking-widest text-base
    bg-dates-gold text-goofoo-ink
    px-8 py-3 rounded-sm
    transition-smooth
    hover:bg-terracotta hover:text-white
    hover:shadow-lg hover:-translate-y-1
    inline-flex items-center justify-center gap-2
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

const GhostButton = ({ children, onClick, href, className = '', type = 'button' }) => {
  const baseClasses = `
    font-bebas uppercase tracking-widest text-base
    bg-transparent text-dates-gold
    border-2 border-dates-gold
    px-8 py-3 rounded-sm
    transition-smooth
    hover:bg-dates-gold hover:text-goofoo-ink
    hover:shadow-lg
    inline-flex items-center justify-center gap-2
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

const TerracottaButton = ({ children, onClick, className = '', type = 'button' }) => {
  const baseClasses = `
    font-bebas uppercase tracking-widest text-base
    bg-terracotta text-white
    px-8 py-3 rounded-sm
    transition-smooth
    hover:bg-[#A03D15] hover:shadow-lg
    hover:-translate-y-1
    inline-flex items-center justify-center gap-2
    ${className}
  `;

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export { GoldButton, GhostButton, TerracottaButton };