import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../components/animations/AnimatedHeading';
import Slider from '../components/ui/ReviewSlider/Slider';
import classes from './TestimonialsSection.module.scss';

const TestimonialsSection = ({ heading, sectionId = 'testimonials-section' }) => {
  const headingId = `${sectionId}-heading`;
  const contentId = `${sectionId}-content`;

  return (
    <section 
      className={`h-auto ${classes.wrapper}`}
      aria-labelledby={headingId}
      role="region"
      id={sectionId}
      // Remove: itemScope and itemType (conflicts with Slider schema)
    >
      <div className={classes.visually_hidden}>
        <p>Client testimonials showcasing web development service quality and customer satisfaction</p>
      </div>
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
          <header className="w-100">
            <Row>
              <Col className="w-100 overflow-hidden">
                <AnimatedHeading
                  text={heading}
                  className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
                  id={headingId}
                  // Remove: itemProp="name"
                />
              </Col>
            </Row>
          </header>
          <main 
            className='testimonials-content w-100'
            id={contentId}
            aria-labelledby={headingId}
          >
            <div 
              className='d-flex justify-content-center align-items-center'
              role="region"
              aria-label="Customer testimonials showcase"
            >
              <Slider />
            </div>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;