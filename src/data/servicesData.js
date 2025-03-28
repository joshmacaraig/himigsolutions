// Replace these with actual imports later
const sampleImage = "https://placehold.co/600x400";
const sampleAudio = "https://example.com/sample-audio.mp3";

// Services data
export const services = [
  {
    id: "invitations",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 10H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
      </svg>
    ),
    title: "Digital Invitations",
    description: "Beautiful, interactive digital invitations for weddings, birthdays, and special events that can be easily shared with your guests.",
    features: [
      "Fully responsive design that works on any device",
      "Custom animations and transitions",
      "Personalized design to match your event theme",
      "Easy sharing via link, email, or social media",
      "Interactive RSVP functionality",
      "Guest information collection",
      "Updates and announcements feature"
    ],
    image: sampleImage
  },
  {
    id: "music",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
    title: "Custom Music",
    description: "AI-generated custom music that perfectly captures the mood and emotion of your special occasion, created just for you.",
    features: [
      "Personalized compositions based on your preferences",
      "Multiple style options (classical, pop, jazz, etc.)",
      "Customizable length and structure",
      "High-quality mastering and production",
      "Unlimited revisions until you're satisfied",
      "Exclusive rights to your custom composition",
      "Optional professional recording with live musicians"
    ],
    audio: sampleAudio
  },
  {
    id: "rsvp",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    title: "RSVP Management",
    description: "Effortlessly manage guest responses, track attendance, and organize event details all in one place.",
    features: [
      "Real-time RSVP tracking and updates",
      "Guest list management and organization",
      "Meal preference and dietary restriction collection",
      "Plus-one management",
      "Custom questions for additional information",
      "Automated reminder emails",
      "Data export for event planning"
    ],
    image: sampleImage
  },
  {
    id: "software",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
    title: "Custom Software Solutions",
    description: "Tailored software solutions to meet your specific event management or business needs.",
    features: [
      "Custom web and mobile applications",
      "Event management systems",
      "Guest experience enhancement tools",
      "Data analytics and reporting dashboards",
      "Third-party integrations",
      "API development",
      "Ongoing support and maintenance"
    ],
    image: sampleImage
  }
];

// Pricing plans data
export const pricingPlans = [
  {
    title: "Basic",
    price: 249,
    description: "Perfect for small events and simple needs",
    features: [
      "Digital invitation (single page)",
      "Basic RSVP functionality",
      "Simple AI-generated background music (30 seconds)",
      "Mobile responsive design",
      "3 design revisions",
      "Email support"
    ],
    isPopular: false,
    buttonText: "Get Started",
    buttonVariant: "outline"
  },
  {
    title: "Premium",
    price: 499,
    description: "Ideal for weddings and special celebrations",
    features: [
      "Multi-page digital invitation experience",
      "Advanced RSVP with meal choices",
      "Custom AI-generated theme music (up to 2 minutes)",
      "Photo gallery integration",
      "Interactive schedule and details section",
      "Unlimited design revisions",
      "Priority email & phone support",
      "30-minute consultation call"
    ],
    isPopular: true,
    buttonText: "Most Popular",
    buttonVariant: "secondary"
  },
  {
    title: "Luxury",
    price: 999,
    description: "The ultimate event experience package",
    features: [
      "Premium multi-page invitation suite",
      "Complete guest management system",
      "Fully custom AI-composed music (up to 5 minutes)",
      "Professional live musician recording option (+fee)",
      "Interactive maps and venue information",
      "Video integration",
      "Custom animations and transitions",
      "Dedicated project manager",
      "2 hour consultation and planning session"
    ],
    isPopular: false,
    buttonText: "Contact Us",
    buttonVariant: "outline"
  }
];

// Custom solution packages
export const customSolutions = [
  {
    title: "Custom Music Production",
    description: "Beyond our standard packages, we offer fully customized music composition and production services.",
    priceRange: "$500-$5,000",
    buttonText: "Get a Quote"
  },
  {
    title: "Enterprise Software Solutions",
    description: "Custom software development for businesses and large-scale events.",
    priceRange: "Starting at $2,500",
    buttonText: "Book a Consultation"
  },
  {
    title: "White-Label Services",
    description: "Our digital invitation and RSVP platform available for event planners and agencies.",
    priceRange: "Custom Pricing",
    buttonText: "Partner With Us"
  }
];