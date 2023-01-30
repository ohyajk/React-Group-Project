import React from 'react';

const Profile = () => {
  return (
    <div>
      <h2 className="profile-heading">My Profile</h2>
      <div className="rockets">
        <h4>My Rockets</h4>
        <ul>
          <li>Rocket 1</li>
        </ul>
      </div>
      <div className="missions">
        <h4>My Missions</h4>
        <ul>
          <li>Mission 1</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
