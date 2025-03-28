# Invitation Templates

This directory contains static invitation templates for different event types. These templates use the modular components from `src/components/invitation/` to create complete, customized invitation pages.

## Current Templates

- `WeddingInvitation.js` - Template for wedding invitations
- `AnniversaryInvitation.js` - Template for anniversary celebrations 
- `BabyShowerInvitation.js` - Template for baby shower invitations

## How to Add a New Template

1. Create a new file in this directory named after your template (e.g., `GraduationInvitation.js`)
2. Copy the structure from an existing template and customize the content
3. Add custom music files to the `/public/music` directory
4. Add custom image files to the `/public/img` directory
5. Export your template in `index.js`
6. Add a route in `App.js` for your new template
7. Update portfolio items in `portfolioData.js` to link to your new template

## Template Structure

Each template is structured with sections for:

- Header with background music
- Story section
- Event details and location
- Schedule timeline
- Photo gallery
- RSVP form
- Footer

## Custom Music

The templates support custom music playback using the AudioPlayer component. Make sure to:

1. Add your music files to the `/public/music` directory
2. Reference them in your template using a relative path (e.g., `/music/your-music-file.mp3`)
3. Update the `musicPaths` object in `portfolioData.js` if needed

## Custom Images

Add your custom images to the `/public/img` directory and reference them in your template using relative paths.
