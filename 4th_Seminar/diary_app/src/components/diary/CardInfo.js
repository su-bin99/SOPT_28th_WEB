import React, { useState, useRef, useEffect } from "react";
import Styled from "styled-components";
import EmptyImage from "../../assets/Profile.svg";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Select from "../../assets/Select.svg";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  select: {
    width: "250px",
    "& .MuiSvgIcon-root": {
      display: "none",
    },
  },
});

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 5,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid #CEA0E3",
    fontSize: 18,
    padding: "5px 7px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    background: `url(${Select}) no-repeat 95% 50%`,
    "&:focus": {
      borderRadius: 5,
      borderColor: "#CEA0E3",
      backgroundColor: "white",
      boxShadow: "0 0 0 0.2rem rgba(206,160,227,.25)",
    },
  },
}))(InputBase);

const useStyles2 = makeStyles((theme) => ({
  root: {
    width: "250px",
    padding: 0,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

const CardInfoWrap = Styled.div`
  
  display: flex;
  width: 97%;
  /* width: 642px; */
  margin: 19px auto;
  font-size: 18px;
  .info {
    &__photo {
      width: 210px;
      height: 210px;
      background-color: #C4C4C4;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__data-wrap {
      margin-left: 50px;
    }
    &__date {
      margin: 15px auto 25px auto;
    }
    &__tags {
      display: flex;
      margin: 21px 0 24px 0;
      &--tag {
        font-size: 14px;
        color: white;
        background-color: #CEA0E3;
        padding: 4px 11px;
        margin-right: 7px;
        border-radius: 5px;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &__summary {
      width: 250px;
      height: 30px;
      box-sizing: border-box;
      border: none;
      padding: 2px;
      font-size: 18px;
    }
  }
  span {
    display: inline-block;
    font-weight: bold;
    width: 82px;
    padding-right: 18px;
  }
  input {
    border: none;
    font-size: 18px;
    padding: 0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #C4C4C4;
    }
  }
  @media screen and (max-width: 800px) {   
    display : flex;
    flex-direction: column;
    align-items:center;
    width : 97%;
    .info{
      &__photo{
        width: 97%;        
      }
      &__data-wrap{
        margin : 0;
      }
    }
  }
`;

const getDateFormat = (date) => {
  const year = parseInt(date / 10000);
  const month = parseInt((date % 10000) / 100);
  const day = date % 100;
  return `${year}년 ${month}월 ${day}일`;
};

const CardInfo = ({ data, isReadOnly, handleChange }) => {
  const { image, date, weather, tags, summary } = data;
  const classes = useStyles();
  const classes2 = useStyles2();

  const [myImage, setMyImage] = useState(null);
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  useEffect(() => {
    setMyImage(previewURL);
  }, [previewURL]);

  useEffect(() => {
    image ? setMyImage(image) : setMyImage(null);
  }, []);

  const handleFileOnChange = (event) => {
    //파일 불러오기
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = (e) => {
      setFile(file);
      setPreviewURL(reader.result);
      e.target.name = "image";
      e.target.value = reader.result;
      handleChange(e);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleFileButtonClick = (e) => {
    //버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };

  const onTagsChange = (e, values) => {
    e.target.name = "tags";

    console.log(values);
    e.target.value = values;
    console.log(e.target.value);
    // console.log(typeof e.target.value);
    handleChange(e);
  };

  return (
    <CardInfoWrap>
      {isReadOnly ? (
        <div className="info__photo">
          <img
            src={image ? image : EmptyImage}
            width={image && "210px"}
            height={image && "210px"}
            alt=""
          />
        </div>
      ) : (
        <>
          <input
            ref={fileRef}
            hidden={true}
            id="file"
            type="file"
            name="image"
            onChange={handleFileOnChange}
          />
          <div>
            <button
              onClick={handleFileButtonClick}
              style={{
                background: "rgba(0,0,0,0)",
                border: "0px",
              }}
            >
              <div className="info__photo">
                <img
                  src={myImage ? myImage : EmptyImage}
                  width={myImage && "210px"}
                  height={myImage && "210px"}
                  alt=""
                  onChange={handleChange}
                />
              </div>
            </button>
          </div>
        </>
      )}
      <div className="info__data-wrap">
        <p className="info__date">
          <span>날짜</span>
          {getDateFormat(date)}
        </p>
        <span>날씨</span>
        {isReadOnly ? (
          <input
            type="text"
            readOnly={isReadOnly}
            value={weather}
            placeholder="날씨를 선택해주세요"
          />
        ) : (
          <FormControl>
            <NativeSelect
              className={classes.select}
              value={weather}
              name="weather"
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value="" disabled>
                날씨를 선택해주세요
              </option>
              <option value={"맑음"}>맑음</option>
              <option value={"구름"}>구름</option>
              <option value={"흐림"}>흐림</option>
              <option value={"비"}>비</option>
              <option value={"눈"}>눈</option>
              <option value={"바람"}>바람</option>
            </NativeSelect>
          </FormControl>
        )}
        <div className="info__tags">
          <span>태그</span>
          {isReadOnly ? (
            tags.length > 0 ? (
              tags.map((tag, index) => {
                return (
                  <div key={index} className="info__tags--tag">
                    {tag}
                  </div>
                );
              })
            ) : (
              <input
                type="text"
                readOnly={true}
                value=""
                placeholder="태그를 선택해주세요"
              />
            )
          ) : (
            <Autocomplete
              className={classes2.root}
              multiple
              id="tags-filled"
              options={Feels.map((option) => option.feel)}
              defaultValue={tags}
              onChange={onTagsChange}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="filled" />
              )}
            />
          )}
        </div>
        <span>한 줄 요약</span>
        <input
          className="info__summary"
          type="text"
          name="summary"
          placeholder="입력해 주세요"
          value={summary}
          onChange={handleChange}
          readOnly={isReadOnly}
          style={{ backgroundColor: isReadOnly ? "white" : "#EFEFEF" }}
        />
      </div>
    </CardInfoWrap>
  );
};

const Feels = [];

export default CardInfo;
