import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../components/animations/AnimatedHeading';
import Slider from '../components/ui/ReviewSlider/Slider';
import classes from './TestimonialsSection.module.scss';

const TestimonialsSection = ({ heading }) => {
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
          <div className='d-flex justify-content-center align-items-center' >
            <Slider />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialsSection;