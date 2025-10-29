import React from 'react';
import { Card, CardContent, Typography, Button, Chip } from '@mui/material';

interface Donor {
  name: string;
  bloodType: string;
  location: string;
  available: boolean;
}

const DonorCard: React.FC<{ donor: Donor }> = ({ donor }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="text-center p-6">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-red-100 flex items-center justify-center border-4 border-white shadow-md">
            <span className="text-4xl font-bold text-brand-red">{donor.bloodType}</span>
        </div>
        <Typography variant="h5" component="div" className="font-bold">
          {donor.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {donor.location}
        </Typography>
        <Chip 
          label={donor.available ? 'Available' : 'Unavailable'} 
          color={donor.available ? 'success' : 'default'}
          variant="outlined"
          className="my-4"
        />
        <Button 
          variant="contained" 
          fullWidth
          disabled={!donor.available}
          sx={{ 
            backgroundColor: '#EF4444', 
            '&:hover': { backgroundColor: '#DC2626' },
            '&.Mui-disabled': {
                backgroundColor: 'grey.300'
            },
            borderRadius: '9999px',
            paddingY: '0.75rem',
            boxShadow: 'none'
          }}
          className="text-white font-semibold"
        >
          Contact
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonorCard;