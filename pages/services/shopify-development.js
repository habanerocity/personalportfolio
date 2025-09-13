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

const WordPressDevelopmentServices = () => {

    return (
    <React.Fragment>
        <Head>
            <title>Shopify Development Services - Lindy Ramirez | Shopify Expert & Partner | Los Angeles, California</title>
            <meta
                name="description"
                content="Professional Shopify development services by Lindy Ramirez. Custom Shopify stores, dropshipping setup, theme development, and Shopify apps that drive sales and growth."
            />
            <meta
                name="keywords"
                content="shopify stores, shopify dropshipping, shopify website builder, shopify themes, shopify pricing, shopify expert, shopify online shopping, shopify partner, shopify apps, shopify store themes, shopify development, custom shopify themes, shopify ecommerce"
            />
            <meta name="author" content="Lindy Ramirez" />
            
            {/* Open Graph Metadata */}
            <meta property="og:title" content="Shopify Development Services - Lindy Ramirez | Shopify Expert" />
            <meta
                property="og:description"
                content="Professional Shopify development services by Shopify partner Lindy Ramirez. Custom Shopify stores, themes, apps, and dropshipping solutions that convert."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.lindyramirez.com/services/shopify-development" />
            <meta property="og:image" content="https://www.lindyramirez.com/static/me_working-2.png" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Shopify Development Services - Lindy Ramirez | Shopify Expert" />
            <meta
                name="twitter:description"
                content="Professional Shopify development services by certified Shopify partner Lindy Ramirez. Custom Shopify stores, themes, apps, and dropshipping solutions that convert."
            />
            <meta name="twitter:image" content="https://www.lindyramirez.com/static/me_working-2.png" />
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

export default WordPressDevelopmentServices;