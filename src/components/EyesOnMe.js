// Code EyesOnMe Component Here
import React from 'react';

const EyesOnMe = () => {
  function blurHandler(event) {
    console.log("Hey! Eyes on me!")
  }
  
  function focusHandler(event) {
    console.log("Good!")
  }
    
  return <div>
      <button onBlur={blurHandler} onFocus={focusHandler}>Eyes on me</button>
  </div>;
};

export default EyesOnMe;
