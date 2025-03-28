import React from 'react';

const CoupleStory = ({ image, story }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={image} alt="Couple" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-neutral-dark/80">
              {story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;