import React, { createContext, useContext, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { SESSION_SECRET_KEY, USER_SESSION_KEY } from '../../util/AppConstants';
import { JwtPayload } from 'jwt-decode';

interface AuthContextType {
  user: JwtPayload | null;
  login: (user: JwtPayload) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const encryptUserData = (data: JwtPayload): string => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SESSION_SECRET_KEY).toString();
  return encryptedData;
};

const decryptUserData = (encryptedData: string): JwtPayload | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SESSION_SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) as JwtPayload;
    return decryptedData;
  } catch (error) {
    console.error('Error decrypting user information:', error);
    return null;
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<JwtPayload | null>(() => {
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

  const login = (userData: JwtPayload) => {
    setUser(userData);
    const encryptedUserData = encryptUserData(userData);
    localStorage.setItem(USER_SESSION_KEY, encryptedUserData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_SESSION_KEY);
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const authContextValue: AuthContextType = {
    user,
    login,
    logout,
    isLoggedIn,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};