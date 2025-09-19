import { Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './CTASection.module.scss';

import Footer from './Footer';

const CTASection = ({ 
  buttonText = "Get Started Now", 
  contactHref = "/contact", 
  paragraphText, 
  headingText, 
  sectionId = 'cta-section' 
}) => {

  // Generate unique IDs for accessibility
  const headingId = headingText ? `${sectionId}-heading` : null;
  const contentId = `${sectionId}-content`;

  return (
    <>
      {/* Main CTA Section */}
      <section 
        className={`h-auto ${classes.wrapper}`}
        role="region"
        aria-labelledby={headingId || contentId}
        aria-label="Contact call-to-action"
        itemScope
        itemType="https://schema.org/Action"
      >
        {/* Add hidden context for search engines */}
        <div className={classes.visually_hidden}>
          <p>Call-to-action section for web development services consultation</p>
        </div>

        <Container className='d-flex flex-column position-relative align-items-center'>
          <div className={`${classes.services__section_container} flex-column w-100 d-flex justify-content-between align-items-start ${classes.flex__container}`}>
            
            {/* Optional heading if provided */}
            {headingText && (
              <header className="w-100 text-center mb-4">
                <h2 
                  id={headingId}
                  className="display-4 fw-bold"
                  itemProp="name"
                >
                  {headingText}
                </h2>
              </header>
            )}

            <main 
              id={contentId}
              className="w-100 text-center"
              role="main"
              aria-labelledby={headingId}
            >
              <Row className="justify-content-center">
                <div className="col-12 col-lg-10 col-xl-8">
                  
                  {/* CTA Content */}
                  <article className="cta-content">
                    <p 
                      className="mb-5 display-5 text-center"
                      itemProp="description"
                      role="doc-subtitle"
                    >
                      {paragraphText}
                    </p>
                    
                    {/* Call-to-Action */}
                    <nav 
                      className="cta-navigation"
                      role="navigation"
                      aria-label="Primary call-to-action"
                    >
                      <div className='d-flex justify-content-center align-items-center'>
                        <Link 
                          className={classes.link} 
                          href={contactHref}
                          passHref
                          aria-describedby={contentId}
                          itemProp="url"
                        >
                          <button 
                            className={`${classes.services__section_pricing_card_btn} display-6 p-4`}
                            type="button"
                            aria-label={`${buttonText} - Contact for WordPress development services`}
                            itemProp="target"
                          >
                            <span itemProp="name">{buttonText}</span>
                          </button>
                        </Link>
                      </div>
                    </nav>
                  </article>
                </div>
              </Row>
            </main>
          </div>
        </Container>
      </section>

      {/* Footer as separate landmark */}
      <footer role="contentinfo" aria-label="Site footer">
        <Footer className='bg-white' />
      </footer>
    </>
  );
};

export default CTASection;