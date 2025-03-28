# Himig Solutions - App Reference Guide

## Overview
Himig Solutions is a web application that creates custom digital invitations with AI-generated music for special events like weddings, anniversaries, and baby showers. The name "Himig" means "melody" in Filipino, reflecting the focus on combining musical elements with digital invitations.

## Technical Architecture

### Tech Stack
- **Frontend**: React (v18.2.0)
- **Routing**: React Router (v6.20.0)
- **Styling**: Tailwind CSS (v3.3.5)
- **HTTP Client**: Axios
- **Backend**: Xano (serverless)

### Key Directories
- `/src/pages`: Main application pages
- `/src/components`: Reusable UI components
- `/src/services`: API service layer
- `/src/context`: React context providers
- `/src/data`: Static data (being migrated to Xano)
- `/public`: Static assets (images, music files)

## Features

### Public Features
1. **Digital Invitations**
   - Wedding invitations
   - Anniversary celebrations
   - Baby shower invitations
   - Multiple design variations per event type

2. **Custom Music Integration**
   - Background music for invitations
   - Audio player component

3. **RSVP System**
   - Guest response tracking
   - Meal preferences
   - Additional attendees

### Admin Features
1. **Authentication System**
   - Login/logout functionality
   - Protected routes
   - Authorization with JWT tokens

2. **Invitation Management**
   - Create new invitations
   - Edit existing invitations
   - Delete invitations
   - Preview invitations

3. **Dashboard**
   - Overview of all invitations
   - View statistics (views, RSVPs)

## API Endpoints (Xano)

### Authentication
- `POST /auth/login`: Login with email/password
- `GET /auth/me`: Get current admin user details

### Invitations
- `GET /invitations`: List all invitations
- `GET /invitations/:slug`: Get specific invitation
- `POST /invitations`: Create new invitation
- `PUT /invitations/:id`: Update invitation
- `DELETE /invitations/:id`: Delete invitation

### RSVP
- `GET /invitations/:id/rsvps`: Get RSVP responses
- `POST /invitations/:slug/rsvp`: Submit RSVP response

## Invitation System

### Invitation Types
1. **Wedding**
   - Design styles: classic, modern, rustic, minimalist
   - Features: couple story, event details, RSVP form

2. **Anniversary**
   - Design styles: elegant, romantic, nostalgic, contemporary
   - Features: timeline, photo gallery, memory sharing

3. **Baby Shower**
   - Design styles: playful, cute, simple, gender-neutral
   - Features: gift registry, games, parenting wisdom section

### Data Structure
Each invitation includes:
- `title`: Event title
- `slug`: URL-friendly identifier
- `type`: Invitation type (wedding, anniversary, babyShower)
- `design`: Design style
- `date`: Event date
- `location`: Event venue
- `musicPath`: Path to background music file
- `coupleImage`: Path to featured image
- Additional custom fields as needed

## File Structure

### Key Files
- `App.js`: Main application component with routes
- `InvitationRouter.js`: Dynamic routing for invitations
- `authService.js`: Authentication service
- `invitationService.js`: Invitation management service
- `AuthContext.js`: Authentication state management

### Configuration
- `.env`: Environment variables including Xano API URL

## Current Implementation Status

1. **Public Site**: Fully implemented with static data
2. **Admin Authentication**: Implemented with Xano integration
3. **Invitation Management**: Basic CRUD operations implemented
4. **API Integration**: Connected to Xano backend
5. **RSVP System**: Basic structure implemented, needs enhancements

## Next Steps

1. **Data Migration**: Move static invitation data to Xano database
2. **File Upload**: Implement music and image upload functionality
3. **Advanced RSVP**: Add guest management features
4. **Analytics Dashboard**: Implement view tracking and statistics
5. **Payment Integration**: Add payment processing for premium features

## Access Information

- **Public Site**: http://localhost:3000 (dev) or the domain (prod)
- **Admin Login**: http://localhost:3000/admin/login (dev)
- **API AUTH Base URL**: https://x8ki-letl-twmt.n7.xano.io/api:jyotHfBB