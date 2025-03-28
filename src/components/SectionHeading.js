import React from 'react';

const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  centered = true, 
  className = '', 
  subtitleClass = '', 
  titleClass = '', 
  descriptionClass = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className={`uppercase text-primary font-medium tracking-wide mb-2 ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${titleClass}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`text-neutral-dark/80 max-w-3xl ${centered ? 'mx-auto' : ''} ${descriptionClass}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;