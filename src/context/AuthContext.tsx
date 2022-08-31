import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface ContextProps {
  children: React.ReactNode;
}

interface signInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  // name: string;
  signIn(credentials: signInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: signInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log(response.data);
  }, []);

  // const properties = useMemo(
  //   () => ({
  //     name: 'alex',
  //   }),
  //   [],
  // );
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
