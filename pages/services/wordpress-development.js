import React from "react";
import Head from "next/head";

import classes from "./wordpress-development.module.scss";

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

import ReviewData from '../../components/ui/ReviewSlider/SliderData';

import { getServiceLandingPageBySlug } from '../../utils/contentfulServices';
import { transformServiceLandingPage } from '../../utils/transformers/serviceLandingPageTransformer';

const WordPressDevelopmentServices = ({ pageData }) => {

    return (
    <React.Fragment>
        <Head>
            <title>{pageData.seoTitle}</title>
            <link rel="canonical" href="https://www.lindyramirez.com/services/wordpress-development" />
            <meta
                name="description"
                content={pageData.seoDescription}
            />
            <meta name="author" content="Lindy Ramirez" />
            
            {/* Open Graph Metadata */}
            <meta property="og:title" content="Custom WordPress Development in Los Angeles - Lindy Ramirez" />
            <meta property="og:site_name" content="Lindy Ramirez | Web Developer" />
            <meta
                property="og:description"
                content="Professional WordPress development services in Los Angeles. Custom themes, plugin development, and website optimization for LA businesses."
            />

            {/* Geo-targeting */}
            <meta name="geo.region" content="US-CA" />
            <meta name="geo.placename" content="Los Angeles" />
            <meta name="geo.position" content="34.0522;-118.2437" />
            <meta name="ICBM" content="34.0522, -118.2437" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.lindyramirez.com/services/wordpress-development" />
            <meta property="og:image" content="https://www.lindyramirez.com/static/me_working-2.png" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Lindy Ramirez - WordPress Developer in Los Angeles" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Custom WordPress Development in Los Angeles - Lindy Ramirez" />
            <meta
                name="twitter:description"
                content="Professional WordPress development services in Los Angeles. Custom themes, plugin development, and website optimization for LA businesses."
            />
            <meta name="twitter:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "WordPress Development",
                    "name": "Custom WordPress Development Services",  
                    "description": "Professional WordPress development services in Los Angeles including custom themes, plugin development, and website optimization.", 
                    "provider": {
                        "@type": "Person",
                        "name": "Lindy Ramirez",
                        "url": "https://www.lindyramirez.com",
                        "jobTitle": "WordPress Developer",
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
                            "name": "Pasadena"
                        },
                        {
                            "@type": "City",
                            "name": "Tarzana"
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
                        "name": "WordPress Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Custom WordPress Theme Development",
                                    "description": "Custom WordPress themes designed to drive business growth"  
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "WordPress Plugin Development",
                                    "description": "Custom functionality and integrations for your WordPress site"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "WordPress Website Optimization",
                                    "description": "Performance tuning and speed optimization for WordPress"
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
                    "mainEntity": pageData.faqsData.faqs.map(faq => ({
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
                            "name": "WordPress Development",
                            "item": "https://www.lindyramirez.com/services/wordpress-development"
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
                window.scrollTo(0, 0);
                }}
            >
                <SectionContainer className={classes.hero__section_container}>
                    <ServiceHero {...pageData.hero} />
                </SectionContainer>
                <LandingPageSequenceOne {...pageData.sequenceOne} />
                <LandingPageSequenceTwo {...pageData.sequenceTwo} />
                <LandingPageSequenceThree
                    heading={pageData.sequenceThree.heading}
                    content={pageData.sequenceThree.content}
                    imageSrc={pageData.sequenceThree.image}
                    imageAlt={pageData.sequenceThree.imageAlt}
                    collageImages={pageData.sequenceThree.collageImages}
                />
                <ServicesSection {...pageData.services} />
                <TestimonialsSection heading={pageData.testimonialsHeading} />
                <FAQSection faqs={pageData.faqsData.faqs} heading={pageData.faqsData.heading} />
                <CTASection {...pageData.cta} />
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default WordPressDevelopmentServices;

export async function getStaticProps() {
    try{
        const entry = await getServiceLandingPageBySlug('wordpress-development');

        if(!entry){
            return {
                notFound: true,
                revalidate: 60
            }
        }

        const pageData = transformServiceLandingPage(entry);

        return {
            props: { pageData },
            revalidate: 3600
        }
    } catch(error){
        console.error("Error fetching data for WordPress Development Services page:", error);
        
        return {
            notFound: true,
            revalidate: 60
        }
    }
}