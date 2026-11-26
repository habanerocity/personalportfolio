import React from "react";
import Head from "next/head";

import classes from "./case-studies.module.scss";

import NavigationBar from '../../../components/ui/NavigationBar';
import SectionContainer from '../../../components/ui/SectionContainer';
import CaseStudyHero from '../../../components/ui/hero/CaseStudyHero';

import pageFadeInAnimation from "../../../animations/pageFadeInAnimation";

import { motion } from 'framer-motion';

import { caseStudyHeroData } from '../../../data/case-studies/heroData';

const CaseStudies = () => {

    return (
    <React.Fragment>
        <Head>
            <title>Case Study: Real Estate Referral Network Platform | Lindy Ramirez</title>
            <link rel="canonical" href="https://www.lindyramirez.com/projects/case-studies/case-studies" />
            <meta
                name="description"
                content={caseStudyHeroData.description}
            />
            <meta name="author" content="Lindy Ramirez" />
        </Head>
        <div className={classes.pg}>
            <NavigationBar />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={pageFadeInAnimation}
            >
                <SectionContainer className={classes.hero__section_container}>
                    <CaseStudyHero {...caseStudyHeroData} />
                </SectionContainer>
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default CaseStudies;
