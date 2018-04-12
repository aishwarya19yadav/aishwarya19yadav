import React, { Component } from 'react';
import './Display.css';


const Display = (props) => {
  return(
    <div className="jumbotron1">
    <h3>Student Information</h3>
    <br />
    <center>
    <ul>
      <li>{props.array[0]}</li>
      <li>{props.array[1]}</li>
      <li>{props.array[2]}</li>
      <li>{props.array[3]}</li>
      <li>{props.array[4]}</li>
      <li>{props.array[5]}</li>
      <li>{props.array[6]}</li>
    </ul>
    </center>
    </div>
  );
}

export default Display;

//<p>{props.array}</p>
