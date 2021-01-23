import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IoLocationOutline as Location } from "react-icons/io5";
import { AiTwotoneCalendar as Calendar } from "react-icons/ai";
import moment from "moment";
import { CurrentUserContext } from "../CurrentUserContext";

import SmallTweet from "../Tweets/SmallTweet";

const Profile = () => {
  const [boolUser, setBoolUser] = useState(false);
  const { currentUser, currentHandle, homeFeed, status } = useContext(
    CurrentUserContext
  );
 console.log(homeFeed)
  useEffect(() => {
    if (currentUser && currentHandle) {
      if (currentUser.handle === currentHandle.handle) {
        setBoolUser(true);
      }
      return boolUser;
    }
    console.log(boolUser);
    return boolUser;
  }, [currentUser]);

  console.log(boolUser);
  if (currentUser === "") {
    return <div>Loading</div>;
  }
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
            <Item>
              <Span>{currentUser.numFollowers}</Span> Followers{" "}
            </Item>

            <Item>
              <Span>{currentUser.numFollowing}</Span> Following{" "}
            </Item>
          </Follow>
        </ProfileInfo>
        <ProfileMenu>
          <MenuItems>Menu</MenuItems>
          <MenuItems>Media</MenuItems>
          <MenuItems>Likes</MenuItems>
        </ProfileMenu>
        <Feed>
          {homeFeed && (
            <SmallTweet tweetArray={Object.values(homeFeed)} status={status} />
          )}
        </Feed>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  border-left: 1px lightgray solid;
  border-right: 1px lightgray solid;
  width: 100%;
  flex-direction: column;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;
const ProfileMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Date = styled.div`
  display: flex;
`;
const Handle = styled.div`
  display: flex;
  flex-direction: column;
`;
const Follow = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
`;
const Span = styled.span`
  font-weight: bolder;
  padding-right: 5px;
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

  border: 5px solid white;
`;
const List = styled.h4`
  padding: 5px;
`;
const MenuItems = styled.h3`
  padding-right: 40px;
`;
const Item = styled.p`
  padding: 5px;
`;
export default Profile;
