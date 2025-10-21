import React from "react";
import Head from "next/head";

import classes from "./shopify-development.module.scss";

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

import shopifyDevHeroData from '../../data/services/shopify-development/heroData';
import sequenceOneData from '../../data/services/shopify-development/sequenceOneData';
import sequenceTwoData from '../../data/services/shopify-development/sequenceTwoData';
import sequenceThreeData from '../../data/services/shopify-development/sequenceThreeData';
import shopifyServicesData from "../../data/services/shopify-development/servicesData";
import ctaData from '../../data/services/shopify-development/ctadata';
import sectionHeadingsData from "../../data/services/wordpress-development/sectionHeadingsData";
import shopifyFAQsData from "../../data/services/shopify-development/faqsData";
import ReviewData from '../../components/ui/ReviewSlider/SliderData';

const ShopifyDevelopmentServices = () => {

    return (
    <React.Fragment>
        <Head>
            <title>Custom Shopify Development in Los Angeles | Lindy Ramirez</title>
            <link rel="canonical" href="https://www.lindyramirez.com/services/shopify-development" />
            <meta
                name="description"
                content="Professional Shopify development services in Los Angeles. Custom store setup, theme development, and app integrations for LA ecommerce businesses by Lindy Ramirez."
            />
            <meta name="author" content="Lindy Ramirez" />
            
            {/* Geo-targeting */}
            <meta name="geo.region" content="US-CA" />
            <meta name="geo.placename" content="Los Angeles" />
            <meta name="geo.position" content="34.0522;-118.2437" />
            <meta name="ICBM" content="34.0522, -118.2437" />
            
            {/* Open Graph Metadata */}
            <meta property="og:title" content="Custom Shopify Development in Los Angeles | Lindy Ramirez" />
            <meta
                property="og:description"
                content="Professional Shopify development services in Los Angeles. Custom store setup, theme development, and app integrations for LA ecommerce businesses."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.lindyramirez.com/services/shopify-development" />
            <meta property="og:image" content="https://www.lindyramirez.com/static/me_working-2.png" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Lindy Ramirez - Shopify Developer in Los Angeles" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Custom Shopify Development in Los Angeles - Lindy Ramirez" />
            <meta
                name="twitter:description"
                content="Professional Shopify development services in Los Angeles. Custom store setup, theme development, and app integrations for LA ecommerce businesses."
            />
            <meta name="twitter:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Shopify Development",
                    "name": "Custom Shopify Development Services",
                    "description": "Professional Shopify development services in Los Angeles including custom store setup, theme development, app integrations, and ecommerce optimization.",
                    "provider": {
                        "@type": "Person",
                        "name": "Lindy Ramirez",
                        "url": "https://www.lindyramirez.com",
                        "jobTitle": "Shopify Developer",
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
                            "name": "Tarzana"
                        },
                        {
                            "@type": "City",
                            "name": "Granada Hills"
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
                        "name": "Shopify Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Custom Shopify Store Setup",
                                    "description": "Complete Shopify store setup with custom design and functionality"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Shopify Theme Development",
                                    "description": "Custom Shopify themes tailored to your brand and business goals"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Shopify App Integration",
                                    "description": "Smooth integration of apps and third-party services"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Shopify Store Optimization",
                                    "description": "Performance optimization and conversion rate improvements"
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
                    "mainEntity": shopifyFAQsData.map(faq => ({
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
                            "name": "Shopify Development",
                            "item": "https://www.lindyramirez.com/services/shopify-development"
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
                    <ServiceHero statValueFontSize={{ fontSize: "3rem", marginTop: "8px" }} iconBoxBgClass='bg-dark' {...shopifyDevHeroData} />
                </SectionContainer>
                <LandingPageSequenceOne {...sequenceOneData} />
                <LandingPageSequenceTwo {...sequenceTwoData} />
                <LandingPageSequenceThree {...sequenceThreeData} />
                <ServicesSection {...shopifyServicesData} sideImageSrc='/static/online_shopping.webp' sideImageAlt='Shopify store owner increasing sales' />
                <TestimonialsSection heading={sectionHeadingsData.sectionFive} />
                <FAQSection heading={sectionHeadingsData.sectionSix} faqs={shopifyFAQsData} />
                <CTASection {...ctaData} buttonText='Get Started Now' />
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default ShopifyDevelopmentServices;