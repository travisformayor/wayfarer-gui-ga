import React from 'react';
import './Modals.css'

const Error = (props) => { // functional component
  return (
    <div className="alert error">
      <div className="container">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Error;