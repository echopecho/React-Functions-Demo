import React from "react";

// The purpose of this component is to increment and decrement the value of the state of the parent component.

function Controls(props) {
  return (
    <div>
      <button className="btn-control">-</button>
      <button className="btn-control">+</button>
    </div>
  );
}

export default Controls;
