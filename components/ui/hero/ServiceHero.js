import Image from "next/image";
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import classes from './ServiceHero.module.scss';

const ServiceHero = ({
  stats,
  heroImage,
  alt,
  title,
  description,
  iconSrc,
  iconAlt,
  ctaText,
  sectionId = 'service-hero',
  headingLevel = 'h1',
  additionalContent,
  iconBoxBgClass = "",
  statValueFontSize = null,
}) => {
  const [shouldLoadImage, setShouldLoadImage] = useState(false);

  useEffect(() => {
    // Only load image if screen is large enough to show it
    const mediaQuery = window.matchMedia('(min-width: 992px)');
    setShouldLoadImage(mediaQuery.matches);

    const handleScreenChange = (e) => {
      setShouldLoadImage(e.matches);
    };

    mediaQuery.addListener(handleScreenChange);
    return () => mediaQuery.removeListener(handleScreenChange);
  }, []);

  // Create a style object from the statValueFontSize prop
  const getStatValueStyle = () => {
    if (!statValueFontSize) return {};
    if (typeof statValueFontSize === 'object') return statValueFontSize;
    return { fontSize: statValueFontSize };
  };

  // Generate unique IDs for accessibility
  const headingId = `${sectionId}-heading`;
  const descriptionId = `${sectionId}-description`;
  const statsId = `${sectionId}-stats`;

  // Determine heading component based on level
  const HeadingComponent = headingLevel;

  return (
    <section
      className="service-hero-section"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      itemScope
      itemType="https://schema.org/Service"
      itemProp="serviceType"
      content="Web Development"
      role="banner"
      id={sectionId}
    >
      <Container className={`d-flex flex-column-reverse flex-lg-row position-relative ${classes.flex__container} justify-content-between align-items-center ${classes.flex__container__col}`}>
        <aside 
        className={`${classes.hero__col_1} d-lg-flex d-none position-relative flex-column justify-content-between`} 
        role="complementary"
        aria-label="Service statistics and visual showcase"
        >
          <figure 
          className={classes.hero__img_container} 
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
          >
            {shouldLoadImage && (
              <>
                <Image
                  priority={false}
                  src={heroImage}
                  fill={true} 
                  style={{ objectFit: 'cover' }}  
                  className={`position-relative ${classes.hero__img}`}
                  alt={alt}
                  loading="lazy"
                  sizes="(max-width: 768px) 0px, (max-width: 1024px) 50vw, (max-width: 1200px) 40vw, 33vw"
                  quality={85}
                  itemProp="url"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <meta itemProp="name" content={alt} />
              </>
            )}
            <figcaption className="visually-hidden" itemProp="description">
              {alt}
            </figcaption>
          </figure>
          <section 
            className={`d-flex justify-content-between align-items-center ${classes.hero__stats_container}`} 
            aria-labelledby={`${statsId}-heading`}
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <h2 
              id={`${statsId}-heading`}
              className={classes.visually_hidden}
              itemProp="name"
            >
              {title} Statistics
            </h2>
            {stats.map((stat, index) => (
              <article 
                key={index} 
                className={`justify-content-center ${classes[`hero__stats_${index + 1}`]}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <div className='justify-content-center h-100 d-flex flex-column p-4 fw-bold align-items-start'>
                  <span className={classes.stat_label} itemProp="name">
                    {stat.label}
                  </span>
                  <br />
                  <data 
                    value={stat.value}
                    itemProp="value"
                    className='fw-bold' 
                    style={getStatValueStyle()}
                  >
                    {stat.value}
                  </data>
                  
                  <meta itemProp="position" content={index + 1} />
                  {stat.unitText && (
                    <meta itemProp="unitText" content={stat.unitText} />
                  )}
                </div>
              </article>
            ))}
          </section>
        </aside>
        <main 
          className={`${classes.hero__col_2} d-flex position-relative flex-column align-items-lg-start align-items-center justify-content-center`}
          role="main"
        >
          <header className="hero-header text-center text-lg-start w-100">
            <HeadingComponent 
              className={`display-3 text-center text-lg-start fw-bold ${classes.hero__heading}`}
              id={headingId}
              itemProp="name"
            >
              {title}
            </HeadingComponent>
            <p 
              className={`fs-2 text-center text-lg-start ${classes.hero__heading}`}
              id={descriptionId}
              itemProp="description"
              role="doc-subtitle"
            >
              {description}
            </p>
          </header>
          <section 
            className='w-sm-100 d-flex align-items-center justify-content-between'
            aria-label="Service details and call-to-action"
          >
            {iconSrc && (
              <div 
                className={`d-sm-flex position-relative d-none justify-content-center align-items-center ${classes.hero__icon_box} ${iconBoxBgClass}`}
                role="img"
                aria-label={iconAlt}
              >
                <Image
                  src={iconSrc}
                  fill={true}
                  alt=""
                  className='p-4'
                  sizes="(max-width: 768px) 60px, (max-width: 1024px) 80px, 100px"
                  quality={90}
                  aria-hidden="true"
                  role="presentation"
                />
              </div>
            )}
            <article 
              className={`${classes.cta__wrapper} d-flex flex-column ms-sm-4 ${classes.hero__heading}`}
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              {additionalContent && (
                <div 
                  className={`fw-bold fs-4 d-none d-sm-flex flex-column justify-content-start`}
                  aria-label="Primary call-to-action"
                >
                  {additionalContent}
                </div>
              )}
              <nav 
                className="cta-navigation mt-2"
                aria-label="Primary call-to-action"
              >
                <Link 
                  className={`fw-bolder fs-3 ${classes.hero__cta}`} 
                  href='/contact'
                  aria-describedby={headingId}
                  itemProp="url"
                >
                  <span itemProp="name">{ctaText}</span>
                  <span aria-hidden="true" className="ms-2">
                    <Image 
                      className={classes.hero__cta_arrow} 
                      src='/static/circle-arrow-right.svg' 
                      width={20} 
                      height={20} 
                      alt='' 
                      role="presentation"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </nav>
            </article>
          </section>
          <div className='mt-5 d-flex flex-column align-items-center w-100 justify-content-center'>
            <div className={`fs-2 mb-4 ${classes.hero__heading}`}>
              Scroll Down
            </div>
            <svg className={classes.bounce} width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 40 L50 70 L80 40" />
            </svg>
          </div>
        </main>
      </Container>
    </section>
  );
};

export default ServiceHero;