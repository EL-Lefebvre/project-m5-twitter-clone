import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IoLocationOutline as Location } from "react-icons/io5";
import { AiTwotoneCalendar as Calendar } from "react-icons/ai";
import moment from "moment";
import { CurrentUserContext } from "./CurrentUserContext";


const Profile = () => {
        const { currentUser, setCurrentUser, setStatus, status } = useContext(CurrentUserContext);
       
      //   const { handle } = useParams();
      //   console.log(handle)
      //   const profileInfo = async () => {
      //     try{
          
      //         const response = await fetch(`/api/:${handle}/profile`)
      //           .then((data) => data.json())
      //           .then((data) => console.log(data.profile))
      //          setCurrentUser(response);
    
      //     }catch(err){
      //         setStatus('error')
      //     }
      // }
    
      // useEffect(()=>{
      //     if(!currentUser){
      //         profileInfo()
      //     }
      // }, [])
    
      // useEffect(() => {
      //     if(currentUser){
      //         setStatus("idle")
      //     }
      // }, [currentUser])
  
   if(status === 'loading'){
     return (
       <div>fjdklsjf</div>
     )
   }

  return (currentUser &&
    <Wrapper>
      <div>
        <Banner src={currentUser.bannerSrc} />
        <Avatar src={currentUser.avatarSrc} />
      </div>
      <ProfileInfo>
      
        <h4>{`@ ${currentUser.handle}`}</h4> {currentUser.displayName}
        <List> <Location /> {currentUser.location} </List>
        <List> <Calendar /> Joined {moment(currentUser.joined).format('MM YYYY')}</List>
        <div><p>{currentUser.numFollowers} Followers </p>
        <p>{currentUser.numFollowing} Following </p></div>
      </ProfileInfo>
      <ProfileMenu><MenuItems>Menu</MenuItems><MenuItems>Media</MenuItems><MenuItems>Likes</MenuItems></ProfileMenu>
      <Feed><Tweet></Tweet></Feed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
height:100vh;
`;
const ProfileInfo = styled.div`
display:flex;
flex-direction:column;
height:300px;

`;
const ProfileMenu = styled.div`
display:flex;
justify-content:space-evenly;

`;
const Feed = styled.div``;
const Tweet = styled.div``;
const Banner = styled.img`
  width: 100%;
  height: 200px;
`;
const Avatar = styled.img`
border-radius:100px;
height:100px;
width:100px;
margin-top:-40px;
z-index:2;
padding:10px;
`;
const List = styled.h4``;
const MenuItems = styled.h3`

padding-right:40px;

`;

export default Profile;
