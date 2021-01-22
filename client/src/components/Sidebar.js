import React from "react";
import Logo from "../logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import { BiHomeAlt } from "react-icons/bi";
import { IoIosNotificationsOutline as Notif } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";

const SideBar = () => {
  return (
    <Menu>
      <Logo />

      <MainMenu>
        <Navig to="/">
          <ItemDiv>
            <BiHomeAlt  /> <Name> Home{" "}</Name>
          </ItemDiv>
        </Navig>
        <Navig to="profile/:handle">
          <ItemDiv>
        
            <CgProfile  />
            <Name>Profile{" "}</Name> 
          </ItemDiv>
        </Navig>
        <Navig to="/notifications">
          <ItemDiv>
            <Notif  />
            <Name> Notifications{" "}</Name> 
          </ItemDiv>
        </Navig>
        <Navig to="/bookmarks">
          <ItemDiv>
            {" "}
            <BsBookmark  />
            <Name>Bookmarks{" "}</Name>    
          </ItemDiv>
        </Navig>
        <Button>Meow</Button>
      </MainMenu>
    </Menu>
  );
};

const Menu = styled.div`
  align-items: center;
  margin-top: 10px;
  width: 20%;
  display: flex;
  flex-direction: column;
`;
const MainMenu = styled.div`
  list-style-type: none;
  display: flex;

  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const ItemDiv = styled.div`
  display: flex;
  align-items:center;
  
 
`;

const Button = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  border: none;
  margin-top: 15px;
`;
const Navig = styled(NavLink)`
  text-decoration: none;
  font-weight: bolder;
  width:150px;
  color: black;
  padding-left:15px;

  &:hover {
    color: ${COLORS.primary};
    background-color: ${COLORS.lightPurple};
    border-radius: 50px;


  }
`;
const Name = styled.h5`
padding-left:10px;
`;
const Home = styled(BiHomeAlt)``;
export default SideBar;
