import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick={() =>props.addOperator(props.textContent)} className="operator"> {props.textContent} </button>}}
    </>
  );
};

export default OperatorButton