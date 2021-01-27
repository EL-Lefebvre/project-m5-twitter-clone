import React from "react";
import styled from "styled-components";
import { SIZES } from "../constants";
import Sidebar from "./Sidebar";
import Error from "./Error";
import Loading from "./Loading";

const Redirect = ({children, status, error})=> {
    return (
        <Wrapper>
           
            {status==="error" 
            ? <Error />
            : status==="loading" 
            ? <Loading/>
            : (
                <MainPage>
                    {children}
                </MainPage>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
display:flex; 
flex-direction:row;
align-items: flex-start;
justify-content:center;
`;

const MainPage = styled.div`
display:flex;
flex-direction:column;

`;

export default Redirect; 