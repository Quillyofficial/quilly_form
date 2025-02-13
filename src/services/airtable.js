export const saveToAirtable = async (formData) => {
  try {
    const response = await fetch('/api/saveToAirtable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to save to Airtable');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error saving to Airtable:', error);
    throw error;
  }
};
