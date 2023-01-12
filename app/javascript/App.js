import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Greeting from "./components/greeting";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;