import React, { useEffect, useState } from "react";
import styled from "styled-components";

import RetweetMain from "../Tweets/TweetIcons/Retweet/RetweetMain";
import Heart from "./TweetIcons/HeartButton/Heart";
import { FiShare as Share } from "react-icons/fi";
import Actions from "./Actions";
import { FaRegComment as Comment } from "react-icons/fa";
// {setCurrentTweet, currentTweet}
const TweetActions = ({ numRetweets, isRetweeted, numLikes, isLiked }) => {
  const [toggleLike, setToggleLike] = useState(isLiked);
  const [toggleRetweet, setToggleRetweet] = useState(isRetweeted);
  const [updatedNumLikes, setUpdatedNumLikes] = useState(numLikes);
  const [updatedNumRetweet, setUpdatedNumRetweet] = useState(numRetweets);

  const handleClickLike = () => {
    setToggleLike(!toggleLike);
  };
  //Like Handle
  useEffect(() => {
    if (toggleLike) {
      setUpdatedNumLikes(numLikes + 1);
    } else {
      setUpdatedNumLikes(0);
    }
  }, [toggleLike]);

  // Retweet Handle
  const handleClickRetweet = () => {
    setToggleRetweet(!toggleRetweet);
  };
  useEffect(() => {
    if (toggleRetweet) {
      setUpdatedNumRetweet(updatedNumRetweet + 1);
    } else if (!toggleRetweet) {
      setUpdatedNumRetweet(numRetweets);
    }
    return numRetweets;
  }, [toggleRetweet]);

  return (
    <Wrapper>
      <Comment size={20} />
      <ActionDiv>
        <Actions
          color="rgb(23, 191, 99)"
          onClick={handleClickRetweet}
          size={40}
        >
          <RetweetMain
            color="rgb(23, 191, 99)"
            size={35}
            toggleRetweet={toggleRetweet}
            updatedNumLikes={updatedNumLikes}
          />
        </Actions>
        <NumUpdate>{updatedNumRetweet}</NumUpdate>
      </ActionDiv>
      <ActionDiv>
        <Actions color="rgb(224, 36, 94)" onClick={handleClickLike} size={40}>
          <Heart
            color="rgb(224, 36, 94)"
            size={35}
            toggleLike={toggleLike}
            updatedNumRetweet={updatedNumRetweet}
          />
        </Actions>
        <NumUpdate>{updatedNumLikes}</NumUpdate>
      </ActionDiv>

      <Share size={20} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 40%;
  padding: 10px;
  &.icon {
    height: 200px;
  }
`;

const ActionDiv = styled.div`
  display: flex;
  align-items: center;
`;
const NumUpdate = styled.h5``;

export default TweetActions;
