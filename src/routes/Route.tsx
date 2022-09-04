import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

export interface ProtectedRouteProps {
  isPrivate: boolean;
  authenticationPath: string;
  component: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isPrivate = false,
  authenticationPath,
  component,
}: ProtectedRouteProps) => {
  const { user } = useAuth();

  return isPrivate === !!user ? (
    component
  ) : (
    <Navigate to={{ pathname: isPrivate ? '/' : authenticationPath }} />
  );
};

export default ProtectedRoute;
