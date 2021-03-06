import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

const P = styled.p`
  color: #f9d0c8;
  text-align: center;
`;

let Result = ({ userData, state, setIsRepo }) => {
  switch (state) {
    case "loading": {
      return <P>loading..</P>;
      break;
    }
    case "fail": {
      return <P>없는 사용자 입니다. </P>;
      break;
    }
    case "success": {
      return (
        <UserCard
          userData={userData}
          className="userCard"
          setIsRepo={setIsRepo}
        />
      );
      break;
    }
    case null: {
      return <></>;
      break;
    }
  }
};

export default Result;
