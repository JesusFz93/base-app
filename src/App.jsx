import React from "react";
import AppRouter from "./routers/AppRouter";
import UIState from "./context/UIState";

const App = () => {
  return (
    <UIState>
      <AppRouter />
    </UIState>
  );
};

export default App;
