import { Container } from 'react-bootstrap';
import classes from './CaseStudyHero.module.scss';

import FlexContainer from '../FlexContainer';
import Headings from '../Headings';
import HeroButton from '../HeroButton';
import OptimizedImage from '../OptimizedImage';

const CaseStudyHero = ({
  sectionId = 'case-study-hero',
  tag,
  title,
  titleAccent,
  description,
  ctaText,
  ctaHref = '/contact',
  image,
  stats = [],
  statsFootnote,
}) => {
  // IDs used to connect the headings to their sections for screen readers
  const statsHeadingId = `${sectionId}-stats-heading`;

  // Two-tone heading: white first line, green accent line underneath
  const heading = (
    <>
      {title}
      {titleAccent && (
        <span className={classes.hero__heading_accent}>{titleAccent}</span>
      )}
    </>
  );

  return (
    <section className={classes.hero} id={sectionId}>

      {/* Top row: tag + heading on the left, description + CTA on the right */}
      <Container className={`${classes.hero__container} ${classes.hero__intro}`}>
        <FlexContainer className={classes.hero__flex}>
          {/* flex-grow-1 makes the row fill the FlexContainer's full width */}
          <div className="row flex-grow-1 justify-content-between">
            <header className={`col-12 col-lg-7 ${classes.hero__headings}`}>
              <Headings heading={heading}>{tag}</Headings>
            </header>

            <div className={`col-12 col-lg-4 ${classes.hero__summary}`}>
              {description && (
                <p className={classes.hero__description}>{description}</p>
              )}
              {ctaText && (
                <HeroButton href={ctaHref}>{ctaText}</HeroButton>
              )}
            </div>
          </div>
        </FlexContainer>
      </Container>

      {/* Full-width photo that fades into the background at the top */}
      {image?.src && (
        <figure className={classes.hero__img_container}>
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill={true}
            priority={true}
            sizes="100vw"
            className={classes.hero__img}
          />
        </figure>
      )}

      {/* Stats card that overlaps the bottom of the photo */}
      {stats.length > 0 && (
        <div className={classes.hero__stats_wrapper}>
          <Container className={classes.hero__container}>
            <FlexContainer className={classes.hero__flex}>
              <section className={`w-100 ${classes.hero__stats}`} aria-labelledby={statsHeadingId}>
                <h2 id={statsHeadingId} className="visually-hidden">
                  Project results
                </h2>

                <ul className={`row list-unstyled mb-0 ${classes.hero__stats_list}`}>
                  {stats.map((stat, index) => (
                    <li key={index} className={`col-6 col-lg-3 ${classes.hero__stat}`}>
                      <data value={stat.value} className={classes.hero__stat_value}>
                        {stat.value}
                      </data>
                      <p className={classes.hero__stat_label}>{stat.label}</p>
                    </li>
                  ))}
                </ul>

                {statsFootnote && (
                  <p className={classes.hero__stats_footnote}>{statsFootnote}</p>
                )}
              </section>
            </FlexContainer>
          </Container>
        </div>
      )}
    </section>
  );
};

export default CaseStudyHero;
