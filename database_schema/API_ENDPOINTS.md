# Core API Endpoints for Himig Solutions

## Authentication
```
POST /auth/login
GET /auth/me
```

## Invitations
```
GET /invitations                                 # Get list of all invitations
POST /invitations/get_single/                    # Get a single invitation by ID or slug
  Input: {
    "invitations_id": "",                        # Optional: ID of the invitation
    "slug": "elena_and_david"                    # Optional: Slug of the invitation
  }
  Returns: {
    "id": 1,
    "title": "Elena & David",
    "slug": "elena_and_david",
    "type": "wedding",
    "design": "classic",
    "date": "August 15, 2025",
    "location": "Manila, Philippines",
    "musicPath": "/music/classical-wedding.mp3",
    "coupleImage": "/img/wedding-couple.jpg",
    "status": "published",
    "user_id": 1,
    "created_at": 1742896800000,
    "updated_at": 1742896800000
  }

POST /invitations                                # Create a new invitation
PUT /invitations/:id                             # Update an existing invitation
DELETE /invitations/:id                          # Delete an invitation
```

## Sections
```
GET /invitations/:invitation_id/sections         # Get all sections for an invitation
POST /invitations/:invitation_id/sections        # Add a new section to an invitation
PUT /sections/:id                                # Update a section
DELETE /sections/:id                             # Delete a section
PUT /sections/:id/order                          # Change section order
```

## Section Content
```
GET /sections/:section_id/content                # Get content for a section
POST /sections/:section_id/content               # Create content for a section
PUT /section-content/:id                         # Update section content
```

## Templates
```
GET /section-templates                           # Get available section templates
POST /section-templates/:id/apply/:section_id    # Apply a template to a section
```

## RSVP
```
GET /invitations/:invitation_id/rsvps            # Get all RSVPs for an invitation
POST /invitations/:slug/rsvp                     # Submit an RSVP
```

## Media
```
GET /media                                       # Get list of media assets
POST /media/upload                               # Upload a new media asset
DELETE /media/:id                                # Delete a media asset
```

## Design Settings
```
GET /invitations/:invitation_id/design-settings  # Get design settings for an invitation
PUT /design-settings/:id                         # Update design settings
```

## Guest Roles
```
GET /invitations/:invitation_id/guest-roles      # Get guest roles for an invitation
POST /invitations/:invitation_id/guest-roles     # Add a guest role to an invitation
```

## Public Access
```
GET /public/invitations/:slug                    # Access public invitation by slug
POST /public/invitations/:slug/rsvp              # Submit public RSVP
GET /public/invitations/access/:access_code      # Access invitation by special code
```

## Implementation Notes

1. The `/invitations/get_single/` endpoint demonstrates a good pattern that can be applied to other resource types as well - using a POST request with a body that allows flexible lookup by either ID or slug.

2. All other endpoints should follow RESTful conventions where possible, using proper HTTP verbs (GET, POST, PUT, DELETE).

3. Return appropriate HTTP status codes for all responses:
   - 200 OK for successful GET/PUT
   - 201 Created for successful POST
   - 204 No Content for successful DELETE
   - 400 Bad Request for invalid input
   - 401 Unauthorized for authentication issues
   - 404 Not Found for resources that don't exist
   - 500 Internal Server Error for server issues

4. All endpoints should include proper validation for input parameters.

5. Consider implementing pagination for list endpoints (GET /invitations, GET /media, etc.).

6. For security, ensure all non-public endpoints require authentication.