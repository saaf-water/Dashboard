import React, { useEffect, useState } from "react";
import firebaseConfig from "../../config";
import ReactLoading from "react-loading";

/* The code in Auth.js is for authentication integration to SaafWater webapp*/
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {   
    setTimeout(() => {
      setCurrentUser(user);
      setLoading(false);
    }, 1500);
    });
  }, []);
  if (loading) {
    return(
      <div className="flex justify-center pt-60">
      <ReactLoading
          type={"spin"}
          color={"#4F46E5"}
          height={100}
          width={100} />
    </div>
    );
     
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};