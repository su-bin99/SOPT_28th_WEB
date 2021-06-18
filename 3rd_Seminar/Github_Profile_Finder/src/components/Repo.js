import React from "react";
import styled from "styled-components";

const RepoWrap = styled.div`
  width: 308px;
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

  .prevBtn {
    color: #f8d0c8;
    font-weight: 700;
    font-size: 28px;
    margin: 10px 0 0 10px;
  }

  .repo {
    &__outerContainer {
      max-height: 570px;
      overflow: scroll;
    }
    &__innerContainer {
      cursor: pointer;
      margin: 10px;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 5px;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 25%);
    }
    &__name {
      cursor: pointer;
      font-weight: 600;
    }
    &__desc {
      cursor: pointer;
      margin-top: 3px;
      font-size: 0.8em;
      color: #353535;
    }
  }
`;

const repoHandler = (url) => {
  window.open(url);
};

const Repo = ({ repoData, setIsRepo }) => {
  console.log(repoData);
  return (
    repoData && (
      <RepoWrap>
        <div
          className="prevBtn"
          onClick={() => {
            setIsRepo(false);
          }}
        >
          &lt;
        </div>
        <div className="repo__outerContainer">
          {repoData.map((repo, index) => (
            <div
              className="repo__innerContainer"
              onClick={() => {
                repoHandler(repo.clone_url);
              }}
              key={index}
            >
              <div className="repo__name">{repo.name}</div>
              <div className="repo__desc">{repo.description}</div>
            </div>
          ))}
        </div>
      </RepoWrap>
    )
  );
};

export default Repo;

// {
//   userHistory.map((history, index) => (
//     <div
//       className="history__content"
//       key={index}
//       onClick={historyHandler}
//       value={history}
//     >
//       {history}
//     </div>
//   ));
// }
