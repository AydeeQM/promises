import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { planets } from './actions';
import "./App.css"

const Listplanet = ({ name, img }) => {
  return (
    <div>
      <img src={img} />
      <h3>{name}</h3>
    </div>
  );
}

const App = ({mydata}) => {
  const componentPlanets = mydata.map((item, index) => {
    return (
      <div key={index}>
        <Listplanet img={item.img} name={item.name} />
      </div>
    );
  })
  return (
    <div className="container">
      <button onClick={() => planets()}>Buscar</button>
      <div>
        <div>{componentPlanets}</div>
      </div>
    </div>
  )
}

const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(App);
