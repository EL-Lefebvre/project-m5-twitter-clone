import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FiHeart, FiShare } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import {BiComment } from "react-icons/bi";


const HomeFeed = () => {
  return (
    <Wrapper>
      <Feed>
        <TweetField>
          <Title>Home</Title>
          <TextArea type="text" placeholder="What is happening?" />
          <SubmitBar>
            <Count>280</Count>
            <Button>Meow</Button>
          </SubmitBar>
        </TweetField>
        <Scroll>
          <h1>scroll</h1>
        </Scroll>
      </Feed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const Feed = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;
const TweetField = styled.div`
  margin: 20px;
  border-radius: 10px;
  width: 100%;
`;
const SubmitBar = styled.div`
  display: flex;
  margin: 30px;
  width: 50%;
  height: 50px;
  margin-top: 10px;
  border: 1px solid black;
`;

const TextArea = styled.input`
  border: none;
  width: 49vw;
  height: 150px;
  text-indent: 10px;
  padding: none;
`;

const Count = styled.h5`
  color: lightgray;
  margin: 10px;
  top: 0px;
`;
const Button = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 10px;
  width: 100px;
  height: 20px;
  border: none;
`;
const Title = styled.h4``;

const Scroll = styled.div`
  margin-top: 20px;
  border-top: 1px solid black;
  background-color: blue;
  width: 100%;
`;
export default HomeFeed;
