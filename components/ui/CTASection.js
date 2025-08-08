import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './CTASection.module.scss';

import Footer from './Footer';

const CTASection = ({ buttonText = "Get Started Now", contactHref = "/Contact", paragraphText }) => {
  return (
    <div className={`h-auto ${classes.wrapper}`}>
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 d-flex justify-content-between align-items-start ${classes.flex__container}`}>
          <Row>
            <p className="mb-5 display-5 text-start">
                {paragraphText}
            </p>
            <div className='d-flex justify-content-center align-items-center'>
              <Link className={classes.link} passHref href={contactHref}>
                <button className={`${classes.services__section_pricing_card_btn} display-6 p-4`}>{buttonText}</button>
              </Link>
            </div>
          </Row>
        </div>
      </Container>
      <Footer className='bg-white' />
    </div>
  );
};

export default CTASection;