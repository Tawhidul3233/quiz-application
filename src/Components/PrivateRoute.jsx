// import React from 'react';

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {

  const { currentUser } = useAuth();
  const location = useLocation()
  return currentUser ? children : <Navigate to='/Login' state={{ from: location }} replace> </Navigate>

};

export default PrivateRoute;