import Main from './pages/Main'
import Diary from './pages/Diary'
import MainHeader from './components/common/MainHeader'
import Calendar from './components/common/Calendar'
import Title from './components/common/Title'
import Footer from './components/common/Footer'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react'


const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth }
}

function App() {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar
          currYear={year}
          setCurrYear={setYear}
          currMonth={month}
          setCurrMonth={setMonth} />
        <Title />
        <Switch>
          <Route exact path="/" component={()=> {return <Main year={year} month={month} />}}/>
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
