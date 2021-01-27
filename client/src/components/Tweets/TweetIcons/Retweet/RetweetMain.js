import React, { useContext } from "react";
import styled from "styled-components";
import RetweetIcon from "./RetweetIcon";
import Spin from "./Spin";
import AnimatedSpin from "./AnimatedSpin";

const RetweetMain = ({color, size, toggleRetweet, updatedNumRetweet}) => {


  return (
    <Wrapper>
      {toggleRetweet && <Spin />}
      {toggleRetweet ? (
        <AnimatedSpin>
          <RetweetIcon color={color} width={size} toggleRetweet={toggleRetweet} />
        </AnimatedSpin>
      ) : (
        <RetweetIcon width={size} toggleRetweet={toggleRetweet} />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RetweetMain;
