import React from 'react';
import Link from 'next/link';
import classes from './ButtonPair.module.scss';

const ButtonPair = ({ 
  primaryCtaButtonText = "Get In Touch", 
  primaryCtaButtonLink = "/contact", 
  secondaryCtaButtonText = "View Work Samples", 
  secondaryCtaButtonLink = "/projects", 
  flexCol = false, 
  centeredOnMobile = true,
  fullWidth = false, 
  aboutPage = false,
  buttonPadding='' }) => {

  return (
    <div className={`${classes.btn__container} ${!centeredOnMobile ? 'justify-content-start' : ''} ${aboutPage ? classes.about_page_btn_container : ''} ${flexCol ? 'flex-column' : 'flex-row'}`}>
      <Link className={`${fullWidth ? 'w-100' : ''} ${classes.link}`} passHref href={primaryCtaButtonLink}>
        <button className={`${classes.hero__btn_solid} ${buttonPadding} text-white ${classes.hero__btn} fs-3 mt-4 me-4 ${fullWidth ? 'w-100' : ''}`}>
          {primaryCtaButtonText}
        </button>
      </Link>
      <Link className={`${fullWidth ? 'w-100' : ''} ${classes.link}`} passHref href={secondaryCtaButtonLink}>
        <button className={`${classes.hero__btn_transparent} ${buttonPadding} ${classes.hero__btn} fs-3 mt-4 ${fullWidth ? 'w-100' : ''}`}>
          {secondaryCtaButtonText}
        </button>
      </Link>
    </div>
  );
};

export default ButtonPair;