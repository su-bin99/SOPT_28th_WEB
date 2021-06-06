import React from "react";
import MenuIcon from "../../assets/Menu.svg";
import ProfileIcon from "../../assets/Profile.svg";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";

const MainHeaderWrap = Styled.div`
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 91px;

    &__title {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
      color: #CEA0E3;
      &:hover {
        cursor: pointer;
      }
    }

    &__profile {
      margin-right: 10px;
    }

    &__hr {
      width : 100%;
      height: 13px;
      background: linear-gradient(90deg, white, #CEA0E3);
    }
  }
`;

const MainHeader = ({ history }) => {
  return (
    <>
      <MainHeaderWrap>
        <div className="header">
          <img className="header__menu" src={MenuIcon} alt="" />
          <div className="header__title" onClick={() => history.push("/")}>
            Diary App
          </div>
          <img className="header__profile" src={ProfileIcon} alt="" />
        </div>
        <div className="header__hr"></div>
      </MainHeaderWrap>
    </>
  );
};

export default withRouter(MainHeader);
