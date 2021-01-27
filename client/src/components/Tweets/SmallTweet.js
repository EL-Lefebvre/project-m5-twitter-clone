import React, { useRef, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../../constants";
import TweetActions from "./TweetActions";

const SmallTweet = ({ tweetArray, handleFeed, status, homeFeed }) => {
  const { setCurrentTweet, setStatus } = useContext(CurrentUserContext);
  const history = useHistory();
  const currentFocus = useRef();

  if (!tweetArray) {
    setStatus("loading");
  }
  const historyPath = history.location.pathname.includes("profile");

  console.log(tweetArray);
  return tweetArray.map((feed, feedId) => {
    return (
      <Wrapper>
        <Feed
          id="wrapper"
          key={feedId}
          setCurrentTweet={setCurrentTweet(`${feed.id}`)}
          tabIndex="1"
          onClick={() => {
            handleFeed(`${feed.id}`);
          }}
          onKeyPress={() => {
            handleFeed(`${feed.id}`);
          }}
        >
          <HandleDiv>
            <ProfileRedirect
              ref={currentFocus}
              tabIndex="1"
              onClick={(e) => {
                e.cancelBubble = true;
                if (e.stopPropagation) {
                  e.stopPropagation();
                  if (historyPath) {
                    history.replace(`${feed.author.handle}`);
                  } else {
                    history.replace(`profile/${feed.author.handle}`);
                  }
                }
              }}
              onKeyPress={(e) => {
                e.cancelBubble = true;
                if (e.stopPropagation) {
                  e.stopPropagation();

                  if (historyPath) {
                    history.replace(`${feed.author.handle}`);
                  } else {
                    history.replace(`profile/${feed.author.handle}`);
                  }
                }
              }}
            >
              <AvatarDiv>
                <ProfilePic src={feed.author.avatarSrc} />
              </AvatarDiv>
              <ProfileLink>{feed.author.displayName} </ProfileLink>
              <TextPale>{`@ ${feed.author.handle} `}</TextPale>
              <TextPale> -{moment(feed.timestamp).format("MMM YYYY")}</TextPale>
            </ProfileRedirect>
          </HandleDiv>
          <Status>{feed.status} </Status>

          <TweetPicWrapper>
            {feed.media.map((med) => {
              if (med.url !== "") {
                return <TweetPic src={med.url} />;
              }
            })}
          </TweetPicWrapper>
        </Feed>
        <TweetActions
          numRetweets={feed.numRetweets}
          isRetweeted={feed.isRetweeted}
          numLikes={feed.numLikes}
          isLiked={feed.isLiked}
        />
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
`;

const Feed = styled.div`
  display: flex;
  overflow-wrap: break-word;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
`;
const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const HandleDiv = styled.div``;
const ProfileRedirect = styled.div`
  display: flex;
  align-items: center;

`;
const Status = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: inline-block;
  overflow-wrap: break-word;
  max-width: 450px;
  padding-left: 10px;
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
