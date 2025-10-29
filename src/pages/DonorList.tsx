import React from 'react';
import DonorCard from '../components/DonorCard';

const mockDonors = [
  { name: 'John Doe', bloodType: 'A+', location: 'New York, NY', available: true },
  { name: 'Jane Smith', bloodType: 'O-', location: 'Los Angeles, CA', available: true },
  { name: 'Peter Jones', bloodType: 'B+', location: 'Chicago, IL', available: false },
  { name: 'Mary Johnson', bloodType: 'AB+', location: 'Houston, TX', available: true },
  { name: 'Chris Lee', bloodType: 'A-', location: 'Phoenix, AZ', available: true },
  { name: 'Patricia Brown', bloodType: 'O+', location: 'Philadelphia, PA', available: false },
];

const DonorList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Donors</h1>
        <p className="text-lg text-gray-600">Search for available blood donors in your area.</p>
      </div>
      {/* TODO: Add Search and Filter component here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockDonors.map((donor, index) => (
            <DonorCard key={index} donor={donor} />
        ))}
      </div>
    </div>
  );
};

export default DonorList;