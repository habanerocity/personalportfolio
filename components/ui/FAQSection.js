import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../../components/animations/AnimatedHeading';
import FAQAccordion from './FAQAccordion';
import classes from './FAQSection.module.scss';

const FAQSection = ({ heading, faqs }) => {
  return (
    <div className={`h-auto ${classes.bg_gray}`}>
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 d-flex justify-content-between align-items-start ${classes.flex__container}`}>
          <Row>
            <Col className="w-100 overflow-hidden ">
              <AnimatedHeading
                text={heading}
                className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
              />
            </Col>
          </Row>
          <Row className='d-flex justify-content-center align-items-center w-100 mt-5' >
            <FAQAccordion faqs={faqs}/>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;