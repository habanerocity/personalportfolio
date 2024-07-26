import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import SuccessWindow from "./SuccessWindow";

const DisplaySuccess = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SuccessWindow
          message="Thanks for your submission! I will get back to you promptly!"
          onConfirm={props.onConfirm}
        />,
        document.getElementById("success-root")
      )}
    </React.Fragment>
  );
};

DisplaySuccess.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default DisplaySuccess;