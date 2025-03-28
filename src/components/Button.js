import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, href, variant = 'primary', size = 'md', className = '', onClick, ...rest }) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white focus:ring-primary/50',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary/50',
    accent: 'bg-accent hover:bg-accent/90 text-white focus:ring-accent/50',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary/30',
    'outline-secondary': 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 focus:ring-secondary/30',
    'outline-light': 'bg-transparent border-2 border-white text-white hover:bg-white/20 focus:ring-white/30',
  };

  const sizes = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-5',
    lg: 'text-lg py-2.5 px-6',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  // Render as Link if 'to' prop is provided (internal link)
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // Render as anchor tag if 'href' prop is provided (external link)
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
