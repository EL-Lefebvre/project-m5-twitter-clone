import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeFeed from "./components/Home/HomeFeed";
import Error from "./components/Error";
import Loading from "./components/Loading"
import GlobalStyles from "./GlobalStyles";
import Bookmarks from "./components/Bookmarks";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile/Profile";
import TweetDetails from "./components/Tweets/TweetDetails";
import SideBar from "./components/Sidebar";
import { CurrentUserContext } from "./components/CurrentUserContext";
function App() {
  const { status } = useContext(CurrentUserContext);

  //Error message

  return (
  
    <Wrapper className="App">
      <Router>
        <SideBar />
        <Main>
            {
      (status === "error") ? (<Error />) : status === "loading" ? (<Loading />):
         ( <Switch>
            <Route exact path="/" >
              {" "}
              <HomeFeed />{" "}
            </Route>

            <Route exact path="/notifications">
              {" "}
              <Notifications />{" "}
            </Route>
            <Route exact path="/bookmarks">
              {" "}
              <Bookmarks />{" "}
            </Route>
            <Route exact path="/tweet/:tweetId">
              {" "}
              <TweetDetails />{" "}
            </Route>
            <Route exact path="/profile/:handle">
              <Profile />
            </Route>
        
          </Switch>)
}
        </Main>
        <GlobalStyles />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  border-bottom: none;
  padding: 0;
  line-height: 100%;
  width: 40em;
`;
export default App;
