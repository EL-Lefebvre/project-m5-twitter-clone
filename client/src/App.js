import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeFeed from "./components/HomeFeed";
import GlobalStyles from "./GlobalStyles";
import Bookmarks from "./components/Bookmarks";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import TweetDetails from "./components/TweetDetails";
import SideBar from "./components/Sidebar";
function App() {
  return (
    <Wrapper className="App">
      
        <Router>
          <SideBar />
          <Main>
            <Switch>
              <Route path="/" exact={true}>
                {" "}
                <HomeFeed />{" "}
              </Route>

              <Route path="/notifications">
                {" "}
                <Notifications />{" "}
              </Route>
              <Route path="/bookmarks">
                {" "}
                <Bookmarks />{" "}
              </Route>
              <Route path="/tweet/:tweetId">
                {" "}
                <TweetDetails />{" "}
              </Route>
              <Route path="/profile/:handle">
            
                <Profile />
              </Route>
            </Switch>
          </Main>
          <GlobalStyles/>
        </Router>
       
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  border: 1px solid lightgray;
  border-bottom:none;
  height: 100vh;
  width: 60vw;
`;
export default App;
