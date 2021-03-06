import React, { useEffect, useState } from "react";


import { CurrentUserContext } from "./CurrentUserContext";
const URL = 'https://cat-twitterclone.herokuapp.com'
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [homeFeed, setHomeFeed] = useState();

  const [mainUserHandle, setMainUserHandle] = useState();
  const [profileUrl, setProfileUrl] = useState(false);
  const [numRetweet, setNumRetweet] = useState();
  const [currentProfileFeed, setCurrentProfileFeed] = useState();
  const [currentUserData, setCurrentUserData] = useState();

  const [currentTweet, setCurrentTweet] = useState("");
  const [currentUserHandle, setCurrentUserHandle] = useState("");
  const [status, setStatus] = useState("loading");

  // ProfileInfo of Current user (treasurymog)
  const profileInfo = async () => {
    try {
      const response = await fetch(`${URL}/api/me/profile`)
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
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      setStatus("loading");
    } else {
      setStatus("idle");
    }
  }, [currentUser]);

  //Get profile info based on handle

  // Fetching Data of All Tweets for Current User (HOMEFEED)
  const getHomeFeed = async () => {
    try {
      const response = await fetch(`${URL}/api/me/home-feed`)
        .then((data) => data.json())
        .then((json) => {
          return Object.values(json.tweetsById);
        });
      setHomeFeed(response);
    } catch (err) {
      setStatus("error");
    }
  };
  useEffect(() => {
    if (!homeFeed) {
      getHomeFeed();
    }
  }, [homeFeed]);

  useEffect(() => {
    if (homeFeed) {
      setStatus("idle");
    } else {
      setStatus("loading");
    }
  }, [homeFeed]);


  useEffect(() => {
    if (!currentUserHandle) {
      setStatus("loading");
    }
      // Fetch profile by handle
    const handleInfo = async () => {
      try {
        const response = await fetch(`${URL}/api/${currentUserHandle}/profile`)
          .then((data) => data.json())
          .then((data) => data.profile);
  
        setCurrentUserData(response);
      } catch (err) {
        setStatus("error");
      }
    };
      //Fetch tweets for each handle on their profile
  const handleProfileFeed = async () => {
    try {
      const response = await fetch(`${URL}/api/${currentUserHandle}/feed`)
        .then((data) => data.json())
        .then((data) => data.tweetsById);
      setCurrentProfileFeed(response);
    } catch (err) {
      setStatus("error");
    }
  };
    handleInfo();
    handleProfileFeed();
    setStatus("idle");
  }, [currentUserHandle]);

  return (
    <CurrentUserContext.Provider
      value={{
        homeFeed,
        setHomeFeed,
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
        currentUserHandle,
        setCurrentUserHandle,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
