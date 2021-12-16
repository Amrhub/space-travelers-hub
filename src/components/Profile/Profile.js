import React from 'react';
import ReservedRockets from './ReservedRockets/ReservedRockets';
import ReservedMissions from './ReservedMissions/ReservedMissions';
import './Profile.scss';

const Profile = () => (
  <main className="main profile">
    <ReservedMissions />
    <ReservedRockets />
  </main>
);

export default Profile;
