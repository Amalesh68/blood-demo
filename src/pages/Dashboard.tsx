import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to your Dashboard, {user?.name}!</h1>
        <p className="text-lg text-gray-600 mb-8">This is your personal space to manage your donations and requests.</p>
        <Button onClick={handleLogout} variant="contained" color="error">Logout</Button>
        </div>
    );
};

export default Dashboard;