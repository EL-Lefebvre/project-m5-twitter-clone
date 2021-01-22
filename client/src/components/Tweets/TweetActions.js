import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { FiShare as Share } from "react-icons/fi";
import { AiOutlineRetweet as Retweet } from "react-icons/ai";
import { HiOutlineHeart as Heart } from "react-icons/hi";
import { FaRegComment as Comment } from "react-icons/fa";

const TweetActions = () => {
  console.log(Heart);
  return (
    <Wrapper>
      <Comment />
      <Retweet />
      <Heart />
      <Share />
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
`;

export default TweetActions;
