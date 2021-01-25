import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [homeFeed, setHomeFeed] = useState();
  const [mainUserHandle, setMainUserHandle] = useState();
  const [profileUrl, setProfileUrl] = useState(false);
  const [numRetweet, setNumRetweet] = useState();
  const [currentProfileFeed, setCurrentProfileFeed] =useState();
  const [ currentUserData,setCurrentUserData] =useState()
  const [currentTweet, setCurrentTweet] = useState("");
  const [currentUserHandle, setCurrentUserHandle] = useState("");
  const [status, setStatus] = useState("loading");

  // ProfileInfo of Current user (treasurymog)
  const profileInfo = async () => {
    try {
      const response = await fetch(`/api/me/profile`)
        .then((data) => data.json())
        .then((data) => data.profile);
      setCurrentUser(response);
      setMainUserHandle(response.handle);
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

  //Retweet data for each Tweet
  const handleProfileFeed = async () => {
    try {
      const response = await fetch(`/api/${currentUserHandle}/feed`)
        .then((data) => data.json())
        .then((data) => data.tweetsById);
        setCurrentProfileFeed(response);
   
    } catch (err) {
      setStatus("error");
    }
  };
  useEffect(() => {
    if (currentUserHandle) {
      handleProfileFeed();
    }
   
    setStatus("idle");
  }, [currentUserHandle]);


  // other
  const handleInfo = async () => {
    try {
      const response = await fetch(`/api/${currentUserHandle}/profile`)
        .then((data) => data.json())
        .then((data) => data.profile);

      setCurrentUserData(response);
      console.log(response);
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (currentUserHandle) {
      handleInfo();
    }
   
    setStatus("idle");
  }, [currentUserHandle]);


  //Error message
  if (status === "error") {
    return <div>error</div>;
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setProfileUrl,
        profileUrl,
        status,
        numRetweet,
        setNumRetweet,
        setStatus,
        mainUserHandle,
        currentUserData,
        currentProfileFeed,
        currentTweet,
        setCurrentTweet,
        homeFeed,
        currentUserHandle,
        setCurrentUserHandle,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
