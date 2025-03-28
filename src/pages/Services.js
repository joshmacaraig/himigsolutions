import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ServiceDetailsSection from '../components/services/ServiceDetailsSection';
import PricingSection from '../components/services/PricingSection';

const Services = () => {
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
            subtitle="Our Services"
            title="Creating Unforgettable Digital Experiences"
            description="We combine beautiful design with cutting-edge technology to create memorable digital experiences for your special events."
            centered={true}
          />
          <Button to="#pricing" variant="primary" size="lg" className="mt-6">
            View Pricing
          </Button>
        </div>
      </Section>

      {/* Services Detail Sections */}
      <ServiceDetailsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <Section bgColor="bg-primary" py="py-16" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Create Something Special?</h2>
          <p className="text-white/90 mb-8">
            Let us help you create a memorable digital invitation and custom music for your next special event.
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Get Started Today
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Services;