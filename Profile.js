import React from 'react';
import ModalPortal from './ModalPortal';

const Profile = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <h2>👤 Profile</h2>
      <p>Name: John Doe</p>
      <p>Role: Student</p>
      <button onClick={() => setShowModal(true)}>View Details (Portal)</button>

      {showModal && (
        <ModalPortal onClose={() => setShowModal(false)}>
          <h3>Profile Details</h3>
          <p>Email: john@example.com</p>
          <p>Department: Computer Science</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalPortal>
      )}
    </div>
  );
};

export default Profile;
