import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import classes from "./index.module.scss";

import NavigationBar from '../../components/ui/NavigationBar';
import LogoBar from '../../components/ui/LogoBar';
import Footer from '../../components/ui/Footer';
import SectionContainer from '../../components/ui/SectionContainer';
import Headings from '../../components/ui/Headings';
import ButtonPair from "../../components/ui/ButtonPair";

import PricingTable from '../../components/ui/PricingTable/PricingTable';
import PricingCardsGrid from '../../components/ui/PricingCardsGrid/PricingCardsGrid';

import Tooltip from 'react-bootstrap/Tooltip';

import Link from "next/link";
import Image from "next/image";

import pageFadeInAnimation from "../../animations/pageFadeInAnimation";

import serviceCardInfoData from "../../data/serviceCardInfoData";
import pricingFeaturesData from "../../data/services/pricingFeaturesData";
import pricingCardsData from "../../data/services/pricingCardsData";

const Services = () => {

    const renderTooltip = (message) => (
        <Tooltip id="button-tooltip" className='fs-5'>
          {message}
        </Tooltip>
      );

    return(

        <React.Fragment>
            <Head>
                <title>Services - Lindy Ramirez | Freelance Web Developer</title>
                <meta
                    name="description"
                    content="Professional web development services in Los Angeles: WordPress & Shopify development, custom landing pages, SEO optimization, and digital marketing. Monthly packages from $199. Get a free consultation today!"
                />
                <meta property="og:title" content="Web Development Services in Los Angeles | Lindy Ramirez" />
                <meta property="og:description" content="Professional web development services..." />
                <meta property="og:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />
                <meta property="og:url" content="https://www.lindyramirez.com/services" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Development Services | Lindy Ramirez" />
                <meta name="twitter:description" content="Professional web development services in Los Angeles: WordPress & Shopify development, custom landing pages, SEO optimization, and digital marketing." />
                <meta name="twitter:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.lindyramirez.com/services" />

                {/* Mobile optimization */}
                <meta name="theme-color" content="#ff6600" />

                {/* Geolocation Meta Tags */}
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="34.0522;-118.2437" />
                <meta name="ICBM" content="34.0522, -118.2437" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                                {
                                    "@type": "ProfessionalService",
                                    "@id": "https://www.lindyramirez.com/services#business",
                                    "name": "Lindy Ramirez Freelance Web Development",
                                    "image": "https://www.lindyramirez.com/static/optimized/st_thomas_up_close-optimized.webp",
                                    "email": "hello@lindyramirez.com",
                                    "url": "https://www.lindyramirez.com/services",
                                    "priceRange": "$199 - $1099",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Los Angeles",
                                        "addressRegion": "CA",
                                        "addressCountry": "US"
                                    },
                                    "geo": {
                                        "@type": "GeoCoordinates",
                                        "latitude": "34.0522",
                                        "longitude": "-118.2437"
                                    },
                                    "openingHoursSpecification": {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": [
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday"
                                        ],
                                        "opens": "09:00",
                                        "closes": "18:00"
                                    },
                                     "areaServed": [
                                    {
                                        "@type": "City",
                                        "name": "Los Angeles",
                                        "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Granada Hills"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Tarzana"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Pasadena"
                                    }
                                ],
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://www.lindyramirez.com/services#webpage",
                                    "url": "https://www.lindyramirez.com/services",
                                    "name": "Services - Lindy Ramirez | Freelance Web Developer",
                                    "description": "Professional web development services including website maintenance, website migrations, custom development, SEO optimization, and digital marketing strategies. Monthly packages starting at $199.",
                                    "breadcrumb": {
                                        "@type": "BreadcrumbList",
                                        "itemListElement": [
                                            {
                                                "@type": "ListItem",
                                                "position": 1,
                                                "name": "Home",
                                                "item": "https://www.lindyramirez.com"
                                            },
                                            {
                                                "@type": "ListItem",
                                                "position": 2,
                                                "name": "Services",
                                                "item": "https://www.lindyramirez.com/services"
                                            }
                                        ]
                                    },
                                    "mainEntity": {
                                        "@type": "OfferCatalog",
                                        "name": "Web Development Service Packages",
                                        "itemListElement": [
                                            {
                                                "@type": "Offer",
                                                "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Basic Package",
                                                    "description": "Ideal for brands whom need consistent web maintenance, content management, and website optimization.",
                                                    "provider": {
                                                        "@id": "https://www.lindyramirez.com/services#business"
                                                    },
                                                    "serviceType": "Website Maintenance",
                                                    "areaServed": {
                                                        "@type": "Country",
                                                        "name": "United States"
                                                    }
                                                },
                                                "price": "199.00",
                                                "priceCurrency": "USD",
                                                "priceSpecification": {
                                                    "@type": "UnitPriceSpecification",
                                                    "price": "199.00",
                                                    "priceCurrency": "USD",
                                                    "unitText": "MONTH"
                                                },
                                                "availability": "https://schema.org/InStock",
                                                "url": "https://www.lindyramirez.com/contact",
                                                "category": "Web Maintenance"
                                            },
                                            {
                                                "@type": "Offer",
                                                "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Standard Package",
                                                    "description": "Best suited for brands requiring custom development, web design, and SEO services to enhance their online presence.",
                                                    "provider": {
                                                        "@id": "https://www.lindyramirez.com/services#business"
                                                    },
                                                    "serviceType": "Web Development & SEO",
                                                    "areaServed": {
                                                        "@type": "Country",
                                                        "name": "United States"
                                                    }
                                                },
                                                "price": "649.00",
                                                "priceCurrency": "USD",
                                                "priceSpecification": {
                                                    "@type": "UnitPriceSpecification",
                                                    "price": "649.00",
                                                    "priceCurrency": "USD",
                                                    "unitText": "MONTH"
                                                },
                                                "availability": "https://schema.org/InStock",
                                                "url": "https://www.lindyramirez.com/contact",
                                                "category": "Web Development",
                                                "eligibleRegion": {
                                                    "@type": "Country",
                                                    "name": "US"
                                                }
                                            },
                                            {
                                                "@type": "Offer",
                                                "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Premium Package",
                                                    "description": "Perfect for brands looking for complete web development services and robust digital marketing strategies.",
                                                    "provider": {
                                                        "@id": "https://www.lindyramirez.com/services#business"
                                                    },
                                                    "serviceType": "Full-Service Web Development & Marketing",
                                                    "areaServed": {
                                                        "@type": "Country",
                                                        "name": "United States"
                                                    }
                                                },
                                                "price": "1099.00",
                                                "priceCurrency": "USD",
                                                "priceSpecification": {
                                                    "@type": "UnitPriceSpecification",
                                                    "price": "1099.00",
                                                    "priceCurrency": "USD",
                                                    "unitText": "MONTH"
                                                },
                                                "availability": "https://schema.org/InStock",
                                                "url": "https://www.lindyramirez.com/contact",
                                                "category": "Full-Service Web Development"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#landing-page-development",
                                    "name": "Landing Page Development",
                                    "description": "I build custom-coded, high-converting landing pages that blend strategic UX with crisp visuals. Every element, from the headline to the call-to-action, is optimized to turn visitors into leads or customers. No cookie-cutter templates, just custom-built pages designed to grow your business.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "Landing Page Development",
                                    "category": "Web Development",
                                    "url": "https://www.lindyramirez.com/services/landing-page-development"
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#wordpress-development",
                                    "name": "WordPress Development",
                                    "description": "Generic WordPress sites underperform. Custom-built solutions with optimized code, tailored plugins, and brand-aligned design fix that. Whether you need a custom theme, existing site overhaul, or tailored plugins for advanced functionality, I create solutions that get results.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "WordPress Development",
                                    "category": "Web Development",
                                    "url": "https://www.lindyramirez.com/services/wordpress-development"
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#shopify-development",
                                    "name": "Shopify Theme Development",
                                    "description": "Your Shopify store should sell for you—even when you’re offline. I build custom Shopify solutions that convert browsers into buyers, with custom themes, conversion-focused design, and seamless functionality. I design storefronts that reflect your brand and drive revenue.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "Shopify Development",
                                    "category": "E-commerce Development",
                                    "url": "https://www.lindyramirez.com/services/shopify-development"
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#digital-marketing",
                                    "name": "Digital Marketing Services",
                                    "description": "Need a partner to level up your digital presence? From social media marketing that engages and converts, to on-page SEO that boosts your site's visibility, and ensuring your site is properly indexed by Google and Bing, I offer comprehensive services that establish your brand as a leader in your industry.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "Digital Marketing",
                                    "category": "Digital Marketing",
                                    "url": "https://www.lindyramirez.com/services/digital-marketing"
                                },
                                {
                                    "@type": "ItemList",
                                    "@id": "https://www.lindyramirez.com/services#client-logos",
                                    "name": "Brands We've Worked With",
                                    "itemListElement": [
                                        {
                                            "@type": "Organization",
                                            "name": "Taste Tripping",
                                            "logo": "https://www.lindyramirez.com/static/tt.svg"
                                        },
                                        {
                                            "@type": "Organization",
                                            "name": "Victorie Packaging",
                                            "logo": "https://www.lindyramirez.com/static/VICTORIE-TM-5.webp"
                                        },
                                        {
                                            "@type": "Organization",
                                            "name": "The Zoe PH",
                                            "logo": "https://www.lindyramirez.com/static/The-Zoe-PH-edited.webp"
                                        },
                                        {
                                            "@type": "Organization",
                                            "name": "Bang",
                                            "logo": "https://www.lindyramirez.com/static/bang-logo.webp"
                                        }
                                    ]
                                },
                                {
                                    "@type": "Organization",
                                    "@id": "https://www.lindyramirez.com/#organization",
                                    "name": "Lindy Ramirez Web Development",
                                    "url": "https://www.lindyramirez.com",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.lindyramirez.com/static/Lr-svg.svg",
                                        "width": 100,
                                        "height": 100
                                    },
                                    "sameAs": [
                                        "https://www.linkedin.com/in/lindy-ramirez-8786102b/",
                                        "https://github.com/habanerocity",
                                        "https://x.com/LindyRamirez"
                                    ],
                                    "contactPoint": {
                                        "@type": "ContactPoint",
                                        "email": "hello@lindyramirez.com",
                                        "contactType": "Customer Service",
                                        "areaServed": "US",
                                        "availableLanguage": ["English", "Spanish"]
                                    }
                                }
                            ]
                        })
                    }
                </script>
            </Head>
            <div className={classes.pg} itemScope itemType="https://schema.org/WebPage">
                <NavigationBar />
                <motion.div
                initial="hidden"
                animate="visible"
                variants={pageFadeInAnimation}
                onAnimationStart={pageFadeInAnimation.onAnimationStart}
                >
                    <SectionContainer className="min-h-auto">
                        <Container className={`d-flex flex-column position-relative ${classes.flex__container__top_section}`}>
                            <section className={classes.flex__container} aria-labelledby="services-heading" role="banner">
                                <header className={`w-100 align-items-start text-start justify-content-start ${classes.headings__container}`}>
                                    <Headings id="services-heading" itemProp="name" heading="How I Can Help You">Services</Headings>      
                                </header>
                            </section>
                            <section className='row mt-5 gx-0' aria-labelledby="growth-heading" itemScope itemType="https://schema.org/Service">
                                <aside className='col-12 px-0 col-lg-6 d-flex position-relative' role="complementary">
                                    <Image
                                        src='/static/optimized/st_thomas_up_close-optimized.webp' // Use optimized version
                                        fill={true} // Use fill instead of layout='fill'
                                        className={`${classes.office_img} position-relative`}
                                        alt='Office Desk with modern workspace setup'
                                        priority={true} // Set priority to true for LCP image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                        quality={85}
                                        style={{ objectFit: 'cover' }}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                    />  
                                </aside>
                                <article itemProp="description" className={`col-12 col-lg-6 d-flex position-relative flex-column justify-content-center align-items-start p-5 ${classes.services__banner_text_content}`} >
                                    <header>
                                        <p id="growth-heading" className={`${classes.services__banner_subheading} fs-1`}>Growth On Autopilot</p>
                                        <h1 className={`fw-bold text-white ${classes.services__banner_heading}`} itemProp="name" >
                                            Los Angeles Web Developer: From Hands-Off Website Maintenance To Full-Service Web Development That Scales Your Business
                                        </h1>
                                    </header>
                                    <p itemProp="description" className={`text-white mt-4 ${classes.services__banner_description}`} >
                                        Stop juggling website maintenance, security patches, and marketing campaigns. My full-service web development packages handle everything from daily WordPress and Shopify management to advanced SEO strategies and conversion rate optimization. Your website stays lightning-fast, Google-friendly, and consistently generating leads — while you focus on what you do best.
                                    </p>
                                </article >
                            </section>
                            <section className={`${classes.flex__container} align-items-start flex-column`}  aria-labelledby="service-offerings-heading">
                                <h2 id="service-offerings-heading" className={classes.visually_hidden}>
                                    Available Services
                                </h2>
                                <h2 className={`mt-5 ${classes.section__heading_header}`}>My Services</h2>
                                <div className={`mt-4 ${classes.service__card_wrapper}`} itemScope itemType="https://schema.org/ItemList">
                                    {serviceCardInfoData.map((serviceCard, index) => (
                                        <article 
                                            key={serviceCard.id} 
                                            className={`p-5 fs-4 ${classes.service__card}`}
                                            itemScope
                                            itemType="https://schema.org/Service"
                                            itemProp="itemListElement"
                                        >
                                            <div className={classes.service__card_content_wrapper}>
                                                <header className={classes.service__card_content}>
                                                    <div role="img" aria-label={serviceCard.altText}>
                                                        <Image 
                                                            className={classes.service__card_icon} 
                                                            src={serviceCard.icon} 
                                                            alt={serviceCard.altText} 
                                                            width={40} 
                                                            height={40} 
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <h3 className="mt-3" itemProp="name">{serviceCard.title}</h3>
                                                    <p className="mt-3" itemProp="description">{serviceCard.description}</p>
                                                </header>
                                                <nav aria-label={`${serviceCard.title} actions`}>
                                                    <ButtonPair 
                                                        primaryCtaButtonText="Get Started" 
                                                        secondaryCtaButtonText="Learn More" 
                                                        secondaryCtaButtonLink={`/services/${serviceCard.link}`} 
                                                        flexCol={true} 
                                                        fullWidth={true} 
                                                    />
                                                </nav>
                                            </div>
                                            <meta itemProp="position" content={index + 1} />
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </Container>
                        
                    <aside  className={`h-auto ${classes.brands_section}`} aria-labelledby="brands-heading" role="complementary">
                        <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                            <section className={` flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                                <header>
                                    <h2 id="brands-heading" className={classes.section__heading_header}>
                                        Some Brands I&apos;ve Worked With
                                    </h2>
                                </header>
                                <div role="list" aria-label="Client brand logos" className={`d-flex flex-row flex-wrap justify-content-between align-items-center w-100 mt-5 ${classes.logo__holder}`}>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/tt.svg"
                                        className={classes.brands__section_logo_tt}
                                        height={150}
                                        width={150}
                                        alt="Taste Tripping"
                                        />
                                    </figure>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/VICTORIE-TM-5.webp"
                                        className={classes.brands__section_logo}
                                        height={150}
                                        width={180}
                                        alt="Victorie Packaging"
                                        />
                                    </figure>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/The-Zoe-PH-edited.webp"
                                        className={classes.brands__section_logo}
                                        height={150}
                                        width={180}
                                        alt="The Zoe PH Logo"
                                        />
                                    </figure>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/bang-logo.webp"
                                        className={classes.brands__section_logo}
                                        height={150}
                                        width={180}
                                        alt="Bang Logo"
                                        />
                                    </figure>
                                </div>
                            </section>
                        </Container>
                    </aside >
                    <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                        <section 
                            className={`flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}
                            aria-labelledby="pricing-heading"
                            itemScope
                            itemType="https://schema.org/OfferCatalog"
                        >
                            <header className='d-flex flex-column justify-content-start align-items-start'>
                                <h2 
                                    className={classes.section__heading_header}
                                    id="pricing-heading"
                                    itemProp="name"
                                >
                                    Pricing
                                </h2>
                                <p className="fs-3" itemProp="description">Packages That I Offer</p>
                            </header>
                            <PricingCardsGrid 
                              cards={pricingCardsData}
                              gridClassName={classes.pricing_card_wrapper}
                              cardClassName={classes.services__section_pricing_card}
                            />
                            <PricingTable 
                              features={pricingFeaturesData}
                              contactLink="/contact"
                              buttonText="Get Started"
                            />
                        </section>
                    </Container>
                </SectionContainer>
                <aside 
                    className={`h-auto ${classes.brands_section}`}
                    aria-labelledby="custom-packages-heading"
                    role="complementary"
                >
                    <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                        <section className="d-flex flex-column justify-content-center align-items-center">
                            <header className="text-center">
                                <h2 className="text-center mb-4" id="custom-packages-heading">
                                    Custom Packages and Per Project Pricing Available Upon Request!
                                </h2>
                            </header>
                            <nav aria-label="Custom pricing inquiry">
                                <Link className={classes.link} passHref href="/contact">
                                    <button id={classes.services__section_inquire_btn} className={`${classes.services__section_pricing_card_btn} fs-3`}>Let&apos;s Connect</button>
                                </Link>
                            </nav>
                        </section>
                    </Container>
                    <Footer className='bg-white' role="contentinfo" aria-label="Site footer"/>
                </aside>
                </motion.div>
                <LogoBar />
            </div>
        
        </React.Fragment>
    )
};

export default Services;