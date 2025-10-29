import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from './icons/HeartIcon';
import { Button } from '@mui/material';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#/', text: 'Home' },
    { href: '/#/donors', text: 'Find Donors' },
    { href: '/#/request', text: 'Request Blood' },
    { href: '/#how-it-works', text: 'How It Works' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <HeartIcon className="w-8 h-8 text-brand-red" />
            <span className="text-2xl font-bold text-brand-dark">BloodConnect</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className="text-gray-600 hover:text-brand-red transition-colors duration-300 font-medium">
                {link.text}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
             <Link to="/login">
                <Button variant="text" sx={{ color: '#4B5563', borderRadius: '9999px', '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' } }}>Login</Button>
            </Link>
            <Link to="/register">
                <Button variant="contained" sx={{ backgroundColor: '#EF4444', '&:hover': { backgroundColor: '#DC2626' }, borderRadius: '9999px', boxShadow: 'none' }} className="text-white font-semibold px-6">
                Register
                </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-brand-red transition-colors duration-300 font-medium">
                {link.text}
              </a>
            ))}
             <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="text" sx={{ color: '#4B5563' }}>Login</Button>
            </Link>
             <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                 <Button variant="contained" sx={{ backgroundColor: '#EF4444', '&:hover': { backgroundColor: '#DC2626' } }} className="text-white font-semibold rounded-full px-6 py-2">
                Register
                </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;