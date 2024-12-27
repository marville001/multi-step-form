import React from 'react';

function AddressForm({ formData, setFormData, errors, setErrors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="form-step">
      <h2>Address Information</h2>
      <div className="form-group">
        <label htmlFor="street">Street Address *</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className={errors.street ? 'error' : ''}
        />
        {errors.street && <span className="error-message">{errors.street}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="city">City *</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? 'error' : ''}
        />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="state">State *</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={errors.state ? 'error' : ''}
        />
        {errors.state && <span className="error-message">{errors.state}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="zipCode">ZIP Code *</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className={errors.zipCode ? 'error' : ''}
        />
        {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
      </div>
    </div>
  );
}

export default AddressForm;