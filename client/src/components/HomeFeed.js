import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { CurrentUserContext } from "./CurrentUserContext";
import SmallTweet from "./Tweets/SmallTweet";

const HomeFeed = () => {
  const { homeFeed, status } = useContext(CurrentUserContext);

  if (status === "error") {
    return <div>error</div>;
  }
  console.log(status);
  return (
    <Wrapper>
    
        <TweetField>
          <Title>Home</Title>
          <TextArea type="text" placeholder="What is happening?" />
          <SubmitBar>
            <Count>280</Count>
            <Button>Meow</Button>
          </SubmitBar>
        </TweetField>
        <Scroll>
          {homeFeed && (
            <SmallTweet tweetArray={Object.values(homeFeed)} status={status} />
          )}
        </Scroll>
     
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border-left: 1px lightgray solid;
  border-right: 1px lightgray solid;
  width: 100%;

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
  margin: 10px;
  width: 95%;
  height: 50px;
  margin-top: 10px;
  justify-content: flex-end;
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
  margin-top: 10px;
`;
const Title = styled.h4``;

const Scroll = styled.div`
  margin-top: 20px;
  border-top: 10px lightgray solid;
  margin: 0px -17px 0px -17px;
  width: 100%;

`;
export default HomeFeed;
