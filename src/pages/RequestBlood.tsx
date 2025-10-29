import React from 'react';
import RequestForm from '../components/RequestForm';

const RequestBlood: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Request Blood</h1>
            <p className="text-lg text-gray-600">Fill out the form below for urgent blood requests.</p>
        </div>
        <RequestForm />
      </div>
    </div>
  );
};

export default RequestBlood;