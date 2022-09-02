import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface ContextProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<ContextProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
