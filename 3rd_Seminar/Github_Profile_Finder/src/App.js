import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
// import Hello from './Hello';
import { getUserData } from './lib/Api';
import styled from 'styled-components'

const Container = styled.div`
  background-color : #6E6E6D;
  margin : 0px;
  padding : 0px;
  width : 100vw;
  height : 100vh;
  display:flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;

const H1 = styled.h1`
  margin : 0;
  color : #F9D0C8;
`;

const InnerContainer = styled.div`
  background-color : #939393;
  border-radius : 20px;
  padding : 10px;
  margin : 5px;
`;


function App() {
  const [userData, setUserData] = useState(null);

  const getData = async (name) => {
    const data = await getUserData(name);
    setUserData(data);
  }

  return (
    <Container>
      <H1>Github Profile Finder</H1>
      <InnerContainer>
        <SearchBar getData={getData} />
        <UserCard userData={userData} />
      </InnerContainer>
    </Container>
  );
}

export default App;