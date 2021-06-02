import React from 'react';
import styled from "styled-components";
import AreaScreen from "./screens/area";
import {Footer, LeftAside, Main, RightAside,Header} from './components'

const AuthenticatedScreen = () => {
    return (
        <Body>
            <Header>头部</Header>
            <Main>
                <LeftAside/>
                <AreaScreen/>
                <RightAside/>
            </Main>
            <Footer>结束</Footer>
        </Body>
    );
};

export default AuthenticatedScreen;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
