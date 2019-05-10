import React from 'react';
import './smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="smurfs">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
      
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

 