import React from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    login({ name: 'Jane Donor' });
    navigate(from, { replace: true });
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center">
      <Card className="shadow-lg max-w-md w-full">
        <CardContent className="p-8">
          <Typography variant="h4" component="h1" className="text-center font-bold mb-8">
            Login
          </Typography>
          <form onSubmit={handleLogin} className="space-y-6">
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
              Sign In
            </Button>
          </form>
          <Typography className="text-center mt-6">
            Don't have an account? <Link to="/register" className="text-brand-red hover:underline">Sign up</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;