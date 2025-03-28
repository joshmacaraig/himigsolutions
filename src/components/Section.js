import React from 'react';

const Section = ({ 
  children, 
  id, 
  bgColor = 'bg-white', 
  py = 'py-16', 
  px = 'px-4 md:px-8', 
  className = '',
  maxWidth = 'max-w-7xl',
  containerClass = ''
}) => {
  return (
    <section id={id} className={`${bgColor} ${py} ${px} ${className}`}>
      <div className={`${maxWidth} mx-auto ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;