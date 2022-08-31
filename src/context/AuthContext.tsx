import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

// interface ContextProps {
//   children: React.ReactNode;
// }

// export const AuthProvider: React.FC<ContextProps> = ({ children }) => {
//   const foo = useMemo(() => ({ name: 'Alex' }), []);

//   return <AuthContext.Provider value={foo}>{children}</AuthContext.Provider>;
// };
