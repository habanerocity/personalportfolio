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
import sectionHeadingsData from "../../data/services/wordpress-development/sectionHeadingsData";
import digitalMarketingFAQsData from "../../data/services/digital-marketing-services/faqsData";

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
                    <ServiceHero statValueFontSize={{ fontSize: "3rem", marginTop: "8px" }} iconBoxBgClass='bg-dark' {...digitalMarketingServicesHeroData} />
                </SectionContainer>
                <LandingPageSequenceOne {...sequenceOneData} />
                <LandingPageSequenceTwo {...sequenceTwoData} />
                <LandingPageSequenceThree {...sequenceThreeData} />
                <ServicesSection {...digitalMarketingServicesData} sideImageSrc='/static/plantsx467w.webp' />
                <TestimonialsSection heading={sectionHeadingsData.sectionFive} />
                <FAQSection heading={sectionHeadingsData.sectionSix} faqs={digitalMarketingFAQsData} />
                <CTASection {...ctaData} buttonText='Get Started Now' />
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default WordPressDevelopmentServices;