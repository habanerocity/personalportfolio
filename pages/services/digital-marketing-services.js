import React from "react";
import Head from "next/head";

import classes from "./digital-marketing-services.module.scss";

import NavigationBar from '../../components/ui/NavigationBar';
import SectionContainer from '../../components/ui/SectionContainer';
import ServiceHero from '../../components/ui/hero/ServiceHero';
import LandingPageSequenceOne from "../../components/ui/LandingPageSequence/LandingPageSequenceOne";
import LandingPageSequenceTwo from "../../components/ui/LandingPageSequence/LandingPageSequenceTwo";
import LandingPageSequenceThree from "../../components/ui/LandingPageSequence/LandingPageSequenceThree";
import ServicesSection from "../../components/ui/ServicesSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import FAQSection from "../../components/ui/FAQSection";
import CTASection from "../../components/ui/CTASection";

import pageFadeInAnimation from "../../animations/pageFadeInAnimation";

import { motion } from 'framer-motion';

import digitalMarketingServicesHeroData from '../../data/services/digital-marketing-services/heroData';
import sequenceOneData from '../../data/services/digital-marketing-services/sequenceOneData';
import sequenceTwoData from '../../data/services/digital-marketing-services/sequenceTwoData';
import sequenceThreeData from '../../data/services/digital-marketing-services/sequenceThreeData';
import digitalMarketingServicesData from "../../data/services/digital-marketing-services/servicesData";
import ctaData from '../../data/services/digital-marketing-services/ctadata';
import sectionHeadingsData from "../../data/services/digital-marketing-services/sectionHeadingsData";
import digitalMarketingFAQsData from "../../data/services/digital-marketing-services/faqsData";
import ReviewData from '../../components/ui/ReviewSlider/SliderData';

const DigitalMarketingServices = () => {

    return (
    <React.Fragment>
       <Head>
            <title>Digital Marketing Services in Los Angeles | Lindy Ramirez</title>
            <link rel="canonical" href="https://www.lindyramirez.com/services/digital-marketing-services" />
            <meta
                name="description"
                content="Professional digital marketing services in Los Angeles. SEO, PPC, social media marketing, and content marketing strategies by Lindy Ramirez."
            />
            <meta name="author" content="Lindy Ramirez" />
            
            {/* Geo-targeting */}
            <meta name="geo.region" content="US-CA" />
            <meta name="geo.placename" content="Los Angeles" />
            <meta name="geo.position" content="34.0522;-118.2437" />
            <meta name="ICBM" content="34.0522, -118.2437" />
            
            {/* Open Graph Metadata */}
            <meta property="og:title" content="Digital Marketing Services in Los Angeles | Lindy Ramirez" />
            <meta property="og:site_name" content="Lindy Ramirez | Web Developer" />
            <meta
                property="og:description"
                content="Professional digital marketing services in Los Angeles. SEO, PPC, social media marketing, and content marketing strategies."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.lindyramirez.com/services/digital-marketing-services" />
            <meta property="og:image" content="https://www.lindyramirez.com/static/me_working-2.png" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Lindy Ramirez | Digital Marketing Expert in Los Angeles" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Digital Marketing Services in Los Angeles | Lindy Ramirez" />
            <meta
                name="twitter:description"
                content="Professional digital marketing services in Los Angeles. SEO, PPC, social media marketing, and content marketing strategies."
            />
            <meta name="twitter:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Digital Marketing",
                    "name": "Digital Marketing Services",
                    "description": "Professional digital marketing services in Los Angeles including SEO, PPC advertising, social media marketing, and content marketing strategies.",
                    "provider": {
                        "@type": "Person",
                        "name": "Lindy Ramirez",
                        "url": "https://www.lindyramirez.com",
                        "jobTitle": "Digital Marketing Expert",
                        "email": "hello@lindyramirez.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Los Angeles",
                            "addressRegion": "CA",
                            "addressCountry": "US"
                        }
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
                    "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "priceRange": "$$",
                        "url": "https://www.lindyramirez.com/contact"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Digital Marketing Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Search Engine Optimization (SEO)",
                                    "description": "Comprehensive SEO strategies to improve search rankings"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Pay-Per-Click (PPC) Advertising",
                                    "description": "Targeted advertising campaigns for maximum ROI"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Social Media Marketing",
                                    "description": "Strategic social media campaigns to boost brand awareness"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Content Marketing",
                                    "description": "Engaging content strategies that drive traffic and conversions"
                                }
                            }
                        ]
                    }
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Lindy Ramirez Web Development",
                    "url": "https://www.lindyramirez.com",
                    "founder": {
                        "@type": "Person",
                        "name": "Lindy Ramirez"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Los Angeles",
                        "addressRegion": "CA",
                        "addressCountry": "US"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5.0",
                        "reviewCount": ReviewData.length.toString(),
                        "bestRating": "5",
                        "worstRating": "1"
                    },
                    "review": ReviewData.map(review => ({
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": review.name,
                            "worksFor": {
                                "@type": "Organization",
                                "name": review.company,
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": review.city,
                                    "addressRegion": review.state,
                                    "addressCountry": review.state === "Philippines" ? "PH" : "US"
                                }
                            }
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "reviewBody": review.feedback,
                        "itemReviewed": {
                            "@type": "Organization",
                            "name": "Lindy Ramirez Web Development",
                            "url": "https://www.lindyramirez.com"
                        }
                    }))
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": digitalMarketingFAQsData.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
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
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Digital Marketing Services",
                            "item": "https://www.lindyramirez.com/services/digital-marketing-services"
                        }
                    ]
                })}
            </script>
        </Head>
        <div className={classes.pg}>
            <NavigationBar />
            <motion.div
            initial="hidden"
            animate="visible"
            variants={pageFadeInAnimation}
            onAnimationComplete={() => {
                console.log('Animation complete, scrolling to top');
                window.scrollTo(0, 0);
                }}
            >
                <SectionContainer className={classes.hero__section_container}>
                    <ServiceHero statValueFontSize={{ fontSize: "3rem", marginTop: "8px" }} iconBoxBgClass='bg-dark' {...digitalMarketingServicesHeroData} />
                </SectionContainer>
                <LandingPageSequenceOne {...sequenceOneData} />
                <LandingPageSequenceTwo {...sequenceTwoData} />
                <LandingPageSequenceThree {...sequenceThreeData} />
                <ServicesSection {...digitalMarketingServicesData} sideImageSrc='/static/plantsx467w.webp' sideImageAlt='Small business owner building online presence with digital marketing' />
                <TestimonialsSection heading={sectionHeadingsData.sectionFive} />
                <FAQSection heading={sectionHeadingsData.sectionSix} faqs={digitalMarketingFAQsData} />
                <CTASection {...ctaData} buttonText='Get Started Now' />
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default DigitalMarketingServices;