import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { IoLocationOutline as Location } from "react-icons/io5";
import { AiTwotoneCalendar as Calendar } from "react-icons/ai";
import moment from "moment";
import { CurrentUserContext } from "../CurrentUserContext";

import SmallTweet from "../Tweets/SmallTweet";

const Profile = () => {
  const history = useHistory();
  const [boolUser, setBoolUser] = useState(false);
  const [handleTweet, setHandleTweet] = useState();

  // const [currentHandle, setCurrentHandle] = useState("");
  const {
    currentUser,
    homeFeed,
    status,
    setStatus,
    profileUrl,
    setProfileUrl,
    currentProfileFeed,
    setCurrentUserHandle,
    currentUserData,
  } = useContext(CurrentUserContext);
  const { handle } = useParams();
  setCurrentUserHandle(handle);
  setProfileUrl(true);

  const handleFeed = (id) => {
    setHandleTweet(id);
    history.push(`/tweet/${id}`);
  };

  if (currentUser === "") {
    return <div>Loading</div>;
  }
  if (status === "loading") {
    return <div>Loading</div>;
  }

  return currentUserData ? (
    <Wrapper>
      <div>
        <Banner src={currentUserData.bannerSrc} />
        <Avatar src={currentUserData.avatarSrc} />
      </div>
      <ProfileInfo>
        <Handle>
          <Span>{currentUserData.displayName}</Span>
          {`@ ${currentUserData.handle}`}
        </Handle>
        <Date>
          <List>
            <Location /> {currentUserData.location}{" "}
          </List>
          <List>
            <Calendar /> Joined{" "}
            {moment(currentUserData.joined).format("MM YYYY")}
          </List>
        </Date>
        <Follow>
          <Item>
            <Span>{currentUserData.numFollowers}</Span> Followers{" "}
          </Item>

          <Item>
            <Span>{currentUserData.numFollowing}</Span> Following{" "}
          </Item>
        </Follow>
      </ProfileInfo>
      <ProfileMenu>
        <MenuItems>Menu</MenuItems>
        <MenuItems>Media</MenuItems>
        <MenuItems>Likes</MenuItems>
      </ProfileMenu>
      <Feed>
        {currentProfileFeed && (
          <SmallTweet
            handleFeed={handleFeed}
            tweetArray={Object.values(currentProfileFeed)}
            status={status}
            profileUrl={profileUrl}
            setProfileUrl={setProfileUrl}
          />
        )}
      </Feed>
    </Wrapper>
  ) : (
    <div>Loading</div>
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
