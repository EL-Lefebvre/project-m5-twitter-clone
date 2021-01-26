import React from "react";
import styled from "styled-components";
import { FaBomb as Bomb } from "react-icons/fa"
const ErrorPage = () => {
    return (<Wrapper>

  <BombImg />

<TitleDiv>
  <ErrorTitle>An unknown error has occured.</ErrorTitle>
</TitleDiv>
<InfoDiv>
<Info>
  Please try refreshing the page, or <Span>contact support</Span> if the problem persists.
</Info>
</InfoDiv>

    </Wrapper>)
  };

  const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  margin-top:200px;
  `;
  const BombImg = styled(Bomb)`
  size:200;
  `;
  const TitleDiv = styled.div``;
  const InfoDiv = styled.div``;

 
  const ErrorTitle = styled.h3``;
  const Info = styled.p``;
  const Span = styled.span``;


  export default ErrorPage