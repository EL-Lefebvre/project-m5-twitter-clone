import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { AiOutlineRetweet as RetweetIcon } from "react-icons/ai";
const Retweet = ({numRetweets, isRetweeted}) => {
 

    return (
      <Wrapper>
           <RetweetIcon />
       {numRetweets}
       
    
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
display: flex;

`;


export default Retweet;