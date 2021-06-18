import react, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const SearchBarWrap = styled.div`
  .search {
    &__container {
      display: flex;
      width: 280px;
      background-color: rgba(0, 0, 0, 0);
      border: 4px solid #f9d0c8;
      border-radius: 30px;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 25%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38px;
      margin: 10px 10px 0px 10px;
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
      padding: 10px 10px 10px 20px;
      width: 200px;
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

  .history {
    &__outercontainer {
      position: absolute;
      z-index: 1;
    }
    &__innercontainer {
      width: 246px;
      background-color: rgba(200, 200, 200, 0.8);
      position: relative;
      left: 17px;
    }
    &__content {
      padding: 3px 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;

let SearchBar = ({ getData, setIsRepo, getRepo }) => {
  const [userName, setUserName] = useState("");
  const [userHistory, setUserHistory] = useState(
    JSON.parse(localStorage.getItem("userName") || "[]")
  );
  const [focused, setFocused] = useState(false);

  const changeHandeler = (event) => {
    setUserName(event.target.value);
  };
  const submitHandler = (event) => {
    setFocused(false);
    setIsRepo(false);
    event.preventDefault();
    getData(userName);
    getRepo(userName);
    if (!userHistory.includes(userName)) {
      if (userHistory.length < 4) {
        setUserHistory([...userHistory, userName]);
      } else {
        userHistory.shift();
        setUserHistory([...userHistory, userName]);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userHistory));
  }, [userHistory]);

  const XbtnHandler = (e) => {
    setFocused(false);
    setUserName("");
    getData("");
    getRepo("");
  };

  const historyHandler = (e) => {
    setFocused(false);
    setIsRepo(false);
    const thisHistory = e.target.innerText;
    setUserName(thisHistory);
    getData(thisHistory);
    getRepo(thisHistory);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      // Alert if clicked on outside of element
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setFocused(false);
        }
      };
      //Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <SearchBarWrap>
      <div className="search__container" ref={wrapperRef}>
        <form onSubmit={submitHandler}>
          <input
            className="search__input"
            type="text"
            value={userName}
            onChange={changeHandeler}
            placeholder="id를 입력하세요"
            onFocus={() => {
              setFocused(true);
            }}
          ></input>
          <div
            className="history__outercontainer"
            style={
              focused ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            <div className="history__innercontainer">
              {userHistory.map((history, index) => (
                <div
                  className="history__content"
                  key={index}
                  onClick={historyHandler}
                  value={history}
                >
                  {history}
                </div>
              ))}
            </div>
          </div>
        </form>
        <button className="search__Xbtn" onClick={XbtnHandler}>
          x
        </button>
      </div>
    </SearchBarWrap>
  );
};

export default SearchBar;
