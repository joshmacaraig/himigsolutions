// Replace with actual images when available
const sampleImage = "https://placehold.co/600x400";

// Sample music files
const musicPaths = {
  classical: "/music/classical-wedding.mp3",
  waltz: "/music/anniversary-waltz.mp3",
  lullaby: "/music/gentle-lullaby.mp3",
  graduation: "/music/graduation-theme.mp3"
};

export const portfolioItems = [
  {
    id: 1,
    title: "Elena & David",
    category: "Wedding Invitation",
    description: "An elegant digital wedding invitation with custom music and interactive RSVP functionality.",
    image: sampleImage,
    features: [
      "Custom classical background music",
      "Listen to sample: ",
      { type: "audio", src: musicPaths.classical },
      "Interactive map with venue directions",
      "Photo gallery of the couple",
      "Personalized guest greeting",
      "Customized RSVP form with meal selection"
    ],
    testimonial: {
      quote: "The digital invitation exceeded our expectations. Our guests were impressed by the beautiful design and the custom music that perfectly captured our love story.",
      name: "Elena & David",
      event: "Wedding, May 2024"
    },
    linkTo: "/invitation/elena_and_david"
  },
  {
    id: 2,
    title: "Summer Gala",
    category: "Event Invitation",
    description: "A vibrant and sophisticated digital invitation for an annual charity gala.",
    image: sampleImage,
    features: [
      "Animated background elements",
      "Donation and ticket purchase integration",
      "Previous years' highlight videos",
      "Detailed event schedule",
      "Sponsorship information"
    ],
    testimonial: {
      quote: "The digital invitation for our gala helped us increase attendance by 27% compared to previous years. The donation integration was especially valuable.",
      name: "Sarah Johnson",
      event: "Charity Event Planner"
    },
    linkTo: "/invitation-sample"
  },
  {
    id: 3,
    title: "25th Anniversary",
    category: "Celebration",
    description: "A nostalgic yet modern invitation celebrating 25 years of marriage.",
    image: sampleImage,
    features: [
      "Timeline of the couple's journey",
      "Custom anniversary waltz music",
      "Listen to sample: ",
      { type: "audio", src: musicPaths.waltz },
      "Memory sharing functionality for guests",
      "Photo and video montage",
      "Integrated gift registry"
    ],
    testimonial: {
      quote: "The timeline feature was a beautiful way to share our journey with loved ones. Everyone loved the custom music that captured the essence of our relationship.",
      name: "Michael & Jennifer",
      event: "Anniversary Celebration"
    },
    linkTo: "/invitation/michael_and_jennifer"
  },
  {
    id: 4,
    title: "Corporate Conference",
    category: "Business Event",
    description: "A professional digital invitation for a tech industry conference with integrated registration system.",
    image: sampleImage,
    features: [
      "Session selection and scheduling",
      "Speaker profiles and bios",
      "Networking feature with attendee matching",
      "Real-time updates and announcements",
      "Post-event survey integration"
    ],
    testimonial: {
      quote: "The registration system was seamless and the digital experience perfectly matched our brand. Attendees particularly appreciated the networking feature.",
      name: "Alex Chen",
      event: "Tech Summit 2024"
    },
    linkTo: "/invitation-sample"
  },
  {
    id: 5,
    title: "Baby Shower",
    category: "Family Event",
    description: "A charming and interactive baby shower invitation with custom lullaby music.",
    image: sampleImage,
    features: [
      "Custom gentle lullaby composition",
      "Listen to sample: ",
      { type: "audio", src: musicPaths.lullaby },
      "Gift registry integration",
      "Interactive baby-themed games",
      "Parenting wisdom sharing section",
      "Photo upload for guests' baby pictures"
    ],
    testimonial: {
      quote: "The custom lullaby was so beautiful that we still play it for our baby! The interactive elements made the virtual shower feel intimate and special.",
      name: "Emma & James",
      event: "Baby Shower"
    },
    linkTo: "/invitation/emma_and_james"
  },
  {
    id: 6,
    title: "Graduation Celebration",
    category: "Academic Achievement",
    description: "A dynamic and celebratory digital invitation for a graduation party.",
    image: sampleImage,
    features: [
      "Upbeat custom graduation theme music",
      "Listen to sample: ",
      { type: "audio", src: musicPaths.graduation },
      "Academic journey timeline",
      "Future plans and aspirations section",
      "Integrated video messages from family",
      "Interactive congratulations board"
    ],
    testimonial: {
      quote: "The graduation music was perfect for the occasion, and we loved how the invitation showcased the academic journey. A truly special digital experience!",
      name: "Taylor Smith",
      event: "Graduation Party"
    },
    linkTo: "/invitation-sample"
  }
];

export const filterCategories = [
  { name: "All", value: "all" },
  { name: "Wedding", value: "Wedding Invitation" },
  { name: "Event", value: "Event Invitation" },
  { name: "Celebration", value: "Celebration" },
  { name: "Business", value: "Business Event" },
  { name: "Family", value: "Family Event" },
  { name: "Academic", value: "Academic Achievement" }
];