import React from 'react';
import './Modals.css'

const Error = (props) => { // functional component
  return (
    <div class="alert error">
      <div class="container">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Error;