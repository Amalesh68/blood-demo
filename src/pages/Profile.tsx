import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
    const { user } = useAuth();
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">User Profile</h1>
      <p className="text-lg text-gray-600">This is the profile page for {user?.name}.</p>
    </div>
  );
};

export default Profile;