import React from 'react';

function Confirmation({ formData }) {
  return (
    <div className="form-step">
      <h2>Please Confirm Your Information</h2>
      
      <div className="confirmation-section">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
      </div>

      <div className="confirmation-section">
        <h3>Address</h3>
        <p><strong>Street:</strong> {formData.street}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>ZIP Code:</strong> {formData.zipCode}</p>
      </div>

      {(formData.comments || formData.preferences) && (
        <div className="confirmation-section">
          <h3>Additional Information</h3>
          {formData.comments && <p><strong>Comments:</strong> {formData.comments}</p>}
          {formData.preferences && <p><strong>Preferences:</strong> {formData.preferences}</p>}
        </div>
      )}
    </div>
  );
}

export default Confirmation;