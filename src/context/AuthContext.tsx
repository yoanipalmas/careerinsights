import { createContext, useContext } from 'react';

// Definición del tipo para el contexto
interface AuthContextType {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

// Contexto solo exporta la creación
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  toggleLogin: () => {},
});

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
