import React from 'react';

function AdditionalInfo({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-step">
      <h2>Additional Information</h2>
      <div className="form-group">
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="preferences">Preferences</label>
        <input
          type="text"
          id="preferences"
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default AdditionalInfo;