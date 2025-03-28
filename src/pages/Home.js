import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import PortfolioCard from '../components/PortfolioCard';
import Button from '../components/Button';

// Sample images - would be replaced with actual imports
const sampleImage = "https://placehold.co/600x400";

const Home = () => {
  // Sample data for services
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 10H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
        </svg>
      ),
      title: "Digital Invitations",
      description: "Beautiful, interactive digital invitations for weddings, birthdays, and special events that can be easily shared with your guests.",
      linkTo: "/services#invitations"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      ),
      title: "Custom Music",
      description: "AI-generated custom music that perfectly captures the mood and emotion of your special occasion, created just for you.",
      linkTo: "/services#music"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
      title: "RSVP Management",
      description: "Effortlessly manage guest responses, track attendance, and organize event details all in one place.",
      linkTo: "/services#rsvp"
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      quote: "Himig Solutions created the perfect song for our wedding. It captured our story so beautifully that there wasn't a dry eye in the house when it played.",
      name: "Sarah & Michael",
      role: "Wedding, June 2024"
    },
    {
      quote: "The digital invitation they designed for my 50th birthday was stunning! My guests were impressed by the beautiful design and the custom music that came with it.",
      name: "Robert Chen",
      role: "Birthday Celebration"
    },
    {
      quote: "Working with Himig Solutions was a breeze. They perfectly captured the vibe we wanted for our corporate event and the RSVP system made tracking attendance so simple.",
      name: "Emily Johnson",
      role: "Corporate Event Planner"
    }
  ];

  // Sample data for portfolio
  const portfolioItems = [
    {
      image: sampleImage,
      title: "Elena & David",
      category: "Wedding Invitation",
      linkTo: "/invitation-sample"
    },
    {
      image: sampleImage,
      title: "Summer Gala",
      category: "Event Invitation",
      linkTo: "/invitation-sample"
    },
    {
      image: sampleImage,
      title: "25th Anniversary",
      category: "Celebration",
      linkTo: "/invitation-sample"
    },
    {
      image: sampleImage,
      title: "Baby Shower",
      category: "Family Event",
      linkTo: "/invitation-sample"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Section id="services" py="py-20">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="We combine beautiful design with technology to create memorable digital experiences for your special events."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              linkTo={service.linkTo}
            />
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section id="process" bgColor="bg-neutral-light" py="py-20">
        <SectionHeading
          subtitle="Our Process"
          title="How We Create Your Perfect Experience"
          description="We make creating custom invitations and music simple and stress-free."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <h3 className="text-lg font-serif font-bold mb-2">Consultation</h3>
            <p className="text-neutral-dark/80">We start by understanding your vision, preferences, and event details.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <h3 className="text-lg font-serif font-bold mb-2">Design</h3>
            <p className="text-neutral-dark/80">Our designers create a custom concept based on your style and event theme.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
            <h3 className="text-lg font-serif font-bold mb-2">Create</h3>
            <p className="text-neutral-dark/80">We craft your invitation and AI-generated music to perfectly match your vision.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
            <h3 className="text-lg font-serif font-bold mb-2">Deliver</h3>
            <p className="text-neutral-dark/80">Your digital invitation is ready to share, with RSVP tracking and guest management.</p>
          </div>
        </div>
      </Section>

      {/* Featured Work Section */}
      <Section id="portfolio" py="py-20">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Featured Work"
          description="Take a look at some of our recent digital invitations and projects."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              linkTo={item.linkTo}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/portfolio" variant="outline">View All Projects</Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" bgColor="bg-primary/5" py="py-20">
        <SectionHeading
          subtitle="Client Feedback"
          title="What Our Clients Say"
          description="Don't just take our word for it - hear what our clients have to say about their experience with us."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </Section>

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

export default Home;