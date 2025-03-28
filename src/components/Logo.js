import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <span className="text-primary font-serif font-bold text-2xl">Himig</span>
      <span className="text-secondary font-serif font-bold text-2xl">Solutions</span>
    </Link>
  );
};

export default Logo;