import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { search, planets } from './actions';

const Listplanet = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

const App = ({mydata}) => {
  const componentPlanets = mydata.map((item, index) => {
    return (
      <li key={index}>
        <Listplanet name={item.name} />
      </li>
    );
  })
  return (
    <div id='main_container'>
      <button onClick={() => planets()}>Buscar</button>
      <div>{mydata.length != 0 ? <ul>{componentPlanets}</ul>:<br />}</div>
    </div>
  )
}

const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(App);
