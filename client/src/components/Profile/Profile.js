import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IoLocationOutline as Location } from "react-icons/io5";
import { AiTwotoneCalendar as Calendar } from "react-icons/ai";
import moment from "moment";
import { CurrentUserContext } from "../CurrentUserContext";
import BigTweet from "../Tweets/BigTweets";

const Profile = () => {
  const { currentUser, homeFeed, status } = useContext(
    CurrentUserContext
  );

  if (status === "loading") {
    return <div>Loading</div>;
  }

  return (
    currentUser && (
      <Wrapper>
        <div>
          <Banner src={currentUser.bannerSrc} />
          <Avatar src={currentUser.avatarSrc} />
        </div>
        <ProfileInfo>
          <Handle>
            <Span>{currentUser.displayName}</Span>
            {`@ ${currentUser.handle}`}
          </Handle>
          <Date>
          <List>
            <Location /> {currentUser.location}{" "}
          </List>
          <List>
            <Calendar /> Joined {moment(currentUser.joined).format("MM YYYY")}
          </List>
          </Date>
          <Follow>
            <Span>{currentUser.numFollowers}</Span> Followers
            <Span>{currentUser.numFollowing}</Span> Following
          </Follow>
        </ProfileInfo>
        <ProfileMenu>
          <MenuItems>Menu</MenuItems>
          <MenuItems>Media</MenuItems>
          <MenuItems>Likes</MenuItems>
        </ProfileMenu>
        <Feed>
        <BigTweet tweetArray={Object.values(homeFeed)} status={status} />
        </Feed>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`;
const ProfileMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Date = styled.div`
display:flex;

`;
const Handle = styled.div`
  display: flex;
  flex-direction: column;
`;
const Follow = styled.div`
  display: flex;
  padding:10px;
  margin:10px;
`;
const Span = styled.span`
  font-weight: bolder;
`;
const Feed = styled.div``;
const Tweet = styled.div``;
const Banner = styled.img`
  width: 100%;
  height: 200px;
`;
const Avatar = styled.img`
  border-radius: 100px;
  height: 100px;
  width: 100px;
  margin-top: -40px;
  z-index: 2;
  padding: 10px;
  border: 1px solid white;
`;
const List = styled.h4``;
const MenuItems = styled.h3`
  padding-right: 40px;
`;

export default Profile;
