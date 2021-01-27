import React, { useContext } from "react";
import UnstyledButton from "../../../UnstyledButton";
import styled, { keyframes } from "styled-components";
import { TweetContext } from "../Tweet/TweetContext";
import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "../ScaleIn";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = () => {
  const { isLiked } = useContext(TweetContext);
  let size = 40;
  const heartSize = size * 0.6;

  return (
    
   
    <Wrapper style={{ width: size, height: size }}>
    {isLiked && <PoppingCircle  color="#E790F7" /> } 
    {isLiked ? (
      <ScaleIn >
 <Heart width={heartSize} isToggled={isLiked} />
 </ScaleIn>
    ) :  <Heart width={heartSize} isToggled={isLiked} />}
  
     
    </Wrapper>
  
  );
};



const Wrapper = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled(UnstyledButton)`
display: block;
margin: 0;
padding: 0;
border: none;
background: transparent;
cursor: pointer;
text-align: left;
color:rgb(224, 36, 94);

&:active {
  color: inherit;
}
`;

export default LikeButton;
