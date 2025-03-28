import React from 'react';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import PricingCard from './PricingCard';
import CustomSolutionCard from './CustomSolutionCard';
import { pricingPlans, customSolutions } from '../../data/servicesData';

const PricingSection = () => {
  return (
    <Section id="pricing" bgColor="bg-primary/5" py="py-20">
      <SectionHeading
        subtitle="Our Packages"
        title="Pricing Plans"
        description="Choose the perfect package for your special event. All prices are in USD and include ongoing support throughout your event planning journey."
        centered={true}
      />
      
      {/* Standard pricing plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      
      {/* Custom solutions */}
      <div className="mt-16">
        <SectionHeading
          subtitle="Bespoke Solutions"
          title="Custom Packages"
          description="Need something more tailored to your specific requirements? We offer custom solutions for special projects."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {customSolutions.map((solution, index) => (
            <CustomSolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;