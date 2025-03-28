# Himig Solutions Database Schema

This directory contains CSV files representing the database schema for the Himig Solutions invitation system.

## Tables Overview

1. **Invitations** - Main invitation metadata
2. **Sections** - Section structure and ordering
3. **Section Content** - Content for each section with JSON and optional HTML/CSS
4. **Section Templates** - Reusable section templates
5. **RSVP Responses** - Guest responses
6. **Event-specific Settings** - Custom event settings
7. **Media Assets** - Uploaded files management
8. **Users** - Admin and user accounts
9. **Analytics** - Invitation performance metrics
10. **Access Logs** - Detailed visitor tracking
11. **Design Settings** - Global invitation design settings
12. **Section Display Settings** - Section-specific display properties
13. **Invitation Versions** - Version history for invitations
14. **Guest Types** - Types of guests (Best Man, Maid of Honor, etc.)
15. **Invitation User Types** - Links guests to invitations with specific roles and privileges

## Implementation Benefits

This database structure provides several key advantages:

1. **Flexible Section Management**:
   - Add, remove, and reorder sections freely
   - Toggle visibility of sections

2. **Content Customization Options**:
   - Use structured content with predefined fields (easiest)
   - Use custom HTML/CSS/JS (most flexible)
   - Mix structured content with HTML enhancements

3. **HTML Code Editor Integration**:
   - Each section can have its own HTML editor
   - Support for CSS styling and optional JavaScript
   - Preview changes in real-time

4. **Template System**:
   - Create reusable section templates
   - Quickly assemble invitations from existing templates
   - Share templates across multiple invitations

5. **Comprehensive Design Controls**:
   - Global design settings for consistent styling
   - Section-specific design overrides
   - Responsive design controls for different devices

6. **Version Control**:
   - Track changes with version history
   - Preview and revert to earlier versions
   - A/B test different designs

7. **Guest Role Management**:
   - Assign specific roles to guests (Best Man, Maid of Honor, etc.)
   - Customize content and privileges based on guest role
   - Provide special access codes for different guest types

## Database Relationships

- **Invitations** (1) → **Sections** (many)
- **Sections** (1) → **Section Content** (1)
- **Sections** (1) → **Section Display Settings** (1)
- **Section Template** reference → **Section Content**
- **Invitations** (1) → **RSVP Responses** (many)
- **Invitations** (1) → **Event-specific Settings** (1)
- **Invitations** (1) → **Design Settings** (1)
- **Invitations** (1) → **Analytics** (1)
- **Invitations** (1) → **Access Logs** (many)
- **Invitations** (1) → **Invitation Versions** (many)
- **Users** (1) → **Invitations** (many)
- **Users** (1) → **Media Assets** (many)
- **Guest Types** (1) → **Invitation User Types** (many)
- **Invitations** (1) → **Invitation User Types** (many)

## Implementation Notes

### Frontend Integration
- The frontend will need to implement a section renderer that can handle both structured content and custom HTML/CSS/JS
- An admin interface should include a WYSIWYG editor and code editor for advanced customization
- A preview system will allow users to see changes in real-time
- Role-based content display for different guest types

### Backend Integration
- The Xano backend will need to expose endpoints for all CRUD operations on these tables
- File upload functionality will be needed for media assets
- Authentication and authorization to protect administrative functions
- Guest-specific access controls and content filtering

### Migration from Current System
1. Create the database tables in Xano
2. Migrate existing static data to the new database structure
3. Update frontend components to fetch data from the API instead of using hardcoded values
4. Implement the admin interface for managing invitations with the new customizable sections