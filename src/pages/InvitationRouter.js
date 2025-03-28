import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Import service
import authApi from '../services/authService';

// Import all invitation templates dynamically
import * as InvitationTemplates from './invitations';

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const InvitationRouter = () => {
  const { invitationId } = useParams();
  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        // Notice we're using authApi without the auth header for public access
        const response = await authApi.get(`/invitations/${invitationId}`);
        setInvitation(response.data);
        
        // Track view (optional)
        try {
          await authApi.post(`/invitations/${invitationId}/view`);
        } catch (viewError) {
          console.warn('Failed to track view:', viewError);
        }
      } catch (err) {
        console.error('Error fetching invitation:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvitation();
  }, [invitationId]);

  // Show loading spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  // If no matching invitation found or error, redirect to 404
  if (error || !invitation) {
    return <Navigate to="/404" />;
  }

  // Get the component type and design variation
  const { type, design, data } = invitation;

  // Find the correct component based on type
  const templateName = `${type.charAt(0).toUpperCase() + type.slice(1)}Invitation`;
  const TemplateComponent = InvitationTemplates[templateName];

  // If the component doesn't exist, redirect to 404
  if (!TemplateComponent) {
    console.error(`No template component found for type: ${type}`);
    return <Navigate to="/404" />;
  }

  // Pass both the invitation data and design to the component
  return <TemplateComponent invitationData={data} design={design} />;
};

export default InvitationRouter;
