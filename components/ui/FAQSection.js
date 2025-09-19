import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../../components/animations/AnimatedHeading';
import FAQAccordion from './FAQAccordion';
import classes from './FAQSection.module.scss';

const FAQSection = ({ heading, faqs, sectionId = 'faq-section' }) => {

  // Generate unique IDs for accessibility
  const headingId = `${sectionId}-heading`;
  const contentId = `${sectionId}-content`;

  return (
    <section 
      className={`h-auto ${classes.bg_gray}`}
      aria-labelledby={headingId}
      role="region"
      aria-label="Web Development FAQ Section"
    >
      <div className={classes.visually_hidden}>
        <p>Frequently asked questions about Web development services by Lindy Ramirez in Los Angeles, CA</p>
      </div>
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 d-flex justify-content-between align-items-start ${classes.flex__container}`}>
          <header className="w-100 overflow-hidden">
            <Row>
              <Col className="w-100 overflow-hidden ">
                <AnimatedHeading
                  text={heading}
                  className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
                  id={headingId}
                />
              </Col>
            </Row>
          </header>
          <main 
            className="faq-content w-100"
            id={contentId}
            aria-labelledby={headingId}
          >
            <Row className='d-flex justify-content-center align-items-center w-100 mt-5' >
                <FAQAccordion 
                  faqs={faqs}
                  aria-describedby={headingId}
                  role="group"
                  aria-label="Frequently asked questions about my web development services"
                />
            </Row>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;