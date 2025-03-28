import React from 'react';

const PhotoGallery = ({ images }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl font-bold mb-12 text-center">Our Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden ${
                index % 5 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img 
                src={image} 
                alt={`Couple gallery ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;