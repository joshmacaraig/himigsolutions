import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ 
  image, 
  title, 
  category, 
  linkTo, 
  className = '' 
}) => {
  return (
    <div className={`group overflow-hidden rounded-lg shadow-md ${className}`}>
      <Link to={linkTo} className="block relative">
        <div className="aspect-w-16 aspect-h-9 bg-neutral-light overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          {category && (
            <p className="text-sm text-secondary font-medium mb-1">{category}</p>
          )}
          <h3 className="text-xl font-serif font-bold">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;