import React, { Component, useState } from "react";
import "../styles/App.css";
import SubmitButton from "./SubmitButton.js";
import SubHeading from "./SubHeading.js";
import InputQuery from "./InputQuery.js";
import Heading from "./Heading.js";

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  );
};
export default App;
