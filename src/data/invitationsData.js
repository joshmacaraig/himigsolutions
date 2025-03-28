/**
 * Invitation data mapping file
 * Contains configuration for all invitation pages
 */

// Invitation mapping - maps URL slugs to specific invitation components and data
const invitationMap = {
  // Wedding invitations
  'elena_and_david': {
    type: 'wedding',
    design: 'classic', // You can specify different designs
    data: {
      title: "Elena & David",
      date: "August 15, 2025",
      location: "Manila, Philippines",
      musicPath: "/music/classical-wedding.mp3",
      coupleImage: "/img/wedding-couple.jpg"
    }
  },
  
  // Anniversary invitations
  'michael_and_jennifer': {
    type: 'anniversary',
    design: 'elegant',
    data: {
      title: "Michael & Jennifer's 25th Anniversary",
      date: "June 12, 2025",
      location: "The Peninsula Manila, Makati City",
      musicPath: "/music/anniversary-waltz.mp3",
      coupleImage: "/img/anniversary-couple.jpg"
    }
  },
  
  // Baby shower invitations
  'emma_and_james': {
    type: 'babyShower',
    design: 'playful',
    data: {
      title: "Baby Thompson is on the way!",
      date: "May 20, 2025",
      location: "Shangri-La at the Fort, Manila",
      musicPath: "/music/gentle-lullaby.mp3",
      coupleImage: "/img/baby-parents.jpg"
    }
  }
};

// Define invitation types and their corresponding components
// This can be imported in the InvitationRouter
const invitationTypes = {
  'wedding': 'WeddingInvitation',
  'anniversary': 'AnniversaryInvitation',
  'babyShower': 'BabyShowerInvitation',
  // Add more types as needed
};

// Define design variations for each invitation type
const designVariations = {
  'wedding': ['classic', 'modern', 'rustic', 'minimalist'],
  'anniversary': ['elegant', 'romantic', 'nostalgic', 'contemporary'],
  'babyShower': ['playful', 'cute', 'simple', 'gender-neutral'],
  // Add more design variations as needed
};

export { invitationMap, invitationTypes, designVariations };