
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, getCurrentUser, loginStudent, loginStaff, registerUser, logoutUser, UserRole } from '../utils/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginStudent: (email: string, password: string) => Promise<void>;
  loginStaff: (name: string, secretCode: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for existing user in localStorage or Firebase
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleLoginStudent = async (email: string, password: string) => {
    setLoading(true);
    try {
      const user = await loginStudent(email, password);
      setUser(user);
      // In a real app, Firebase would handle persistence
      localStorage.setItem('currentUser', JSON.stringify(user));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLoginStaff = async (name: string, secretCode: string) => {
    setLoading(true);
    try {
      const user = await loginStaff(name, secretCode);
      setUser(user);
      // In a real app, Firebase would handle persistence
      localStorage.setItem('currentUser', JSON.stringify(user));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (name: string, email: string, password: string, role: UserRole) => {
    setLoading(true);
    try {
      const user = await registerUser(name, email, password, role);
      setUser(user);
      // In a real app, Firebase would handle this
      localStorage.setItem('currentUser', JSON.stringify(user));
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      setUser(null);
      localStorage.removeItem('currentUser');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    loginStudent: handleLoginStudent,
    loginStaff: handleLoginStaff,
    register: handleRegister,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
