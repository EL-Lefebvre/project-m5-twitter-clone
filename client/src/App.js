import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.css";
import HomeFeed from "./components/Home/HomeFeed";
import Error from "./components/Error";
import GlobalStyles from "./GlobalStyles";
import Bookmarks from "./components/Bookmarks";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile/Profile";
import TweetDetails from "./components/Tweets/TweetDetails";
import SideBar from "./components/Sidebar";
import { CurrentUserContext } from "./components/CurrentUserContext";
function App() {
  const { status } = useContext(CurrentUserContext);
  let history = useHistory();
  //Error message

  return (
    <Wrapper className="App">
      <Router>
        <SideBar />
        <Main>
          <Switch>
            <Route exact path="/" exact={true}>
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
            {/* <Route exact path="/error">
              <Error />
            </Route> */}
          </Switch>
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
