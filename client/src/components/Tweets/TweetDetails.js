import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import BigTweet from "./BigTweet";

const TweetDetails = () => {
  const { tweetId } = useParams();
  console.log(tweetId);
  const [singleTweetId, setSingleTweetId] = useState("");
  const { homeFeed, setStatus, status } = useContext(CurrentUserContext);

  const getSingleTweet = async () => {
    try {
      const fetched = await fetch(`/api/tweet/${tweetId}`)
        .then((data) => data.json())
        .then((data) => data.tweet)
      setSingleTweetId(fetched);
    }
    catch(err) {
      console.log("Error 404")
    }
  }
 
  useEffect(() => {
    if(tweetId) {
      getSingleTweet();
    }

  }, [tweetId])

  console.log(singleTweetId);
  if (status === "loading") {
    return <div>Loading</div>;
  }

  return (
    <div>
      <BigTweet singleTweetId={singleTweetId} />
     
    </div>
  );
};

export default TweetDetails;
