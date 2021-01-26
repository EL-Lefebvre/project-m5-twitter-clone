import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { useHistory } from "react-router-dom";
import Error from "../Error";
import SmallTweet from "../Tweets/SmallTweet";
import TextBox from "./TextBox";

const HomeFeed = () => {
  const [historyUrl, setHistoryUrl] = useState();
  const [wordCount, setWordCount] = useState(281);
  const [handleTweet, setHandleTweet] = useState("");
  const [colorChange, setColorChange] = useState("lightgray");
  const [charCount, setCharCount] = useState(0);
  const [newTweet, setNewTweet] = useState(null);
  const [dataTweet, setDataTweet] = useState([]);
  const { status, setStatus, homeFeed, setHomeFeed } = useContext(
    CurrentUserContext
  );
  let history = useHistory();
 

  if (status === "error") {
    return <Error />;
  }

  console.log(homeFeed);

  const handleFeed = (id) => {
    setHandleTweet(id);

    history.push(`/tweet/${id}`);
  };

  const addNewTweet = (tweet) => {


setHomeFeed([{...tweet}, ...homeFeed])

  }

  return (
    <Wrapper>
      <TweetField>
        <Title>Home</Title>
        <TextBox
        addNewTweet={addNewTweet}
          wordCount={wordCount}
          setWordCount={setWordCount}
          charCount={charCount}
          setCharCount={setCharCount}
          colorChange={colorChange}
          setColorChange={setColorChange}
          dataTweet={dataTweet}
        />
      </TweetField>
      <Scroll>
        {homeFeed &&
         
            <SmallTweet
             
              dataTweet={dataTweet}
              handleFeed={handleFeed}
              setHistoryUrl={setHistoryUrl}
              tweetArray={homeFeed}
              status={status}
            />
        }
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

const Title = styled.h4``;

const Scroll = styled.div`
  margin-top: 20px;
  border-top: 10px lightgray solid;
  margin: 0px -17px 0px -17px;
  width: 100%;
`;

export default HomeFeed;
