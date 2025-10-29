import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: any; // In a real app, replace 'any' with a proper user type
  login: (user: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = (userData: any) => {
    setUser(userData);
    // In a real app, you'd also store a token in localStorage
  };

  const logout = () => {
    setUser(null);
    // And remove the token from localStorage
  };
  
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
