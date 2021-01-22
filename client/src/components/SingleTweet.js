import React from "react";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../constants";

const SingleTweet = ({ tweetArray, status }) => {
  if (status === "loading") {
    return <div>Loading</div>;
  }
  return tweetArray.map((feed, feedId) => {
    return (
      <Wrapper key={feedId}>
        <Feed>
          <ProfilePic src={feed.author.avatarSrc} />
          <ProfileLink>{feed.author.displayName} </ProfileLink>
          <TextPale>{`@ ${feed.author.handle} `}</TextPale>
          <TextPale> -{moment(feed.timestamp).format("MMM YYYY")}</TextPale>
        </Feed>
        {feed.status}
        {feed.media.map((med) => {
          if (med.url !== "") {
            return (<TweetPic src={med.url} />);
          }
        })}
      </Wrapper>
    );
  });
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
  align-items: center;
  padding: 10px;
`;
const ProfileLink = styled.a`
  font-weight: bolder;
  text-decoration: underline;
  cursor: pointer;
`;
const TextPale = styled.p`
  color: ${COLORS.secondary};
`;
// const TweetField = styled.div`
//   margin: 20px;
//   border-radius: 10px;
//   width: 100%;
// `;
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
  width: 95%;
`;
export default SingleTweet;
