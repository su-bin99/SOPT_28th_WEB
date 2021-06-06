import React from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";

const CardHeaderWrap = Styled.div`

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 97%;
  /* width: 642px; */
  height: 83px;
  border-bottom: 2px solid #CEA0E3;
  margin: 0 auto;
  padding-bottom: 10px;
  .header {
    &__title {
      max-width : 300px;
      margin: 0;
      font-size: 28px;
      font-weight: bold;
      border: none;
      background: none;
      &::placeholder {
        color: #C4C4C4;
      }
      &:focus {
        outline: none;
      }
    }
    &__btnContainer{
      display: flex;
      width : 94px;
    }
    &__edit {
      color: #CEA0E3;
      white-space: nowrap;
    }
    &__delete{
      white-space: nowrap;
    }
  }
  button {
    border: none;
    background: none;
    font-size: 18px;
    font-weight: bold;
    padding: 0;
    width: 40px;
    text-align: center;
    margin-right: 7px;
  }
  button:hover {
    cursor: pointer;
  }
`;

const CardHeader = ({
  title,
  isReadOnly,
  handleChange,
  handleEdit,
  handleDelete,
  match,
  history,
}) => {
  const id = match.params.id;
  return (
    <CardHeaderWrap>
      <input
        type="text"
        name="title"
        className="header__title"
        placeholder="제목을 입력해 주세요"
        value={title}
        readOnly={isReadOnly}
        onChange={handleChange}
      />
      <div className="header__btnContainer">
        {isReadOnly ? (
          <button
            className="header__edit"
            onClick={() => history.push(`/diary/edit/${id}`)}
          >
            수정
          </button>
        ) : (
          <button className="header__edit" onClick={handleEdit}>
            완료
          </button>
        )}
        {isReadOnly ? (
          <button className="header__delete" onClick={handleDelete}>
            삭제
          </button>
        ) : (
          ""
        )}
      </div>
    </CardHeaderWrap>
  );
};

export default withRouter(CardHeader);
