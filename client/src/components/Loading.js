import React from "react";
import styled, { keyframes } from "styled-components";
import { BiLoader } from "react-icons/bi";
const Loading = () => {
  return (
    <Wrapper>
        <Div>
      <BiLoader size={50} />
      </Div>
    </Wrapper>
  );
};

const spin = keyframes`
0% {
    transform: rotate(0deg);
} 100% {
    transform: rotate(360deg);
}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
 
  
`;
const Div = styled.div`
 animation: ${spin} 1.5s infinite;
`;

export default Loading;
