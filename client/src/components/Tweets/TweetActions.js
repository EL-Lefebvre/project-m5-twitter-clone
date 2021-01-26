import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { CurrentUserContext } from "../CurrentUserContext";
import Retweet from "./TweetIcons/Retweet";
import { FiShare as Share } from "react-icons/fi";

import { HiOutlineHeart as Heart } from "react-icons/hi";
import { FaRegComment as Comment } from "react-icons/fa";
// {setCurrentTweet, currentTweet}
const TweetActions = ({numRetweets, isRetweeted, numLikes, isLiked}) => {
 

  return (
    <Wrapper>
      <Comment size={20} /> 
      <Retweet  numRetweets= {numRetweets} isRetweeted={isRetweeted} />
      <Heart size={20}/>
      <Share size={20}/>
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
  &.icon{
    height:200px;
  }
`;

export default TweetActions;
