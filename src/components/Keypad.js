// Code Keypad Component Here
import React from 'react';

const Keypad = () => {
    function passwordHandler(event) {
        console.log("Entering password...")
    }

  return <div>
      <input type="password" name="search" placeholder="Enter your password..." onChange={passwordHandler}/>
  </div>;
};

export default Keypad;
