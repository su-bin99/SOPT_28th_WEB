import react, { useEffect, useState } from "react";
import styled from "styled-components";

const Form = styled.form``;
const Input = styled.input``;

const SearchBarWrap = styled.div`
  .search {
    display: flex;
    justify-content: center;
    margin: 15px;
    &__container {
      width: 280px;
      background-color: rgba(0, 0, 0, 0);
      border: 4px solid #f9d0c8;
      border-radius: 30px;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 25%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38px;
      margin: 10px 10px 20px 10px;
    }
    &__input {
      background-color: rgba(0, 0, 0, 0);
      color: #f9d0c8;
      outline-style: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-size: 1.05em;
      border: 0px;
      padding: 10px;
      /* text-shadow: 0px 10px 15px rgba(0, 0, 0, 25%); */
      &::placeholder {
        color: #f9d0c8;
        text-shadow: 0px 10px 15px rgba(0, 0, 0, 25%);
      }
    }
    &__Xbtn {
      margin: 0 10px 0 0;
      font-size: 1.5rem;
      color: #f9d0c8;
      background: rgba(0, 0, 0, 0);
      border: 0px;
    }
  }
`;

let SearchBar = ({ getData }) => {
  const [userName, setUserName] = useState("");
  const changeHandeler = (event) => {
    setUserName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    getData(userName);
  };

  const XbtnHandler = (e) => {
    setUserName("");
    console.log(e);
    getData("");
  };
  useEffect(() => {
    console.log(userName);
  });
  return (
    <SearchBarWrap>
      <div className="search__container">
        <form className="search" onSubmit={submitHandler}>
          <input
            className="search__input"
            type="text"
            value={userName}
            onChange={changeHandeler}
            placeholder="id를 입력하세요"
          ></input>
        </form>
        <button className="search__Xbtn" onClick={XbtnHandler}>
          x
        </button>
      </div>
    </SearchBarWrap>
  );
};

export default SearchBar;
