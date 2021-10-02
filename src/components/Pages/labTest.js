import { AuthContext } from "../User/Auth";
import React, { useContext }  from 'react'
import { Redirect } from "react-router-dom";

  const LabTest = () => {
    const { currentUser } = useContext(AuthContext);
    if(!currentUser){
        return <Redirect to = "/login"/>;
    }
    return(
      <div className="font-roboto font-black text-9xl text-center">
        <p>Lab Test Page </p>
        <p>
          Under Development
        </p>
        
        </div>
   );
   
  }
  
  export default LabTest
  