import React from "react";
import Head from "next/head";

import classes from "./landing-page-development.module.scss";

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

import landingPageDevHeroData from '../../data/services/landing-page-development/heroData';
import sequenceOneData from '../../data/services/landing-page-development/sequenceOneData';
import sequenceTwoData from '../../data/services/landing-page-development/sequenceTwoData';
import sequenceThreeData from '../../data/services/landing-page-development/sequenceThreeData';
import landingPageServicesData from "../../data/services/landing-page-development/servicesData";
import ctaData from '../../data/services/landing-page-development/ctadata';
import sectionHeadingsData from "../../data/services/wordpress-development/sectionHeadingsData";
import landingPageFAQsData from "../../data/services/landing-page-development/faqsData";

const WordPressDevelopmentServices = () => {

    return (
    <React.Fragment>
          <Head>
            <title>Custom Landing Page Development in Los Angeles | Lindy Ramirez</title>
            <link rel="canonical" href="https://www.lindyramirez.com/services/landing-page-development" />
            <meta
                name="description"
                content="Professional landing page development services in Los Angeles. Custom-coded, high-converting pages for lead generation and sales optimization by Lindy Ramirez."
            />
            <meta name="author" content="Lindy Ramirez" />
            
            {/* Geo-targeting */}
            <meta name="geo.region" content="US-CA" />
            <meta name="geo.placename" content="Los Angeles" />
            <meta name="geo.position" content="34.0522;-118.2437" />
            <meta name="ICBM" content="34.0522, -118.2437" />
            
            {/* Open Graph Metadata */}
            <meta property="og:title" content="Custom Landing Page Development in Los Angeles | Lindy Ramirez" />
            <meta property="og:site_name" content="Lindy Ramirez | Web Developer" />
            <meta
                property="og:description"
                content="Professional landing page development services in Los Angeles. Custom-coded, high-converting pages for lead generation and sales optimization."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.lindyramirez.com/services/landing-page-development" />
            <meta property="og:image" content="https://www.lindyramirez.com/static/me_working-2.png" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Lindy Ramirez | Landing Page Developer in Los Angeles" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Custom Landing Page Development in Los Angeles | Lindy Ramirez" />
            <meta
                name="twitter:description"
                content="Professional landing page development services in Los Angeles. Custom-coded, high-converting pages for lead generation and sales optimization."
            />
            <meta name="twitter:image" content="https://www.lindyramirez.com/static/st_thomas_up_close.webp" />
             <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Landing Page Development",
                    "name": "Custom Landing Page Development Services",
                    "description": "Professional landing page development services in Los Angeles including custom-coded pages, conversion optimization, and lead generation solutions.",
                    "provider": {
                        "@type": "Person",
                        "name": "Lindy Ramirez",
                        "url": "https://www.lindyramirez.com",
                        "jobTitle": "Web Developer",
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
                        "name": "Landing Page Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Custom Landing Page Development",
                                    "description": "Custom-coded landing pages built for maximum conversions"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Lead Generation Landing Pages",
                                    "description": "Conversion-optimized pages designed to capture qualified leads"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Sales Funnel Development",
                                    "description": "Multi-step funnels that guide visitors to purchase"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Landing Page Optimization",
                                    "description": "A/B testing and conversion rate optimization services"
                                }
                            }
                        ]
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5.0",
                        "reviewCount": "5"
                    }
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": landingPageFAQsData.map(faq => ({
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
                            "name": "Landing Page Development",
                            "item": "https://www.lindyramirez.com/services/landing-page-development"
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
                    <ServiceHero statValueFontSize={{ fontSize: "3rem", marginTop: "8px" }} iconBoxBgClass='bg-dark' {...landingPageDevHeroData} />
                </SectionContainer>
                <LandingPageSequenceOne {...sequenceOneData} />
                <LandingPageSequenceTwo {...sequenceTwoData} />
                <LandingPageSequenceThree {...sequenceThreeData} />
                <ServicesSection {...landingPageServicesData} sideImageSrc='/static/pexels_handshakex620.webp' sideImageAlt='Custom landing pages driving sales' />
                <TestimonialsSection heading={sectionHeadingsData.sectionFive} />
                <FAQSection heading={sectionHeadingsData.sectionSix} faqs={landingPageFAQsData} />
                <CTASection {...ctaData} buttonText='Get Started Now' />
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default WordPressDevelopmentServices;