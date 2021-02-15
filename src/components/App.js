import React, { Component, useState } from "react";
import '../styles/App.css';
import './SubmitButton.js';
import './SubHeading.js';
import './InputQuery.js';
import './Heading.js';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}
export default App;


