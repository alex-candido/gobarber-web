import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ProtectedRoute, { ProtectedRouteProps } from './Route';

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'component'> = {
  isPrivate: false,
  authenticationPath: '/dashboard',
};

const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            component={<SignIn />}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            component={<SignUp />}
          />
        }
      />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
