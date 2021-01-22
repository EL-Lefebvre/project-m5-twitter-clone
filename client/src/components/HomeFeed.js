import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { CurrentUserContext } from "./CurrentUserContext";
import moment from "moment";
import SingleTweet from "./SingleTweet";

const HomeFeed = () => {

  const [homeFeed, setHomeFeed] = useState();
  const [status, setStatus] = useState("loading")
  const getHomeFeed = async () => {
    try{
      const response = await fetch("/api/me/home-feed").then((data) => data.json());
      setHomeFeed(response.tweetsById);
    } catch(err){
      setStatus('error')
    }
  };

  useEffect(()=>{
    if(!homeFeed){
      getHomeFeed()
    }
  },[])

  useEffect(()=>{
    if(homeFeed){
      setStatus('idle')
    }
  }, [homeFeed])

 if (status === 'error'){
    return (
      <div>error</div>
    )
  }
  console.log(status);
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
          {homeFeed && (
              <SingleTweet tweetArray={Object.values(homeFeed)} status={status} />
          )}
        </Scroll>
      </Feed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  
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
  border-left: 1px lightgray solid;
  border-right: 1px lightgray solid;
`;
export default HomeFeed;
