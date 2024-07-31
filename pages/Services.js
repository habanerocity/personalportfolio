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

import Link from "next/link";
import Image from "next/image";

import { pageFadeInAnimation } from "../animations/pageFadeInAnimation";

import serviceCardInfoData from "../data/serviceCardInfoData";

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
                    <SectionContainer className="min-h-auto">
                        <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                            <div className={classes.flex__container}>
                                <div className={`w-100 align-items-start text-start justify-content-start ${classes.headings__container}`}>
                                    <Headings heading="How I Can Help You">Services</Headings>        
                                </div>
                            </div>
                            <div className={classes.flex__container}>
                                <div className={`mt-5 ${classes.service__card_wrapper}`}>
                                        {serviceCardInfoData.map((serviceCard) => (
                                            <div key={serviceCard.id} className={`p-5 fs-4 ${classes.service__card}`}>
                                                <img className={classes.service__card_icon} src={serviceCard.icon} alt={serviceCard.altText} />
                                                <h2 className="mt-3">{serviceCard.title}</h2>
                                                <p className="mt-3">{serviceCard.description}</p>
                                                <Link className={`text-decoration-none fw-bold fs-3 ${classes.service__card_link}`} href="/Contact">
                                                    <span className='me-2'>
                                                        Get Started
                                                    </span>
                                                    <span>
                                                        <Image 
                                                        src={"/static/circle-arrow-up-diagonal.svg"}
                                                        alt="me"
                                                        height={20}
                                                        width={20}
                                                        className={classes.arrow__icon}
                                                        />
                                                    </span>
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </Container>
                    <div className={`h-auto ${classes.brands_section}`}>
                        <Container className={`d-flex flex-column position-relative ${classes.w85}`}>
                            <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                                <h2 className={classes.section__heading}>
                                    Some Brands I've Worked With
                                </h2>
                                <div className="d-flex flex-row justify-content-between align-items-start w-100 mt-5">
                                    <Image
                                    src="/static/tt.svg"
                                    height={150}
                                    width={150}
                                    alt="Taste Tripping"
                                    />
                                    <Image
                                    src="/static/VICTORIE-tm-5.png"
                                    height={150}
                                    width={180}
                                    alt="Victorie Packaging"
                                    />
                                    <Image
                                    src="/static/The-Zoe-PH-edited.png"
                                    height={150}
                                    width={180}
                                    alt="The Zoe PH Logo"
                                    />
                                    <Image
                                    src="/static/bang-logo.webp"
                                    height={150}
                                    width={180}
                                    alt="Bang Logo"
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>
                </SectionContainer>
                    
                </motion.div>
            </div>
        </React.Fragment>
    )
};

export default Services;