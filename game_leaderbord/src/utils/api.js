// API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

// Generic API request function
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}/api${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// GET request
export const apiGet = (endpoint, params = {}) => {
  const searchParams = new URLSearchParams(params);
  const url = searchParams.toString() ? `${endpoint}?${searchParams.toString()}` : endpoint;
  return apiRequest(url);
};

// POST request
export const apiPost = (endpoint, data) => {
  return apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// PUT request
export const apiPut = (endpoint, data) => {
  return apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

// DELETE request
export const apiDelete = (endpoint) => {
  return apiRequest(endpoint, {
    method: 'DELETE',
  });
};

// Error handling utilities
export const handleApiError = (error, defaultMessage = 'An error occurred') => {
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return 'Network error. Please check your connection and try again.';
  }
  
  return error.message || defaultMessage;
};

// Validation utilities
export const validateUserData = (userData) => {
  const errors = [];
  
  if (!userData.ogCode) {
    errors.push('OG Code is required');
  }
  
  if (!userData.name || userData.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (userData.name && userData.name.length > 50) {
    errors.push('Name must be 50 characters or less');
  }
  
  if (userData.points === undefined || userData.points === null || userData.points === '') {
    errors.push('Points are required');
  }
  
  if (userData.points !== undefined && userData.points !== null && userData.points !== '' && isNaN(userData.points)) {
    errors.push('Points must be a valid number');
  }
  
  return errors;
};

// Format user data for API
export const formatUserData = (formData) => {
  return {
    ...formData,
    ogCode: parseInt(formData.ogCode),
    points: parseFloat(formData.points),
    matches: parseInt(formData.matches) || 0,
    won: parseInt(formData.won) || 0,
    attack: {
      greenBomb: parseInt(formData.attack?.greenBomb) || 0,
      blackBomb: parseInt(formData.attack?.blackBomb) || 0,
      redBomb: parseInt(formData.attack?.redBomb) || 0,
    },
    defence: parseInt(formData.defence) || 1,
  };
}; 