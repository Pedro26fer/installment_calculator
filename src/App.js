import "./App.css";
import { Form } from "./components/Form";
import { InstallmentInformation } from "./components/InstallmentInformation";
import { CenteredModal } from "./style/style1";
import { Notice } from "./components/Notices";
import { useState } from "react";

function App() {
  const [dayOne, setOneDay] = useState("00");
  const [dayTwo, setDayTwo] = useState("00");
  const [dayThree, setDayThree] = useState("00");
  const [dayFour, setDayFour] = useState("00");

  return (
    <div className="App">
      <header className="App-header">
        <CenteredModal>
          <Form
            setDayOne={setOneDay}
            setDayTwo={setDayTwo}
            setDayThree={setDayThree}
            setDayFour={setDayFour}
          />

          <InstallmentInformation>
            <Notice
              dayOne={dayOne}
              dayTwo={dayTwo}
              dayThree={dayThree}
              dayFour={dayFour}
            />
          </InstallmentInformation>
        </CenteredModal>
      </header>
    </div>
  );
}

export default App;
