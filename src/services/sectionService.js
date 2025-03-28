import authApi from './authService';

// Section service functions
export const getSections = async (invitationId) => {
  try {
    const response = await authApi.get(`/invitations/${invitationId}/sections`);
    return response.data;
  } catch (error) {
    console.error('Get sections error:', error.response?.data || error.message);
    throw error;
  }
};

export const getSection = async (sectionId) => {
  try {
    const response = await authApi.get(`/sections/${sectionId}`);
    return response.data;
  } catch (error) {
    console.error('Get section error:', error.response?.data || error.message);
    throw error;
  }
};

export const createSection = async (invitationId, sectionData) => {
  try {
    const response = await authApi.post(`/invitations/${invitationId}/sections`, sectionData);
    return response.data;
  } catch (error) {
    console.error('Create section error:', error.response?.data || error.message);
    throw error;
  }
};

export const updateSection = async (sectionId, sectionData) => {
  try {
    const response = await authApi.put(`/sections/${sectionId}`, sectionData);
    return response.data;
  } catch (error) {
    console.error('Update section error:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteSection = async (sectionId) => {
  try {
    const response = await authApi.delete(`/sections/${sectionId}`);
    return response.data;
  } catch (error) {
    console.error('Delete section error:', error.response?.data || error.message);
    throw error;
  }
};

export const updateSectionOrder = async (sectionId, orderData) => {
  try {
    const response = await authApi.put(`/sections/${sectionId}/order`, orderData);
    return response.data;
  } catch (error) {
    console.error('Update section order error:', error.response?.data || error.message);
    throw error;
  }
};

// Section content functions
export const getSectionContent = async (sectionId) => {
  try {
    const response = await authApi.get(`/sections/${sectionId}/content`);
    return response.data;
  } catch (error) {
    console.error('Get section content error:', error.response?.data || error.message);
    throw error;
  }
};

export const createSectionContent = async (sectionId, contentData) => {
  try {
    const response = await authApi.post(`/sections/${sectionId}/content`, contentData);
    return response.data;
  } catch (error) {
    console.error('Create section content error:', error.response?.data || error.message);
    throw error;
  }
};

export const updateSectionContent = async (contentId, contentData) => {
  try {
    const response = await authApi.put(`/section-content/${contentId}`, contentData);
    return response.data;
  } catch (error) {
    console.error('Update section content error:', error.response?.data || error.message);
    throw error;
  }
};

// Section templates
export const getSectionTemplates = async () => {
  try {
    const response = await authApi.get('/section-templates');
    return response.data;
  } catch (error) {
    console.error('Get section templates error:', error.response?.data || error.message);
    throw error;
  }
};

export const applySectionTemplate = async (templateId, sectionId) => {
  try {
    const response = await authApi.post(`/section-templates/${templateId}/apply/${sectionId}`);
    return response.data;
  } catch (error) {
    console.error('Apply section template error:', error.response?.data || error.message);
    throw error;
  }
};
