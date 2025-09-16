import React from 'react';
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';

import ButtonPair from '../ButtonPair';
import AnimatedHeading from '../../animations/AnimatedHeading';
import { getOptimizedImageSrc, getResponsiveSizes } from '../ResponsiveImage';

import Link from 'next/link';
import classes from './LandingPageSequenceThree.module.scss';

const LandingPageSequenceThree = ({ heading, aboutMeText, attributes, imageSrc, imageAlt, contactButtonText = "Get In Touch", workSamplesButtonText = "View Work Samples" }) => {
  return (
    <section className={`h-auto ${classes.wrapper}`}>
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
          <Row className='flex-column-reverse flex-sm-column-reverse flex-lg-row'>
            <Col className='mt-5'>
              <p className='fs-3 fw-normal' >
                {aboutMeText}
              </p>
              <p className='fs-1 mt-4 fw-semibold'>
                What You Get When You Hire Me
              </p>
              <div >
                {attributes.map((attribute, index) => (
                  <div key={index}>
                    <p className='fs-2 fw-semibold mb-0'>{attribute.title}</p>
                    <p className='fs-3'>{attribute.description}</p>
                  </div>
                ))}
              </div>
              <ButtonPair primaryCtaButtonText="Let's Connect" secondaryCtaButtonText="View Work Samples" />
            </Col>
            <Col className='mt-5 mt-lg-0 d-flex justify-content-end align-items-center' >
              <div className={`d-flex justify-content-center align-items-center ${classes.img_collage}`} >
                <Image
                  className={`${classes.img_collage_first_floating} ${classes.img_collage_photo}`}
                  src={getOptimizedImageSrc('/static/aguachile-edited.webp')}
                  width={'180'}
                  height={'200'}
                  alt={'One of my favorite foods, aguachile'}
                  sizes={getResponsiveSizes('thumbnail')}
                  quality={85}
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
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <Image
                  className={`${classes.img_collage_second_floating} ${classes.img_collage_photo}`}
                  src={getOptimizedImageSrc('/static/pacifico-beach.webp')}
                  width={'180'}
                  height={'200'}
                  alt='American Web developer working on the beach'
                  sizes={getResponsiveSizes('thumbnail')}
                  quality={85}
                />
                <Image
                  className={`${classes.img_collage_third_floating} ${classes.img_collage_photo}`}
                  src={getOptimizedImageSrc('/static/audi.webp')}
                  width={'225'}
                  height={'169'}
                  alt='Web developer located in the San Fernando Valley, Los Angeles, CA'
                  sizes={getResponsiveSizes('thumbnail')}
                  quality={85}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default LandingPageSequenceThree;