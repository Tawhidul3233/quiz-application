import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

// custom hook
const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState();


  return (
    <AuthContext.Provider value={value}>
      { !loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;