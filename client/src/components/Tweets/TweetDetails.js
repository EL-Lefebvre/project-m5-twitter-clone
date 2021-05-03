import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import BigTweet from "./BigTweet";
import Redirect from "../Redirect";
const URL = 'https://cat-twitterclone.herokuapp.com'
const TweetDetails = () => {
  const { tweetId } = useParams();
  const [singleTweetId, setSingleTweetId] = useState("");
  const { setStatus, status } = useContext(CurrentUserContext);

  useEffect(() => {
    fetch(`${URL}/api/tweet/${tweetId}`)
      .then((data) => data.json())
      .then((data) => data.tweet)
      .then((res) => {
        setSingleTweetId(res);
        setStatus("idle");
      });
  }, [tweetId]);

  return (
    <Redirect status={status}>
      <div>
        <BigTweet singleTweetId={singleTweetId} />
      </div>
    </Redirect>
  );
};

export default TweetDetails;
