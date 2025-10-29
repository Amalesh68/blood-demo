import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { HeartIcon } from '../components/icons/HeartIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import { ShieldCheckIcon } from '../components/icons/ShieldCheckIcon';
import { BellIcon } from '../components/icons/BellIcon';
import { StarIcon } from '../components/icons/StarIcon';
import { UsersIcon } from '../components/icons/UsersIcon';
import { UserPlusIcon } from '../components/icons/UserPlusIcon';

const AnimatedCounter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < target) {
          return prevCount + 1;
        }
        clearInterval(timer);
        return prevCount;
      });
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  return <span className="font-bold">{count.toLocaleString()}+</span>;
};

const Home: React.FC = () => {
  const features = [
    { icon: <SearchIcon />, title: "Smart Search", description: "Quickly find donors by blood group and location with our intelligent filtering system." },
    { icon: <ShieldCheckIcon />, title: "Verified Donors", description: "Our verification process ensures that all donor profiles are reliable and trustworthy." },
    { icon: <BellIcon />, title: "Instant Notifications", description: "Receive automatic reminders and donation requests to stay connected and ready to help." },
    { icon: <StarIcon />, title: "Rewards & Recognition", description: "Earn points, climb the leaderboard, and receive digital certificates for your contributions." },
  ];

  const steps = [
    { icon: <UserPlusIcon />, title: "Register", description: "Create your profile as a donor, recipient, or hospital in just a few minutes." },
    { icon: <SearchIcon />, title: "Find or Request", description: "Recipients and hospitals can post requests or search for available donors nearby." },
    { icon: <UsersIcon />, title: "Connect", description: "Our system instantly matches and notifies eligible donors about the urgent need." },
    { icon: <HeartIcon className="text-brand-red" />, title: "Save a Life", description: "Donate blood, update your status, and become a celebrated hero in the community." },
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="animate-pulse-slow mx-auto w-24 h-24 flex items-center justify-center bg-brand-red/10 rounded-full mb-6">
              <HeartIcon className="w-16 h-16 text-brand-red" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-4">One Drop, Endless Hope.</h1>
          <p className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto mb-8">
            Connecting blood donors with recipients to bridge the gap between scarcity and availability. Your donation can save a life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/donors">
                <Button variant="contained" size="large" sx={{ backgroundColor: '#EF4444', '&:hover': { backgroundColor: '#DC2626' }, width: { xs: '100%', sm: 'auto' } }} className="text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105">
                Find a Donor
                </Button>
            </Link>
             <Link to="/request">
                <Button variant="outlined" size="large" sx={{ borderColor: '#D1D5DB', color: '#1F2937', '&:hover': { backgroundColor: '#F3F4F6', borderColor: '#9CA3AF' }, width: { xs: '100%', sm: 'auto' } }} className="bg-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105">
                Request Blood
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl text-brand-red"><AnimatedCounter target={1250} /></p>
              <p className="text-lg text-gray-300 mt-2">Lives Saved</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-brand-red"><AnimatedCounter target={5000} /></p>
              <p className="text-lg text-gray-300 mt-2">Registered Donors</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-brand-red"><AnimatedCounter target={80} /></p>
              <p className="text-lg text-gray-300 mt-2">Hospitals Connected</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Steps to Save a Life</h2>
          <p className="text-brand-secondary max-w-2xl mx-auto mb-12">Our process is designed to be fast, simple, and efficient in times of need.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg transition-transform transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-brand-red rounded-full mb-4 text-3xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-brand-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BloodConnect?</h2>
          <p className="text-brand-secondary max-w-2xl mx-auto mb-12">We provide a reliable platform with smart features to make blood donation seamless.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-brand-red rounded-full mx-auto mb-5 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-brand-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community of Lifesavers</h2>
          <p className="max-w-2xl mx-auto mb-8 text-red-100">Become a verified donor today and be a beacon of hope. Your contribution is invaluable.</p>
           <Link to="/register">
                <Button variant="contained" size="large" sx={{ backgroundColor: 'white', color: '#EF4444', '&:hover': { backgroundColor: '#FEE2E2' } }} className="font-bold px-10 py-3 rounded-full shadow-lg transform hover:scale-105">
                Become a Donor
                </Button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;