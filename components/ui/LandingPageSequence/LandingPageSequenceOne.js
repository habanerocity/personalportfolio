import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../../animations/AnimatedHeading';
import ButtonPair from '../ButtonPair';
import { getOptimizedImageSrc, getResponsiveSizes } from '../ResponsiveImage';
import classes from './LandingPageSequenceOne.module.scss';

const LandingPageSequenceOne = ({ heading, paragraph, benefits, image, imageAlt }) => {
  return (
    <section
      className={`h-auto ${classes.wrapper}`} 
      aria-labelledby="main-heading"
    >
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
          <Row>
            <Col className="w-100 overflow-hidden" role="banner">
              <AnimatedHeading
                text={heading}
                className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
                id="main-heading"
              />
            </Col>
          </Row>
          <Row className='flex-column-reverse flex-sm-column-reverse flex-lg-row' >
            <Col 
            className={`d-flex flex-column flex-wrap justify-content-between align-items-start w-100 mt-5`}
            role="main"
            aria-describedby="main-description"
            >
              <p className='fs-3 fw-normal' role="doc-subtitle" id="main-description">
                {paragraph}
              </p>
              <section className='d-flex flex-column align-items-start mt-3' >
                <h3 id="benefits-heading" className={classes.visually_hidden}>
                  Key Benefits
                </h3>
                <ul className='d-flex flex-column align-items-start px-0 mt-2'>
                  {benefits.map((benefit, index) => (
                    <li className='d-flex' key={index} role="listitem">
                      <div role="img" aria-label="Checkmark icon">
                        <Image
                          src={getOptimizedImageSrc('/static/check.webp')}
                          width='20'
                          height='20'
                          alt=''
                          sizes="20px"
                          quality={95}
                        />
                      </div>
                      <div className='ms-3 d-flex flex-column' >
                        <h3 className={`${classes.benefit__heading} fs-3 mb-1 fw-normal`} >
                          {benefit.title}
                        </h3>
                        <p className={`${classes.benefit__text_content} mb-3 fs-3 fw-normal`}>
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  ))}
                  </ul>
                  <nav 
                    aria-label="Primary actions"
                    role="navigation"
                    className='w-100'
                  >
                    <ButtonPair
                      primaryCtaButtonText="Contact"
                      secondaryCtaButtonText="View Portfolio"
                      aria-label="Contact me or view my portfolio"
                    />
                  </nav>
              </section>
            </Col>
            <Col 
              className='d-flex justify-content-sm-center w-100 justify-content-end align-items-center'
              role="img"
              aria-labelledby="hero-image-caption"
            >
              <figure className={`position-relative ${classes.image_figure}`}>
                <Image
                  className={`mt-5 ${classes.section__image}`}
                  priority={true}
                  src={getOptimizedImageSrc(image)}
                  width='500'
                  height='350'
                  alt={imageAlt}
                  sizes={getResponsiveSizes('card')}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <figcaption id="hero-image-caption" className={classes.visually_hidden}>
                  WordPress development environment showcasing custom theme and plugin work
                </figcaption>
              </figure>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default LandingPageSequenceOne;