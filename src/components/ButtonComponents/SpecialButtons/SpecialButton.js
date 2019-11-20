import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick={ ()=> props.addSpecial(props.textContent) } className="special"> { props.textContent } </button>}
    </>
  );
};

export default SpecialButton
