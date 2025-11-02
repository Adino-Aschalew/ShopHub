import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (email, password) => {
    // Simulate login - in real app, this would call an API
    const mockUser = {
      id: 1,
      email,
      name: email.split('@')[0],
      avatar: 'https://i.pravatar.cc/150?img=1'
    };
    setUser(mockUser);
    return { success: true, user: mockUser };
  };

  const signup = (email, password, name) => {
    // Simulate signup - in real app, this would call an API
    const mockUser = {
      id: Date.now(),
      email,
      name,
      avatar: 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 70)
    };
    setUser(mockUser);
    return { success: true, user: mockUser };
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const value = {
    user,
    login,
    signup,
    logout,
    updateUser,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

