import authApi from './authService';

// Invitation service functions
export const getInvitations = async (params = {}) => {
  const response = await authApi.get('/invitations', { params });
  return response.data;
};

export const getInvitation = async (slug) => {
  const response = await authApi.get(`/invitations/${slug}`);
  return response.data;
};

export const createInvitation = async (invitationData) => {
  const response = await authApi.post('/invitations', invitationData);
  return response.data;
};

export const updateInvitation = async (id, invitationData) => {
  const response = await authApi.put(`/invitations/${id}`, invitationData);
  return response.data;
};

export const deleteInvitation = async (id) => {
  const response = await authApi.delete(`/invitations/${id}`);
  return response.data;
};

// RSVP handling
export const getRSVPs = async (invitationId) => {
  const response = await authApi.get(`/invitations/${invitationId}/rsvps`);
  return response.data;
};

export const submitRSVP = async (slug, rsvpData) => {
  // This endpoint doesn't require authentication
  const response = await authApi.post(`/invitations/${slug}/rsvp`, rsvpData);
  return response.data;
};

// Stats and analytics
export const getInvitationStats = async (invitationId) => {
  const response = await authApi.get(`/invitations/${invitationId}/stats`);
  return response.data;
};
