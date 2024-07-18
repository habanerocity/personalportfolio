import React, { useState } from "react";
import classes from "./_SuccessWindow.module.scss";

import Image from "next/legacy/image";

const SuccessWindow = props => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
    props.onConfirm(clicked);
  };

  return (
    <div className={classes.backdrop} onConfirm={clickHandler}>
      <div className={classes.success}>
        <div onClick={clickHandler} className={classes.closeBtn__container}>
          <Image
            src={"/static/times-solid1.svg"}
            className={classes.close}
            alt="close"
            layout="fill"
          />
        </div>
        <div className={classes.flex__container}>
          <p className={classes.msg}>{props.message}</p>
          <button className={classes.btn} onClick={clickHandler}>
            Got It!
            <span />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessWindow;
