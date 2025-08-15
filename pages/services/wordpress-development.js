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
            <title>Services - Lindy Ramirez | Freelance Web Developer</title>
            <meta
                name="description"
                content="Services page for Lindy Ramirez, Freelance Web Developer. View my services here."
            />
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
                <ServicesSection {...wordpressServicesData} sideImageSrc='/static/st_thomas_upstairs-2.webp' />
                <TestimonialsSection heading={sectionHeadingsData.sectionFive} />
                <FAQSection faqs={wordpressFAQsData} heading={sectionHeadingsData.sectionSix} />
                <CTASection {...ctaData} buttonText='Get Started Now' />
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default WordPressDevelopmentServices;