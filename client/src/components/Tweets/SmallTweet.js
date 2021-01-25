import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
// import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../../constants";
import TweetActions from "./TweetActions";

const SmallTweet = ({ tweetArray, handleFeed, historyUrl, status }) => {
  const history = useHistory();
  const currentFocus = useRef();
  if (status === "loading") {
    return <div>Loading</div>;
  }

  const historyPath = history.location.pathname.includes("profile");

  return tweetArray.map((feed, feedId) => {
    return (
      <Wrapper
        id="wrapper"
        key={feedId}
        value={feed.id}
        tabIndex="1"
        onClick={() => {
          handleFeed(`${feed.id}`);
        }}
        onKeyPress={() => {
          handleFeed(`${feed.id}`);
        }}
      >
        <Feed>
          <AvatarDiv>
            <ProfilePic src={feed.author.avatarSrc} />
          </AvatarDiv>
          <InfoDiv>
            <HandleDiv>
              <div
              ref={ currentFocus}
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
                {" "}
                <ProfileLink>{feed.author.displayName} </ProfileLink>
              </div>
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
  align-items: center;
`;
const Status = styled.div`
  display: flex;
  justify-content: center;
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
