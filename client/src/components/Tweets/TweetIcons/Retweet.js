import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { AiOutlineRetweet as RetweetIcon } from "react-icons/ai";
const Retweet = ({ numRetweets, isRetweeted }) => {
  const [toggle, setToggle] = useState(isRetweeted);
//   const [ colorChange, setColorChange] = useState("black")
//   useEffect(() => {
// if(toggle){
//   setColorChange("green")
// }

//   }, [toggle]);
  return (
    <Wrapper>
      <Button>
      
        <RetweetIcon size={20} />
      </Button>

      <numRetw>{numRetweets}</numRetw>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background-color: white;
  border: none;

`;
const numRetw = styled.h5`
  padding-left: 5px;
`;

export default Retweet;
