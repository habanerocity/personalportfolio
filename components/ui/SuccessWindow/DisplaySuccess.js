import React from "react";
import ReactDOM from "react-dom";
import SuccessWindow from "./SuccessWindow";

const DisplaySuccess = props => {
  const handleClick = closed => {
    props.onConfirm(closed);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SuccessWindow
          message="Thanks for your submission! I will get back to you promptly!"
          onConfirm={handleClick}
        />,
        document.getElementById("success-root")
      )}
    </React.Fragment>
  );
};

export default DisplaySuccess;
