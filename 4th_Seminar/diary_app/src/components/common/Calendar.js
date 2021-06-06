import React from "react";
import LeftOff from "../../assets/Left_off.svg";
import LeftOn from "../../assets/Left_On.svg";
import RightOff from "../../assets/Right_off.svg";
import RightOn from "../../assets/Right_On.svg";
import Styled from "styled-components";
import { withRouter } from "react-router";

const CalendarWrap = Styled.div`
  .calendar {
    width: 100%;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &__year {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 61px;

      &--left:hover, &--right:hover {
        cursor: pointer;
      }

      &--number {
        font-size: 36px;
        font-weight: bold;
        margin: 0 25px;
        line-height: 1;
      }
    }

    &__month {
      height: 57px;
      display: flex;
      /* flex-direction: row; */
      justify-content: space-between;
      align-items: center;
      width: 100%;
      overflow-x:scroll;
      flex-wrap : nowrap;

      &--button {
        font-size: 18px;
        width: 60px;
        white-space : nowrap;
        margin: 0 10px;
        &:hover {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;

const Calendar = ({
  currYear,
  setCurrYear,
  currMonth,
  setCurrMonth,
  history,
}) => {
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const leftButton = React.useRef();
  const rightButton = React.useRef();

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__year">
          <img
            className="calendar__year--left"
            src={LeftOff}
            alt=""
            onClick={() => setCurrYear(currYear - 1)}
            onMouseEnter={() => (leftButton.current.src = LeftOn)}
            onMouseLeave={() => (leftButton.current.src = LeftOff)}
            ref={leftButton}
          />
          <div className="calendar__year--title">{currYear}년</div>
          <img
            className="calendar__year--right"
            src={RightOff}
            alt=""
            onClick={() => setCurrYear(currYear + 1)}
            onMouseEnter={() => (rightButton.current.src = RightOn)}
            onMouseLeave={() => (rightButton.current.src = RightOff)}
            ref={rightButton}
          />
        </div>

        <div className="calendar__month">
          {monthList.map((month) => {
            return (
              <div
                key={month}
                className="calendar__month--button"
                onClick={() => {
                  setCurrMonth(month);
                  history.push(`/`);
                }}
                style={
                  month === currMonth
                    ? { fontSize: "22px", fontWeight: "bold" }
                    : {}
                }
              >
                {month + 1}월
              </div>
            );
          })}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default withRouter(Calendar);
