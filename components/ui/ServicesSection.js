import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import AnimatedHeading from '../animations/AnimatedHeading';
import { getOptimizedImageSrc, getResponsiveSizes } from './ResponsiveImage';
import classes from './ServicesSection.module.scss';

const ServicesSection = ({ heading, services, sideImageSrc='', sideImageAlt='Lindy Ramirez, web developer' }) => {
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
          <div className={`d-flex w-100 justify-content-between mt-5 align-items-stretch ${classes.service_container_wrapper}`} >
            <div className={`d-flex flex-column justify-content-between ${classes.services_container}`} >
              <Row lg={3} className='p-5 d-flex justify-content-between align-items-start' >
                {services.map((service, index) => (
                  <Col xs={12} sm={4} className='p-4' key={index}>
                    <div className={`${classes.service_icon_container}`}>
                      <Image
                        src={getOptimizedImageSrc(service.iconSrc)}
                        height='30'
                        width='30'
                        alt={service.altText}
                        sizes="30px"
                        quality={95}
                      />
                    </div>
                    <h3 className={`text-white mt-2 ${classes.fs_custom} fw-normal`} >{service.title}</h3>
                    <p className={`text-white ${classes.fs_custom_sm} mb-0`} >
                      {service.description}
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
                        <div className={`d-lg-flex d-none justify-content-end align-items-center ${classes.imageContainer}`} >
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;