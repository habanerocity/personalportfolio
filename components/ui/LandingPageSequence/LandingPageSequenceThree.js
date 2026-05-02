import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';

import ButtonPair from '../ButtonPair';
import AnimatedHeading from '../../animations/AnimatedHeading';
import { getOptimizedImageSrc, getResponsiveSizes } from '../ResponsiveImage';

import classes from './LandingPageSequenceThree.module.scss';

const FALLBACK_COLLAGE = [
  { src: '/static/lindy-thailand-optimized.webp', alt: 'Lindy Ramirez - Web Developer' },
  { src: '/static/aguachile-edited.webp', alt: 'Aguachile - one of my favorite foods' },
  { src: '/static/pacifico-beach.webp', alt: 'Web developer working on the beach in Pacifico Beach, Siargao, Philippines' },
  { src: '/static/audi.webp', alt: 'Web developer located in the San Fernando Valley, Los Angeles, CA' },
];

const COLLAGE_CLASSES = [
  'img_collage_main',
  'img_collage_first_floating',
  'img_collage_third_floating',
  'img_collage_second_floating',
];

const COLLAGE_DIMENSIONS = [
  { width: 376, height: 500, sizes: 'card', loading: 'lazy' },
  { width: 180, height: 200, sizes: 'thumbnail', loading: 'lazy' },
  { width: 225, height: 169, sizes: 'thumbnail', loading: 'lazy' },
  { width: 180, height: 200, sizes: 'thumbnail', loading: 'lazy' },
];

const LandingPageSequenceThree = ({ 
  heading, 
  content, 
  imageSrc, 
  imageAlt,
  collageImages,
}) => {
  const images = collageImages ?? (imageSrc
    ? [FALLBACK_COLLAGE[0], { src: imageSrc, alt: imageAlt ?? '' }, FALLBACK_COLLAGE[2], FALLBACK_COLLAGE[3]]
    : FALLBACK_COLLAGE);

  // Generate unique IDs for accessibility
  const sectionId = `about-section-${heading?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <section 
    className={`h-auto ${classes.wrapper}`}
    aria-labelledby={`heading-${sectionId}`}
    itemScope 
    itemType="https://schema.org/Person"
    >
      <span itemProp="name" className={classes.visually_hidden}>Lindy Ramirez</span>
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
          <header className="w-100">
            <Row>
              <Col className="w-100 overflow-hidden ">
                <AnimatedHeading
                  text={heading}
                  className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
                  id={`heading-${sectionId}`}
                  itemProp="name"
                />
              </Col>
            </Row>
          </header>
          <main className="w-100">
            <Row className='flex-column-reverse flex-sm-column-reverse flex-lg-row'>
              <Col 
                className='mt-5'
                role="main" 
                aria-describedby={`heading-${sectionId}`}
              >
                <article>
                  <p className='fs-3 fw-normal' style={{ whiteSpace: 'pre-line' }} itemProp="description">
                    {content}
                  </p>
                </article>
                <nav 
                  className="cta-navigation" 
                  aria-label="Contact and portfolio navigation"
                  role="navigation"
                >
                  <ButtonPair 
                    primaryCtaButtonText="Let's Connect" 
                    secondaryCtaButtonText="View Services" 
                    secondaryCtaButtonLink="/services"
                  />
                </nav>
              </Col>
              <Col 
                className='mt-5 mt-lg-0 d-flex justify-content-end align-items-center' 
                role="complementary"
                aria-label="Personal photo gallery"
              >
                <figure 
                  className={`d-flex justify-content-center align-items-center ${classes.img_collage}`} 
                  itemProp="image"
                  role="img"
                  aria-label="Photo collage showcasing personal interests and lifestyle"
                >
                  {images.map((img, i) =>
                    img.src ? (
                      <Image
                        key={i}
                        className={`${classes[COLLAGE_CLASSES[i]]} ${classes.img_collage_photo}`}
                        src={getOptimizedImageSrc(img.src)}
                        width={COLLAGE_DIMENSIONS[i].width}
                        height={COLLAGE_DIMENSIONS[i].height}
                        alt={img.alt}
                        sizes={getResponsiveSizes(COLLAGE_DIMENSIONS[i].sizes)}
                        quality={85}
                        loading={COLLAGE_DIMENSIONS[i].loading}
                        itemProp="image"
                      />
                    ) : null
                  )}
                  <figcaption className={classes.visually_hidden}>
                    A photo collage showing personal interests including favorite food (aguachile), 
                    work lifestyle (beach working), main portrait, and lifestyle in Los Angeles
                  </figcaption>
                </figure>
              </Col>
            </Row>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default LandingPageSequenceThree;