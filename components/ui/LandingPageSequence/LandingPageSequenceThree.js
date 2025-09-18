import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';

import ButtonPair from '../ButtonPair';
import AnimatedHeading from '../../animations/AnimatedHeading';
import { getOptimizedImageSrc, getResponsiveSizes } from '../ResponsiveImage';

import classes from './LandingPageSequenceThree.module.scss';

const LandingPageSequenceThree = ({ 
  heading, 
  aboutMeText, 
  attributes, 
  imageSrc, 
  imageAlt
}) => {

  // Generate unique IDs for accessibility
  const sectionId = `about-section-${heading?.replace(/\s+/g, '-').toLowerCase()}`;
  const attributesId = `attributes-${sectionId}`;

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
                  <p className='fs-3 fw-normal' itemProp="description">
                    {aboutMeText}
                  </p>
                </article>
                <aside 
                  className="mt-4" 
                  aria-labelledby={`attributes-heading-${sectionId}`}
                  itemScope 
                  itemType="https://schema.org/Service"
                >
                  <header>
                    <p className='fs-1 mt-4 fw-semibold' id={`attributes-heading-${sectionId}`}>
                      What You Get When You Hire Me
                    </p>
                  </header>
                  <dl className="attributes-list" role="list" itemProp="offers">
                    {attributes.map((attribute, index) => (
                      <div 
                        key={index} 
                        className="attribute-item"
                        itemScope 
                        itemType="https://schema.org/ServiceFeature"
                      >
                        <dt 
                          className='fs-2 fw-semibold mb-0'
                          itemProp="name"
                        >
                          {attribute.title}
                        </dt>
                        <dd 
                          className='fs-3 mb-3'
                          itemProp="description"
                        >
                          {attribute.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
                <nav 
                  className="cta-navigation" 
                  aria-label="Contact and portfolio navigation"
                  role="navigation"
                >
                  <ButtonPair primaryCtaButtonText="Let's Connect" secondaryCtaButtonText="View Work Samples" />
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
                  <Image
                    className={`${classes.img_collage_first_floating} ${classes.img_collage_photo}`}
                    src={getOptimizedImageSrc('/static/aguachile-edited.webp')}
                    width={'180'}
                    height={'200'}
                    alt={'Aguachile - one of my favorite foods'}
                    sizes={getResponsiveSizes('thumbnail')}
                    quality={85}
                    loading="lazy"
                    itemProp="image"
                  />
                  <Image
                    className={`${classes.img_collage_main} ${classes.img_collage_photo}`}
                    src={getOptimizedImageSrc(imageSrc)}
                    width={'376'}
                    height={'500'}
                    alt={imageAlt}
                    sizes={getResponsiveSizes('card')}
                    quality={85}
                    placeholder="blur"
                    itemProp="image"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <Image
                    className={`${classes.img_collage_second_floating} ${classes.img_collage_photo}`}
                    src={getOptimizedImageSrc('/static/pacifico-beach.webp')}
                    width={'180'}
                    height={'200'}
                    alt='Web developer working on the beach in Pacifico Beach, Siargao, Philippines'
                    sizes={getResponsiveSizes('thumbnail')}
                    quality={85}
                    loading="lazy"
                    itemProp="image"
                  />
                  <Image
                    className={`${classes.img_collage_third_floating} ${classes.img_collage_photo}`}
                    src={getOptimizedImageSrc('/static/audi.webp')}
                    width={'225'}
                    height={'169'}
                    alt='Web developer located in the San Fernando Valley, Los Angeles, CA'
                    sizes={getResponsiveSizes('thumbnail')}
                    quality={85}
                    loading="lazy"
                    itemProp="image"
                  />
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