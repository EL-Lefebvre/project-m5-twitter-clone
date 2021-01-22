import React, { useEffect, useState, useContext } from "react";

import { CurrentUserContext } from "./CurrentUserContext";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [homeFeed, setHomeFeed] = useState();
  const [currentHandle, setCurrentHandle] = useState("");
  const [status, setStatus] = React.useState("loading");


  // ProfileInfo of Current user (treasurymog)
  const profileInfo = async () => {
    try {
      const response = await fetch(`/api/me/profile`)
        .then((data) => data.json())
        .then((data) => data.profile);
      setCurrentUser(response);
      setCurrentHandle(response.handle)
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!currentUser) {
      profileInfo();
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      setStatus("idle");
    }
  }, [currentUser]);

  //Get profile info based on handle
  const handleInfo = async () => {
    try {
      const response = await fetch(`/api/:${currentHandle}/profile`)
        .then((data) => data.json())
        .then((data) => data.profile);
      setCurrentUser(response);
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!currentUser) {
      handleInfo();
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      setStatus("idle");
    }
  }, [currentUser]);

  // Fetching Data of All Tweets for Current User (HOMEFEED)
  const getHomeFeed = async () => {
    try {
      const response = await fetch("/api/me/home-feed").then((data) =>
        data.json()
      );
      setHomeFeed(response.tweetsById);
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!homeFeed) {
      getHomeFeed();
    }
  }, []);

  useEffect(() => {
    if (homeFeed) {
      setStatus("idle");
    }
  }, [homeFeed]);
  //Error message
  if (status === "error") {
    return <div>error</div>;
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, currentHandle, status, homeFeed }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
