import React from 'react';
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../../animations/AnimatedHeading';
import ButtonPair from '../ButtonPair';
import classes from './LandingPageSequenceTwo.module.scss';

const LandingPageSequenceTwo = ({ heading, paragraphs, image, imageAlt, imageHeight = 350 }) => {

  return (
    <div className={`h-auto ${classes.bg_gray}`}>
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
          <Row className='flex-column flex-sm-column flex-lg-row'>
            <Col className={`d-flex w-100 justify-content-start align-items-center`}>
              <Image
                className={`mt-5 ${classes.section__image}`}
                src={image}
                width={500}
                height={imageHeight}
                alt={imageAlt}
              />
            </Col>
            <Col className='mt-5'>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className='fs-3 fw-normal'>
                  {paragraph}
                </p>
              ))}
              <ButtonPair primaryCtaButtonText="Get Started" secondaryCtaButtonText="View Projects" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LandingPageSequenceTwo;