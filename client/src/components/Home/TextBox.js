import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { CurrentUserContext } from "../CurrentUserContext";
const MAX_lENGTH = 280;

const TextBox = ({
  wordCount,
  setWordCount,
  charCount,
  setCharCount,
  colorChange,
  setColorChange,
  addNewTweet,
}) => {
  const { mainUserHandle, currentUser } = useContext(CurrentUserContext);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const handleToggle = (e) => {
    if (e.key === "Backspace") {
      setToggle(true);
    } else setToggle(false);
  };
  const updatedWordCount = (e) => {
    const currentText = e.target.value;
    setValue(currentText);
    setCharCount(currentText.length);
  };

  useEffect(() => {
    if (!toggle) {
      setWordCount(wordCount - 1);
    } else {
      setWordCount(wordCount + 1);
    }

    if (wordCount <= 55 && wordCount >= 0) {
      setColorChange("#fdd501");
    } else if (wordCount <= 0) {
      setColorChange("red");
    }
  }, [charCount]);

  const handleClick = (ev) => {
    ev.preventDefault();
    setValue("");
    fetch("/api/tweet", {
      method: "POST",
      body: JSON.stringify({ status: value }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        const newTweetDetails = {
          author: {
            handle: `${currentUser.handle}`,
            displayName: `${currentUser.displayName}`,
            avatarSrc: `${currentUser.avatarSrc}`,
          },
          isLiked: false,
          isRetweeted: false,
          numLikes: 0,
          numRetweets: 0,
          ...data.tweet,
          id: `${data.tweet.id}`,
        };
        addNewTweet(newTweetDetails);
      });
  };

  return (
    <Wrapper>
      <TextDiv>
        <TextArea
          type="text"
          placeholder="What is happening?"
          onChange={updatedWordCount}
          onKeyDown={handleToggle}
          minLength="0"
          value={value}
        />
      </TextDiv>
      <SubmitBar>
        <Count style={{ color: `${colorChange}` }}>{wordCount}</Count>
        <Button type="submit" onClick={handleClick} setValue={setValue}>
          Meow
        </Button>
      </SubmitBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const TextArea = styled.textarea`
  border: none;
  padding: 10px;
  width: 45vw;
  height: 140px;
  text-indent: 10px;
  padding: none;
`;
const SubmitBar = styled.div`
  display: flex;
 align-items:center;
  margin: 10px;
  width: 95%;
  height: 50px;
  margin-top: 10px;
  justify-content: flex-end;
`;

const Count = styled.h4`
  
  text-shadow: white 1px 1px;
  margin-right: 10px;
 
`;
const Button = styled.button`
  background-color: ${COLORS.primary};
  font-weight: bolder;
  font-size: 100%;
  color: white;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  border: none;

`;
export default TextBox;
