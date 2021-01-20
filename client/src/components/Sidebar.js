import React from "react";
import Logo from "../logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import { BiHomeAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";

const SideBar = () => {
  return (
    <Menu>
      <Logo />

      <MainMenu>
        <Navig to="/">
          {" "}
          <BiHomeAlt /> Home{" "}
        </Navig>
        <Navig to="/:profileId">
          {" "}
          <CgProfile />
          Profile{" "}
        </Navig>
        <Navig to="/notifications">
          {" "}
          <IoIosNotificationsOutline />
          Notifications{" "}
        </Navig>
        <Navig to="/bookmarks">
          {" "}
          <BsBookmark />
          Bookmarks{" "}
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
  text-align: center;
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
  padding: 10px;

  &.active {
    color: ${COLORS.primary};
  }
`;
export default SideBar;
