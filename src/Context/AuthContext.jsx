import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { app } from '../Firebase/Firebase';


const AuthContext = React.createContext();
const auth = getAuth(app);

// custom hook
export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe;
  }, [])

  const signup = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
      displayName: username
    })
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth)
  }

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    loading,
    setLoading,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;