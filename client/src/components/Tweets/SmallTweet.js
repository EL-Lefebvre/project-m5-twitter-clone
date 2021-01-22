import React from "react";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../../constants";
import TweetActions from "./TweetActions";

const SmallTweet = ({ tweetArray, status }) => {
  if (status === "loading") {
    return <div>Loading</div>;
  }
  return (tweetArray.map((feed, feedId) => {
    return (
      <Wrapper key={feedId}>
        <Feed>
          <AvatarDiv>
            <ProfilePic src={feed.author.avatarSrc} />
          </AvatarDiv>
          <InfoDiv>
       <HandleDiv>
            <ProfileLink>{feed.author.displayName} </ProfileLink>
            <TextPale>{`@ ${feed.author.handle} `}</TextPale>
            <TextPale> -{moment(feed.timestamp).format("MMM YYYY")}</TextPale>
            </HandleDiv>
            <Status>{feed.status} </Status>
          </InfoDiv>
        </Feed>

        <TweetPicWrapper>
          {feed.media.map((med) => {
            if (med.url !== "") {
              return <TweetPic src={med.url} />;
            }
          })}
        </TweetPicWrapper>
        <TweetActions />
      </Wrapper>
    );
  }));
};

const Wrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  border-right: none;
  border-left: none;
  justify-content: center;
`;

const Feed = styled.div`
  display: flex;
`;
const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const HandleDiv = styled.div`
  display: flex;
align-items:center;
`;
const Status = styled.div`
display:flex;
justify-content:center;
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
export default SmallTweet;
