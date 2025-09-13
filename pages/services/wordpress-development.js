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

import wordpressDevHeroData from '../../data/services/wordpress-development/heroData';
import sequenceOneData from '../../data/services/wordpress-development/sequenceOneData';
import sequenceTwoData from '../../data/services/wordpress-development/sequenceTwoData';
import sequenceThreeData from '../../data/services/wordpress-development/sequenceThreeData';
import wordpressServicesData from "../../data/services/wordpress-development/servicesData";
import ctaData from '../../data/services/wordpress-development/ctadata';
import sectionHeadingsData from "../../data/services/wordpress-development/sectionHeadingsData";
import wordpressFAQsData from "../../data/services/wordpress-development/faqsData";

const WordPressDevelopmentServices = () => {

    return (
    <React.Fragment>
        <Head>
            <title>WordPress Development Services - Lindy Ramirez | Freelance Web Developer</title>
            <meta
                name="description"
                content="Professional WordPress web design and development services by Lindy Ramirez. Custom themes, plugin development, and website optimization that get you results."
            />
            <meta
                name="keywords"
                content="WordPress development, custom WordPress themes, WordPress plugin development, website optimization, freelance web developer, Los Angeles"
            />
            <meta name="author" content="Lindy Ramirez" />
            
            {/* Open Graph Metadata */}
            <meta property="og:title" content="WordPress Development Services - Lindy Ramirez" />
            <meta
                property="og:description"
                content="Professional WordPress development services by Lindy Ramirez. Custom themes, plugin development, and website optimization tailored to your needs."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.lindyramirez.com/services/wordpress-development" />
            <meta property="og:image" content="https://www.lindyramirez.com/static/me_working-2.png" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="WordPress Development Services - Lindy Ramirez" />
            <meta
                name="twitter:description"
                content="Professional WordPress development services by Lindy Ramirez. Custom themes, plugin development, and website optimization tailored to your needs."
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
                    <ServiceHero {...wordpressDevHeroData} />
                </SectionContainer>
                <LandingPageSequenceOne {...sequenceOneData} />
                <LandingPageSequenceTwo {...sequenceTwoData} />
                <LandingPageSequenceThree {...sequenceThreeData} />
                <ServicesSection {...wordpressServicesData} sideImageSrc='/static/st_thomas_upstairs-2.webp' sideImageAlt='Web developer working on custom WordPress solutions' />
                <TestimonialsSection heading={sectionHeadingsData.sectionFive} />
                <FAQSection faqs={wordpressFAQsData} heading={sectionHeadingsData.sectionSix} />
                <CTASection {...ctaData} buttonText='Get Started Now' />
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default WordPressDevelopmentServices;