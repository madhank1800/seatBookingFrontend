import React, { useContext } from 'react'
import { MyContext } from './Context/MyContext';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children}) => {
    console.log("component", children);
   
    const { globalState } = useContext(MyContext);
    
      return globalState.token?children:<Navigate to="/" />
      
  
}

export default ProtectedRoute