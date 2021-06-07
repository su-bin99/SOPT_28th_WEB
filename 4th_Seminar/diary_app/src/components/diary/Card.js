import React from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import { createCardData } from "../../lib/api";

const CardWrap = Styled.div`
  max-width: 785px;
  /* width: 100%; */
  min-height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    width: 97%;
    /* max-width: 642px; */
    height: 219px;
    background-color: #EFEFEF;
    font-size: 18px;
    resize: none;
    font-family: Roboto;
    border: none;
    padding: 14px;
    margin-bottom: 10px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #C4C4C4;
    }
  }
`;

const Card = ({ data, match, history, rawData, year, month }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const [state, setState] = React.useState(data);
  const id = parseInt(match.params.id);

  const handleChange = (event) => {
    const name = event.target.name;
    if (event.target.value == "") {
      console.log("우에ㅔㅔ");
    }
    if (name == "tags") {
      const tagString = event.target.value;
      let tagArray = [];
      if (tagString.includes(",")) {
        //태그가 두개이상
        tagArray = tagString.split(",");
      } else if (event.target.value != "") {
        //태그가 한개
        tagArray.push(tagString);
      }
      //태그가 하나도 없을 경우 빈배열
      setState({
        ...state,
        [name]: tagArray,
      });
    } else {
      setState({
        ...state,
        [name]: event.target.value,
      });
    }
  };

  const handleEdit = async () => {
    const index = rawData[year][month].findIndex((data) => data.id === id);
    rawData[year][month][index] = state;
    const data = await createCardData(rawData);
    history.goBack();
  };

  const handleDelete = async () => {
    const filteredList = rawData[year][month].filter((data) => data.id !== id);
    rawData[year][month] = filteredList;
    const data = await createCardData(rawData);
    history.goBack();
  };

  return (
    <CardWrap>
      <CardHeader
        title={state.title}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <CardInfo
        data={state}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
      />
      <textarea
        placeholder="오늘을 기록해 주세요"
        readOnly={isReadOnly}
        value={state.text}
        name="text"
        onChange={handleChange}
      />
    </CardWrap>
  );
};

export default withRouter(Card);
