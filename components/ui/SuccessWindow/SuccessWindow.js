import React, { useState } from "react";
import classes from "./_SuccessWindow.module.scss";

import Image from "next/legacy/image";

const SuccessWindow = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
    props.onConfirm(clicked);
  };

  return (
    <div className={`w-100 h-100 position-fixed ${classes.backdrop}`} onConfirm={clickHandler}>
      <div className={`text-black ${classes.success}`}>
        <div onClick={clickHandler} className={`justify-content-start text-black ${classes.closeBtn__container}`}>
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

export default SuccessWindow;
