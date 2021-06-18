import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { getUserData } from "./lib/Api";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: #6e6e6d; */
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: movingCard;
  animation-duration: 1s;
  @keyframes movingCard {
    from {
      transform: translateY(-8%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const H1 = styled.h1`
  margin: 0;
  color: #f9d0c8;
  text-shadow: 0px 10px 15px rgba(0, 0, 0, 25%);
`;

const InnerContainer = styled.div`
  background-color: rgba(124, 124, 124, 70%);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 25%);
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  margin: 5px;
`;

function App() {
  const [userData, setUserData] = useState(null);
  const [state, setState] = useState(null);

  const getData = async (name) => {
    setState("loading");
    const data = await getUserData(name);
    switch (data) {
      case null: {
        setState(null);
        setUserData(null);
        break;
      }
      case "fail": {
        setState("fail");
        setUserData(null);
        break;
      }
      default: {
        setState("success");
        setUserData(data);
        break;
      }
    }
  };

  return (
    <Container>
      <H1>🐰 Github Profile Finder 🥕</H1>
      <InnerContainer>
        <SearchBar getData={getData} />
        <Result userData={userData} state={state}></Result>
      </InnerContainer>
    </Container>
  );
}

export default App;
