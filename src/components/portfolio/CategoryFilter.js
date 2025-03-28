import React from 'react';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category.value}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === category.value
              ? 'bg-primary text-white'
              : 'bg-neutral-light text-neutral-dark hover:bg-primary/10'
          }`}
          onClick={() => setActiveCategory(category.value)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;