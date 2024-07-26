import React from "react";
import classes from "./_SuccessWindow.module.scss";
import PropTypes from "prop-types";
import Image from "next/legacy/image";

const SuccessWindow = (props) => {
  /*
  This function is called when the user clicks the 'close' or the 'got it' button. 
  A false boolean is sent as props.onConfirm(clicked) to DisplaySuccess.js
  */
  const clickHandler = () => {
    props.onConfirm(false);
  };

  return (
    <div className={`w-100 h-100 position-fixed ${classes.backdrop}`}>
      <div className={`text-black ${classes.success}`}>
        <div 
        onClick={clickHandler} 
        className={`justify-content-start text-black ${classes.closeBtn__container}`}
        role="button"
        aria-label="Close"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }}
        >
          <Image
            src={"/static/times-solid1.svg"}
            className={classes.close}
            alt="close"
            layout="fill"
          />
        </div>
        <div className={`justify-content-center text-center fw-bold w-100 ${classes.flex__container}`}>
          <p className={classes.msg}>{props.message}</p>
          <button className={`border-0 d-block position-relative ${classes.btn}`} onClick={clickHandler}>
            Got It!
            <span />
          </button>
        </div>
      </div>
    </div>
  );
};

SuccessWindow.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default SuccessWindow;