import React, { useEffect, useState } from "react";
import Repo from "./Repo";
import styled from "styled-components";

const P = styled.p`
  color: #f9d0c8;
  text-align: center;
`;

let RepoResult = ({ repoData, repoState, setIsRepo }) => {
  switch (repoState) {
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
        <Repo repoData={repoData} setIsRepo={setIsRepo} className="repoCard" />
      );
      break;
    }
    case null: {
      return <></>;
      break;
    }
  }
};

export default RepoResult;
