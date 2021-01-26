import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { HiOutlineHeart as Heart } from "react-icons/hi";
const Heart = ({numRetweets, isRetweeted}) => {
 

    return (
      <Wrapper>
       {numRetweets}
        <Retweet />
    
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
height: 40%;
padding: 10px;
`;

export default Heart;