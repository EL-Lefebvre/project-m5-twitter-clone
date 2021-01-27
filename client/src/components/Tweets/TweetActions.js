import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { CurrentUserContext } from "../CurrentUserContext";
import Retweet from "./TweetIcons/Retweet";
import Heart from "./TweetIcons/HeartButton/Heart";
import { FiShare as Share } from "react-icons/fi";
import Actions from "./Actions";
import { FaRegComment as Comment } from "react-icons/fa";
// {setCurrentTweet, currentTweet}
const TweetActions = ({ numRetweets, isRetweeted, numLikes, isLiked }) => {
  const [toggleLike, setToggleLike] = useState(isLiked);
  const [colorChange, setColorChange] = useState("black");
  const [updatedNumLikes, setUpdatedNumLikes] = useState(numLikes);

  const handleClickLike = () => {
    setToggleLike(!toggleLike);
  };
  useEffect(() => {
    if (toggleLike) {
      setUpdatedNumLikes(numLikes + 1);
    } else {
      setUpdatedNumLikes(0);
    }
  }, [toggleLike]);

  console.log(toggleLike);
  return (
    <Wrapper>
      <Comment size={20} />
      <Retweet numRetweets={numRetweets} isRetweeted={isRetweeted} />
      <ActionDiv>
        <Actions color="rgb(224, 36, 94)" onClick={handleClickLike} size={40}>
          <Heart
            color="rgb(224, 36, 94)"
            size={35}
            toggleLike={toggleLike}
            updatedNumLikes={updatedNumLikes}
          />
        </Actions>
        <numLike>{updatedNumLikes}</numLike>
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
display:flex;
align-items:center;
`;
const numLike = styled.h5``;

export default TweetActions;
