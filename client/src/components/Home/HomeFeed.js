import React, { useContext } from "react";
import styled from "styled-components";
import Redirect from "../Redirect";
import { CurrentUserContext } from "../CurrentUserContext";
import { useHistory } from "react-router-dom";

import SmallTweet from "../Tweets/SmallTweet";
import TextBox from "./TextBox";

const HomeFeed = () => {
  const { status, setStatus, homeFeed, setHomeFeed } = useContext(
    CurrentUserContext
  );
  let history = useHistory();

  if (homeFeed) {
    setStatus("idle");
  }

  const handleFeed = (id) => {
    history.push(`/tweet/${id}`);
  };
  const addNewTweet = (tweet) => {
    setHomeFeed([{ ...tweet }, ...homeFeed]);
  };

  return (
    <Wrapper>
      <TweetField>
        <Title>Home</Title>
        <TextBox addNewTweet={addNewTweet} />
      </TweetField>
      <Scroll>
        <Redirect status={status}>
          {homeFeed && (
            <SmallTweet
              handleFeed={handleFeed}
              tweetArray={homeFeed}
              status={status}
            />
          )}
        </Redirect>
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
`;

const TweetField = styled.div`
  width: 100%;
  border-bottom: 10px lightgray solid;
  border-spacing: none;
`;

const Title = styled.h4`
  margin-left: 20px;
`;

const Scroll = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
  margin: 0px -17px 0px -17px;
  max-width: 640px;
`;

export default HomeFeed;
