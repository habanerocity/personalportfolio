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

import pageFadeInAnimation from "../animations/pageFadeInAnimation";

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
                                                <div className={classes.service__card_content_wrapper}>
                                                    <div className={classes.service__card_content}>
                                                        <img className={classes.service__card_icon} src={serviceCard.icon} alt={serviceCard.altText} />
                                                        <h2 className="mt-3">{serviceCard.title}</h2>
                                                        <p className="mt-3">{serviceCard.description}</p>
                                                    </div>
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
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </Container>
                    <div className={`h-auto ${classes.brands_section}`}>
                        <Container className={`d-flex flex-column position-relative ${classes.w85}`}>
                            <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                                <h2 className={classes.section__heading_header}>
                                    Some Brands I've Worked With
                                </h2>
                                <div className={`d-flex flex-row flex-wrap justify-content-between align-items-center w-100 mt-5 ${classes.logo__holder}`}>
                                    <Image
                                    src="/static/tt.svg"
                                    className={classes.brands__section_logo_tt}
                                    height={150}
                                    width={150}
                                    alt="Taste Tripping"
                                    />
                                    <Image
                                    src="/static/VICTORIE-tm-5.png"
                                    className={classes.brands__section_logo}
                                    height={150}
                                    width={180}
                                    alt="Victorie Packaging"
                                    />
                                    <Image
                                    src="/static/The-Zoe-PH-edited.png"
                                    className={classes.brands__section_logo}
                                    height={150}
                                    width={180}
                                    alt="The Zoe PH Logo"
                                    />
                                    <Image
                                    src="/static/bang-logo.webp"
                                    className={classes.brands__section_logo}
                                    height={150}
                                    width={180}
                                    alt="Bang Logo"
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Container className={`d-flex flex-column position-relative ${classes.w85}`}>
                        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                            <div className='d-flex flex-column justify-content-start align-items-start'>
                                <h2 className={classes.section__heading_header}>
                                    Pricing
                                </h2>
                                <p className="fs-3">Packages That I Offer</p>
                            </div>
                            <ul className="d-flex flex-row justify-content-center align-items-center w-100 mt-5 list-unstyled">
                                <li className="fs-1 fw-bold me-5">Monthly Subscription</li> 
                                <li className="fs-1 fw-bold" >Per Project</li>
                            </ul>
                            <div className={`d-flex flex-row justify-content-between align-items-center w-100 mt-5 ${classes.pricing_card_wrapper}`} >
                                <div className={`p-5 fs-4 ${classes.services__section_pricing_card}`} >
                                    <div className='d-flex flex-row' >
                                        <div className='text-wrap d-flex flex-column justify-content-start align-items-start' >
                                            <h3 className="fs-2 fw-medium" >Basic</h3>
                                            <p className="fs-5" >Web maintenance and content management services</p>
                                        </div>
                                        <div className={classes.services__section_pricing_card_icon} >
                                            <Image
                                            src="/static/gem-solid.svg"
                                            height={30}
                                            width={30}
                                            alt="Basic Package Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-start align-items-end mt-3' >
                                        <span className='display-4 fw-bold me-1' >$199</span><span>USD per month</span>
                                    </div>
                                    <Link className={classes.link} passHref href="/Contact">
                                        <button className={`${classes.services__section_pricing_card_btn} w-100 fs-3 mt-5`}>Get Started</button>
                                    </Link>
                                </div>
                                <div className={`p-5 fs-4 ${classes.services__section_pricing_card}`} >
                                    <div className='d-flex flex-row' >
                                        <div className='text-wrap d-flex flex-column justify-content-start align-items-start' >
                                            <h3 className="fs-2 fw-medium" >Standard</h3>
                                            <p className='fs-5' >Basic package plus custom web development services</p>
                                        </div>
                                        <div className={classes.services__section_pricing_card_icon} >
                                            <Image
                                            src="/static/star-solid.svg"
                                            height={30}
                                            width={30}
                                            alt="Basic Package Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-start align-items-end mt-3' >
                                        <span className='display-4 fw-bold me-1' >$399</span><span>USD per month</span>
                                    </div>
                                    <Link className={classes.link} passHref href="/Contact">
                                        <button className={`${classes.services__section_pricing_card_btn} w-100 fs-3 mt-5`}>Get Started</button>
                                    </Link>
                                </div>
                                <div className={`p-5 fs-4 ${classes.services__section_pricing_card}`} >
                                    <div className='d-flex flex-row' >
                                        <div className='text-wrap d-flex flex-column justify-content-start align-items-start' >
                                            <h3 className="fs-2 fw-medium" >Premium</h3>
                                            <p className='fs-5' >Standard package plus digital marketing services</p>
                                        </div>
                                        <div className={classes.services__section_pricing_card_icon} >
                                            <Image
                                            src="/static/crown-solid.svg"
                                            height={30}
                                            width={30}
                                            alt="Basic Package Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-start align-items-end mt-3' >
                                        <span className='display-4 fw-bold me-1' >$649</span><span>USD per month</span>
                                    </div>
                                    <Link className={classes.link} passHref href="/Contact">
                                        <button className={`${classes.services__section_pricing_card_btn} w-100 fs-3 mt-5`}>Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-4">
                            <table className="table fs-3">
                                <thead >
                                    <tr className='fs-2'>
                                        <th scope="col">Features</th>
                                        <th scope="col">Basic</th>
                                        <th scope="col">Standard</th>
                                        <th scope="col">Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Web Maintenance</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Content Management</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Website Optimization</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Web Design</td>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Web/Theme Development</td>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>WordPress Plugin Development</td>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>&ndash;</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom SQL Queries & CSV Reports</td>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>&ndash;</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Onpage SEO</td>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Google/Bing Indexing</td>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Social Media Marketing</td>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>&ndash;</td>
                                        <td>
                                            <Image
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hours Per Month</td>
                                        <td>15</td>
                                        <td>25</td>
                                        <td>45</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <Link className={classes.link} passHref href="/Contact">
                                                <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>Get Started</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link className={classes.link} passHref href="/Contact">
                                                <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>Get Started</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link className={classes.link} passHref href="/Contact">
                                                <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>Get Started</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Container>
                </SectionContainer>
                    
                </motion.div>
                <LogoBar />
            </div>
        <Footer />
        </React.Fragment>
    )
};

export default Services;