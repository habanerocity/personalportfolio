import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../../animations/AnimatedHeading';
import ButtonPair from '../ButtonPair';
import classes from './LandingPageSequenceTwo.module.scss';

const LandingPageSequenceTwo = ({ heading, paragraphs, image, imageAlt, imageHeight = 350 }) => {

  // Generate a unique ID for aria-describedby relationship
  const contentId = `content-${heading?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <section 
      className={`h-auto ${classes.bg_gray}`}
      aria-labelledby={`heading-${contentId}`}
      itemScope 
      itemType="https://schema.org/AboutSection"
    >
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
          {/* Header Section */}
          <header className="w-100">
            <Row>
              <Col className="w-100 overflow-hidden ">
                <AnimatedHeading
                  text={heading}
                  className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
                  id={`heading-${contentId}`}
                  itemProp="name"
                />
              </Col>
            </Row>
          </header>
          <main className="w-100">
            <Row className='flex-column flex-sm-column flex-lg-row'>
              <Col 
                className="d-flex w-100 justify-content-start align-items-center"
                role="img" 
                aria-labelledby={`image-caption-${contentId}`}
              >
                <figure className="position-relative w-100">
                  <Image
                    className={`mt-5 ${classes.section__image}`}
                    src={image}
                    width={500}
                    height={imageHeight}
                    alt={imageAlt}
                    itemProp="image"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 500px"
                  />
                  <figcaption 
                    id={`image-caption-${contentId}`} 
                    className={classes.visually_hidden}
                  >
                    {imageAlt}
                  </figcaption>
                </figure>
              </Col>
              <Col 
                className='mt-5'
                role="main"
                aria-describedby={`heading-${contentId}`}
              >
                <article itemProp="description">
                  {paragraphs.map((paragraph, index) => (
                      <p key={index} className='fs-3 fw-normal' itemProp={index === 0 ? "description" : undefined}>
                        {paragraph}
                      </p>
                    ))}
                </article>
                <nav 
                  aria-label="Primary call-to-action buttons"
                  role="navigation"
                >
                  <ButtonPair primaryCtaButtonText="Get Started" secondaryCtaButtonText="View Projects" />
                </nav>
              </Col>
            </Row>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default LandingPageSequenceTwo;