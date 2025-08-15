import Image from "next/image";
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import classes from './ServiceHero.module.scss';

const ServiceHero = ({
  stats,
  heroImage,
  title,
  description,
  iconSrc,
  ctaText,
  additionalContent,
  iconBoxBgClass = "",
  statValueFontSize = null,
}) => {

  // Create a style object from the statValueFontSize prop
  const getStatValueStyle = () => {
    if (!statValueFontSize) return {};
    if (typeof statValueFontSize === 'object') return statValueFontSize;
    // If it's a string, assume it's a fontSize value
    return { fontSize: statValueFontSize };
  };

  return (
    <Container className={`d-flex flex-column-reverse flex-lg-row position-relative ${classes.flex__container} justify-content-between align-items-center ${classes.flex__container__col}`}>
        <div className={`${classes.hero__col_1} d-lg-flex d-none position-relative flex-column justify-content-between`} >
          <div className={classes.hero__img_container} >
            <Image
            priority
            src={heroImage}
            fill={true} 
            style={{ objectFit: 'cover' }}  
            className={`position-relative ${classes.hero__img}`}
            alt='Small Business Owner Winning'
            />
          </div>
            <div className={`d-flex justify-content-between align-items-center ${classes.hero__stats_container}`} >
                {stats.map((stat, index) => (
                <div key={index} className={`justify-content-center ${classes[`hero__stats_${index + 1}`]}`}>
                    <div className='justify-content-center h-100 d-flex flex-column p-4 fw-bold align-items-start'>
                    {stat.label} <br />
                    <span className='fw-bold' style={statValueFontSize}>{stat.value}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
      <div className={`${classes.hero__col_2} d-flex position-relative flex-column align-items-lg-start align-items-center justify-content-center`}>
        <h1 className={`display-3 text-center text-lg-start fw-bold ${classes.hero__heading}`}>
          {title}
        </h1>
        <p className={`fs-2 text-center text-lg-start ${classes.hero__heading}`}>
          {description}
        </p>
        <div className='w-sm-100 d-flex align-items-center justify-content-between'>
          <div className={`d-sm-flex position-relative d-none justify-content-center align-items-center ${classes.hero__icon_box} ${iconBoxBgClass}`}>
            <Image
              src={iconSrc}
              fill={true}
              alt='Service Icon'
              className='p-4'
            />
          </div>
          <div className={`${classes.cta__wrapper} d-flex flex-column ms-sm-4 ${classes.hero__heading}`}>
            {additionalContent && (
              <div className={`fw-bold fs-4 d-none d-sm-flex flex-column justify-content-start`}>
                {additionalContent}
              </div>
            )}
            <Link className={`fw-bolder mt-2 fs-3 ${classes.hero__cta}`} href='/Contact'>
              {ctaText} <span><Image className={classes.hero__cta_arrow} src='/static/circle-arrow-right.svg' width='20' height='20' alt='Right arrow' /></span>
            </Link>
          </div>
        </div>
        <div className='mt-5 d-flex flex-column align-items-center w-100 justify-content-center'>
          <div className={`fs-2 mb-4 ${classes.hero__heading}`}>
            Scroll Down
          </div>
          <svg className={classes.bounce} width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 40 L50 70 L80 40" />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default ServiceHero;