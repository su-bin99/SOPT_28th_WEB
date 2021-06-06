import react, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getCardData } from "../lib/api";
import Card from "../components/diary/Card";

const Diary = ({ year, month, match }) => {
  const id = match.params.id;
  const [diaryData, setDiaryData] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      data[year] &&
        setDiaryData(data[year][month].find((el) => el.id === parseInt(id)));
      setRawData(data);
    })();
  }, [id]);

  return (
    diaryData && (
      <Card data={diaryData} rawData={rawData} year={year} month={month} />
    )
  );
};

export default withRouter(Diary);
