import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from './icons/HeartIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <HeartIcon className="w-8 h-8 text-brand-red" />
              <span className="text-2xl font-bold">BloodConnect</span>
            </Link>
            <p className="text-gray-400">Connecting donors to save lives. One drop, endless hope.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/donors" className="text-gray-400 hover:text-white">Find Donors</Link></li>
              <li><Link to="/request" className="text-gray-400 hover:text-white">Request Blood</Link></li>
              <li><a href="/#/how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full rounded-l-md px-4 py-2 text-gray-800" />
              <button type="submit" className="bg-brand-red hover:bg-brand-red-dark px-4 rounded-r-md font-semibold">Go</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} BloodConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;