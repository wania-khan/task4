import React from 'react';

const ViewModal = ({ user, onClose }) => {
  return (
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>User Details</h2>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
      </div>
  );
};

export default ViewModal;