import React from 'react';
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../../animations/AnimatedHeading';
import ButtonPair from '../ButtonPair';
import classes from './LandingPageSequenceOne.module.scss'; // Create this file

const LandingPageSequenceOne = ({ heading, paragraph, benefits, image, imageAlt }) => {
  return (
    <div className={`h-auto ${classes.wrapper}`}>
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
          <Row>
            <Col className="w-100 overflow-hidden ">
              <AnimatedHeading
                text={heading}
                className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
              />
            </Col>
          </Row>
          <Row className='flex-column-reverse flex-sm-column-reverse flex-lg-row' >
            <Col className={`d-flex flex-column flex-wrap justify-content-between align-items-start w-100 mt-5`}>
              <p className='fs-3 fw-normal' >
                {paragraph}
              </p>
              <div className='d-flex flex-column align-items-start mt-3' >
                <div className='d-flex flex-column align-items-start mt-2'>
                  {benefits.map((benefit, index) => (
                    <div className='d-flex' key={index}>
                      <div >
                        <Image
                          src='/static/check.webp'
                          width='20'
                          height='20'
                          alt='checkmark'
                        />
                      </div>
                      <div className='ms-3 d-flex flex-column' >
                        <div className={`${classes.benefit__heading} fs-2 fw-bold`} >
                          {benefit.title}
                        </div>
                        <p className={`${classes.benefit__text_content} mb-0 fs-3 fw-normal`}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  <ButtonPair 
                  primaryCtaButtonText="Contact" 
                  secondaryCtaButtonText="View Portfolio" 
                  />
                </div>
              </div>
            </Col>
            <Col className='d-flex justify-content-sm-center w-100 justify-content-end align-items-center'>
              <Image
                className={`mt-5 ${classes.section__image}`}
                src={image}
                width='500'
                height='350'
                alt={imageAlt}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LandingPageSequenceOne;