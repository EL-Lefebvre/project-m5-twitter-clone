import React, { useEffect,useState,useContext  } from "react";

import { CurrentUserContext } from "./CurrentUserContext";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  const profileInfo = async () => {
      try{
          const response = await fetch(`/api/me/profile`)
            .then((data) => data.json())
            .then((data) => data.profile)
           setCurrentUser(response);

      }catch(err){
          setStatus('error')
      }
  }

  useEffect(()=>{
      if(!currentUser){
          profileInfo()
      }
  }, [])

  useEffect(() => {
      if(currentUser){
          setStatus("idle")
      }
  }, [currentUser])

  //use another use effect to set status to idle
  return (
    <CurrentUserContext.Provider
      value={{ currentUser, status }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
