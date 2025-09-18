import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../animations/AnimatedHeading';
import { getOptimizedImageSrc, getResponsiveSizes } from './ResponsiveImage';
import classes from './ServicesSection.module.scss';

const ServicesSection = ({ heading, services, sideImageSrc='', sideImageAlt='Lindy Ramirez, web developer' }) => {

  // Generate unique IDs for accessibility
  const sectionId = `services-${heading?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <section 
      className={`h-auto ${classes.bg_gray}`}
      aria-labelledby={`heading-${sectionId}`}
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      <span itemProp="name" className={classes.visually_hidden}>Lindy Ramirez Freelance Web Development</span>
      <span itemProp="serviceType" className={classes.visually_hidden}>
        Web Development Services
      </span>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className={classes.visually_hidden}>
        <span itemProp="addressLocality">Los Angeles</span>
        <span itemProp="addressRegion">CA</span>
        <span itemProp="addressCountry">US</span>
      </div>
      <span itemProp="areaServed" className={classes.visually_hidden}>Los Angeles, CA</span>
      <Container className='d-flex flex-column position-relative align-items-center'>
        <div className={`${classes.services__section_container} flex-column w-100 d-flex justify-content-between align-items-start ${classes.flex__container}`}>
          <header className="w-100">
            <Row>
              <Col className="w-100 overflow-hidden ">
                <AnimatedHeading
                  text={heading}
                  className={`d-flex flex-wrap fw-bold ${classes.section__heading_header}`}
                  id={`heading-${sectionId}`}
                />
              </Col>
            </Row>
          </header>
          <main className={`d-flex w-100 justify-content-between mt-5 align-items-stretch ${classes.service_container_wrapper}`} >
            <article 
              className={`d-flex flex-column justify-content-between ${classes.services_container}`} 
              aria-labelledby={`heading-${sectionId}`}
              itemScope 
              itemType="https://schema.org/ItemList"
            >
              <div className='p-5 d-flex justify-content-between align-items-start'>
                <ul 
                  className="services-grid row w-100 list-unstyled"
                  role="list"
                  aria-label="Available services"
                  itemProp="itemListElement"
                >
                  {services.map((service, index) => (
                     <li 
                        key={index}
                        className="col-12 col-sm-4 p-4"
                        itemScope 
                        itemType="https://schema.org/Service"
                        itemProp="itemListElement"
                      >
                      <article className="service-card h-100">
                        <span itemProp="provider" itemScope itemType="https://schema.org/Person">
                          <span itemProp="name" className={classes.visually_hidden}>Lindy Ramirez</span>
                        </span>
                        <div 
                          className={`${classes.service_icon_container}`}
                          role="img"
                          aria-labelledby={`service-title-${index}`}
                        >
                          <Image
                            src={service.iconSrc}
                            height={30}
                            width={30}
                            alt={`${service.title} service icon`}
                            sizes="30px"
                            quality={95}
                            itemProp="image"
                            loading="lazy"
                          />
                        </div>
                        <header className="service-header mt-2">
                          <h3 
                            className={`text-white mt-2 ${classes.fs_custom} fw-normal`}
                            id={`service-title-${index}`}
                            itemProp="name"
                          >
                            {service.title}
                          </h3>
                        </header>
                        <div className="service-description">
                          <p 
                            className={`text-white ${classes.fs_custom_sm} mb-0`}
                            itemProp="description"
                          >
                            {service.description}
                          </p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <aside 
              className={`d-lg-flex d-none justify-content-end align-items-center ${classes.imageContainer}`}
              role="complementary"
              aria-label="Professional headshot of my work environment"
              style={{ display: 'contents' }}
            >
              <figure 
                className={`d-lg-flex m-0 p-0 d-none h-100 justify-content-end align-items-center ${classes.imageContainer}`}
              >
                <Image
                  src={getOptimizedImageSrc(sideImageSrc)}
                  height={700}
                  width={700}
                  alt={sideImageAlt}
                  className={`position-relative h-100 ${classes.services_img}`}
                  sizes={getResponsiveSizes('card')}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <figcaption className={classes.visually_hidden}>
                  Professional portrait of my web development space
                </figcaption>
              </figure>
            </aside>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;