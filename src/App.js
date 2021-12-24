import React from "react";
import "./App.css";
import AppCenteringWrapper from "./components/AppCenteringWrapper";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [averageTemp, setAverageTemp] = React.useState(undefined);
  
  return (
    <AppCenteringWrapper averageTemp={averageTemp}>
      <Forecast setAverageTemp={setAverageTemp} />
    </AppCenteringWrapper>
  );
}

export default App;
