import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-9xl font-extrabold text-brand-red tracking-widest">404</h1>
        <div className="bg-brand-dark text-white px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
        </div>
        <p className="text-lg text-gray-600 mt-4 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
            <Button variant="contained" sx={{ backgroundColor: '#EF4444', '&:hover': { backgroundColor: '#DC2626' } }}>
                Go Home
            </Button>
        </Link>
    </div>
  );
};

export default NotFound;