import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../../constants";
import TweetActions from "./TweetActions";

const BigTweet = ({ singleTweetId }) => {
  const history = useHistory();
  const currentFocus = useRef();

  return (
    singleTweetId && (
      <Wrapper key={singleTweetId.id}>
        <Tweet>
          <ProfilePic src={singleTweetId.author.avatarSrc} />
          <ProfileField
            ref={currentFocus}
            tabIndex="1"
            onClick={(e) => {
              e.cancelBubble = true;
              if (e.stopPropagation) {
                e.stopPropagation();
                history.replace(`/profile/${singleTweetId.author.handle}`);
              }
            }}
            onKeyPress={(e) => {
              e.cancelBubble = true;
              if (e.stopPropagation) {
                e.stopPropagation();
                history.replace(`/profile/${singleTweetId.author.handle}`);
              }
            }}
          >
            <ProfileLink>{singleTweetId.author.displayName} </ProfileLink>
            <TextPale>{`@ ${singleTweetId.author.handle} `}</TextPale>
          </ProfileField>
        </Tweet>
        {singleTweetId.status}
        <TweetPicWrapper>
        {singleTweetId.media
            .filter(med => med.url !== "")
            .map(filteredMedia => (
              <TweetPic src={filteredMedia.url} />
            ))}
        </TweetPicWrapper>
        <TextPale>
          {" "}
          {`${moment(singleTweetId.timestamp).format(
            "hh:mm A, MMM Do YYYY"
          )} - Critter App`}
        </TextPale>
        <TweetActions />
      </Wrapper>
    )
  );
};

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
  display: flex;
  justify-content: center;
`;
const ProfileLink = styled.a`
  font-weight: bolder;
  text-decoration: underline;
  cursor: pointer;
`;
const TextPale = styled.p`
  color: ${COLORS.secondary};
  font-size: 0.8em;
`;
const ProfileField = styled.div`
  display: flex;
  flex-direction: column;
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
