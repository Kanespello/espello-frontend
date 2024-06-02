import React, { createContext, useContext, useState } from 'react';
import CryptoJS from 'crypto-js';
import { SESSION_SECRET_KEY, USER_SESSION_KEY } from '../../util/AppConstants';
import { JwtPayload } from 'jwt-decode';

// Define the type for the authentication context
interface AuthContextType {
  userDetails: LoginParams | null;
  login: (loginParams: LoginParams) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to consume the authentication context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Props interface for AuthProvider component
interface AuthProviderProps {
  children: React.ReactNode;
}

// Define interface for login parameters
interface LoginParams {
  user: JwtPayload;
  user_id: string;
}

// Function to encrypt user data
const encryptUserData = (data: LoginParams): string => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SESSION_SECRET_KEY).toString();
  return encryptedData;
};

// Function to decrypt user data
const decryptUserData = (encryptedData: string): LoginParams | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SESSION_SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.error('Error decrypting user information:', error);
    return null;
  }
};

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // State to manage user data
  const [user, setUser] = useState<LoginParams | null>(() => {
    const userEncrypted = localStorage.getItem(USER_SESSION_KEY);
    if (userEncrypted) {
      const decryptedUser = decryptUserData(userEncrypted);
      if (decryptedUser) {
        return decryptedUser;
      }
      // Clear user data if decryption fails
      localStorage.removeItem(USER_SESSION_KEY);
    }
    return null;
  });

  // Function to login user
  const login = (userData: LoginParams) => {
    setUser(userData);
    const encryptedUserData = encryptUserData(userData);
    localStorage.setItem(USER_SESSION_KEY, encryptedUserData);
  };

  // Function to logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_SESSION_KEY);
  };

  // Function to check if user is logged in
  const isLoggedIn = () => {
    return !!user;
  };

  // Value for the authentication context
  const authContextValue: AuthContextType = {
    userDetails : user,
    login,
    logout,
    isLoggedIn,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};