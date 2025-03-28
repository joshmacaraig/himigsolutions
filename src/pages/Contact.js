import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
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
            subtitle="Get in Touch"
            title="Contact Us"
            description="Have questions or ready to start creating your perfect digital experience? We'd love to hear from you!"
            centered={true}
          />
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section py="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ContactInfo />
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </Section>

      {/* Map Section (Optional) */}
      <Section bgColor="bg-neutral-light" py="py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold">Find Us</h2>
        </div>
        <div className="w-full h-96 bg-neutral border border-neutral rounded-lg flex items-center justify-center">
          {/* Replace with an actual map integration */}
          <p className="text-neutral-dark/70">Map Integration Here</p>
        </div>
      </Section>
    </div>
  );
};

export default Contact;