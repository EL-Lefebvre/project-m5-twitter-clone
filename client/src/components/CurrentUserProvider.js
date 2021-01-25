import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [homeFeed, setHomeFeed] = useState();
  const [profileUrl, setProfileUrl] = useState(false);
  const [singleTweetId, setSingleTweetId] = useState("");
const [currentUserHandle, setCurrentUserHandle] = useState("");
  const [status, setStatus] = useState("loading");
  //  const { tweetId } = useParams();

  // ProfileInfo of Current user (treasurymog)
  const profileInfo = async () => {
    try {
      const response = await fetch(`/api/me/profile`)
        .then((data) => data.json())
        .then((data) => data.profile);
      setCurrentUser(response);
      setCurrentUserHandle(response.handle)
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

  //Error message
  if (status === "error") {
    return <div>error</div>;
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        singleTweetId,
        setSingleTweetId,
        setProfileUrl,
        profileUrl,
        status,
        setStatus,
        homeFeed,currentUserHandle, setCurrentUserHandle
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
