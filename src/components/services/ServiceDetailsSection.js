import React from 'react';
import Section from '../Section';
import ServiceDetail from './ServiceDetail';
import { services } from '../../data/servicesData';

const ServiceDetailsSection = () => {
  return (
    <>
      {services.map((service, index) => (
        <Section 
          key={service.id} 
          id={service.id} 
          bgColor={index % 2 === 0 ? 'bg-white' : 'bg-neutral-light'} 
          py="py-20"
        >
          <ServiceDetail service={service} index={index} />
        </Section>
      ))}
    </>
  );
};

export default ServiceDetailsSection;