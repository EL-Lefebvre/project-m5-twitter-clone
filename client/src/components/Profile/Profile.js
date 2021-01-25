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
  const [currentHandle, setCurrentHandle] = useState("");
  const { currentUser, homeFeed, status, setStatus, profileUrl, setProfileUrl } = useContext(
    CurrentUserContext
  );
  const { handle } = useParams();
  setProfileUrl(true)
  const handleInfo = async () => {
    try {
      const response = await fetch(`/api/${handle}/profile`)
        .then((data) => data.json())
        .then((data) => data.profile);

      setCurrentHandle(response);
      console.log(response);
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (handle) {
      handleInfo();
    }
   
    setStatus("idle");
  }, [handle]);

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

  return currentHandle ? (
    <Wrapper>
      <div>
        <Banner src={currentHandle.bannerSrc} />
        <Avatar src={currentHandle.avatarSrc} />
      </div>
      <ProfileInfo>
        <Handle>
          <Span>{currentHandle.displayName}</Span>
          {`@ ${currentHandle.handle}`}
        </Handle>
        <Date>
          <List>
            <Location /> {currentHandle.location}{" "}
          </List>
          <List>
            <Calendar /> Joined {moment(currentHandle.joined).format("MM YYYY")}
          </List>
        </Date>
        <Follow>
          <Item>
            <Span>{currentHandle.numFollowers}</Span> Followers{" "}
          </Item>

          <Item>
            <Span>{currentHandle.numFollowing}</Span> Following{" "}
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
          <SmallTweet
          handleFeed={handleFeed}
            tweetArray={Object.values(homeFeed)}
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
