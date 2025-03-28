import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioDetailCard from '../components/portfolio/PortfolioDetailCard';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import Button from '../components/Button';
import { portfolioItems, filterCategories } from '../data/portfolioData';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  // Filter items when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeCategory)
      );
    }
    // Reset selected item when changing categories
    setSelectedItem(null);
  }, [activeCategory]);

  // Handle portfolio item selection
  const handleItemSelect = (id) => {
    const item = portfolioItems.find((item) => item.id === id);
    setSelectedItem(item);
    // Scroll to the detail section
    if (item) {
      document.getElementById('portfolio-detail').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Section 
        bgColor="bg-primary/10" 
        py="py-20"
        className="text-center"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Our Work"
            title="Portfolio Gallery"
            description="Explore our collection of digital invitations, custom music compositions, and event experiences that we've created for our clients."
            centered={true}
          />
        </div>
      </Section>

      {/* Portfolio Gallery Section */}
      <Section id="portfolio-gallery" py="py-20">
        <CategoryFilter 
          categories={filterCategories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleItemSelect(item.id)}
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              >
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  category={item.category}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-dark/80 text-lg">No items found in this category. Please select another category.</p>
          </div>
        )}
      </Section>

      {/* Portfolio Detail Section */}
      <Section 
        id="portfolio-detail" 
        py={selectedItem ? "py-20" : "py-0"} 
        bgColor="bg-neutral-light"
        className={selectedItem ? "block" : "hidden"}
      >
        {selectedItem && (
          <>
            <button 
              onClick={() => setSelectedItem(null)} 
              className="flex items-center text-primary font-medium mb-8 hover:underline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gallery
            </button>
            
            <PortfolioDetailCard item={selectedItem} />
          </>
        )}
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-primary" py="py-16" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Create Your Own?</h2>
          <p className="text-white/90 mb-8">
            Let us help you design a beautiful digital invitation and custom music for your special event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="/services" variant="secondary" size="lg">
              View Our Services
            </Button>
            <Button to="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;