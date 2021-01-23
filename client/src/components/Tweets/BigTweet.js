import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../../constants";
import { CurrentUserContext } from "../CurrentUserContext";
import TweetActions from "./TweetActions";

const BigTweet = ({ singleTweetId }) => {
  const { setStatus,status } = useContext(
    CurrentUserContext
  );
const author = (singleTweetId.author)
const media = (singleTweetId.media)

  if (status === "loading") {
    return <div>Loading</div>;
  }
    

 
 
    return singleTweetId && ( 
      <Wrapper key={singleTweetId.id} >
        <Tweet >
           <ProfilePic src={author.avatarSrc} /> 
           <ProfileField>
          <ProfileLink>{author.displayName} </ProfileLink>
          <TextPale>{`@ ${author.handle} `}</TextPale> 
           </ProfileField> 
          
        </Tweet>
        {singleTweetId.status}
        <TweetPicWrapper>
        {media.map((med) => {
          if (med.url !== "") {
            return (<TweetPic src={med.url} />);
          }
        })}
        </TweetPicWrapper>
        <TextPale> {`${moment(singleTweetId.timestamp).format("hh:mm A, MMM Do YYYY")} - Critter App`}</TextPale>
            <TweetActions />
      </Wrapper>
    );
  }


const Wrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  border-right: none;
  border-left: none;
  justify-content: center;
`;

const Tweet = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const TweetPicWrapper = styled.div`
display:flex;
justify-content:center;
`;
const ProfileLink = styled.a`
  font-weight: bolder;
  text-decoration: underline;
  cursor: pointer;
`;
const TextPale = styled.p`
  color: ${COLORS.secondary};
  font-size:.8em;
`;
const ProfileField = styled.div`
display:flex;
flex-direction:column;
`;
const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  padding: 10px;
`;
const TweetPic = styled.img`
  padding: 10px;
  border-radius: 50px;
  max-height: 400px;
  width: 70%;
`;
export default BigTweet;
