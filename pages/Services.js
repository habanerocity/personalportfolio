import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import classes from "./Services.module.scss";

import NavigationBar from '../components/ui/NavigationBar';
import LogoBar from '../components/ui/LogoBar';
import Footer from '../components/ui/Footer';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';

import { pageFadeInAnimation } from "../animations/pageFadeInAnimation";

const Services = () => {

    return(

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
                >
                    <SectionContainer>
                    <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                        <div className={classes.flex__container}>
                            <div className={`w-100 align-items-start text-start justify-content-start ${classes.headings__container}`}>
                                <Headings heading="How I Can Help You">Services</Headings>        
                            </div>
                        </div>
                    </Container>
                    </SectionContainer>
                </motion.div>
            </div>
        </React.Fragment>
    )
};

export default Services;