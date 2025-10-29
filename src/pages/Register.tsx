import React from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center">
      <Card className="shadow-lg max-w-md w-full">
        <CardContent className="p-8">
          <Typography variant="h4" component="h1" className="text-center font-bold mb-8">
            Create Account
          </Typography>
          <form className="space-y-6">
            <TextField label="Full Name" variant="outlined" fullWidth required />
            <TextField label="Email" type="email" variant="outlined" fullWidth required />
            <TextField label="Password" type="password" variant="outlined" fullWidth required />
            <Button 
              type="submit"
              variant="contained" 
              fullWidth 
              size="large"
              sx={{ backgroundColor: '#EF4444', '&:hover': { backgroundColor: '#DC2626' }, borderRadius: '9999px', paddingY: '0.75rem' }}
              className="text-white font-semibold"
            >
              Sign Up
            </Button>
          </form>
          <Typography className="text-center mt-6">
            Already have an account? <Link to="/login" className="text-brand-red hover:underline">Sign in</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;