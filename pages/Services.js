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

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Link from "next/link";
import Image from "next/image";

import pageFadeInAnimation from "../animations/pageFadeInAnimation";

import serviceCardInfoData from "../data/serviceCardInfoData";

import circle_question from '../public/static/circle-question.svg';

const Services = () => {

    const renderTooltip = (message) => (
        <Tooltip id="button-tooltip" className='fs-5'>
          {message}
        </Tooltip>
      );

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
                onAnimationComplete={() => {
                    console.log('Animation complete, scrolling to top');
                    window.scrollTo(0, 0);
                  }}
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
                            {/* <ul className="d-flex flex-row justify-content-center align-items-center w-100 mt-5 list-unstyled">
                                <li className="fs-1 fw-bold me-5">Monthly Subscription</li> 
                                <li className="fs-1 fw-bold" >Per Project</li>
                            </ul> */}
                            <div className={`d-flex flex-row justify-content-between align-items-center w-100 mt-5 ${classes.pricing_card_wrapper}`} >
                                <div className={`p-5 fs-4 ${classes.services__section_pricing_card}`} >
                                    <div className={`${classes.services__section_pricing_card_wrapper}`}>
                                        <div className='d-flex flex-row justify-content-between' >
                                            <div className='text-wrap d-flex flex-column justify-content-start align-items-start' >
                                                <h3 className="fs-2 fw-medium" >Basic</h3>
                                                <p className="fs-5" >Ideal for brands whom need consistent web maintenance, content management, and site optimization.</p>
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
                                </div>
                                <div className={`p-5 fs-4 ${classes.services__section_pricing_card}`} >
                                    <div className={`${classes.services__section_pricing_card_wrapper}`}>
                                        <div className='d-flex flex-row justify-content-between' >
                                            <div className='text-wrap d-flex flex-column justify-content-start align-items-start' >
                                                <h3 className="fs-2 fw-medium" >Standard</h3>
                                                <p className='fs-5' >Best suited for brands requiring custom development, web design, and SEO services to enhance their online presence.</p>
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
                                </div>
                                <div className={`p-5 fs-4 ${classes.services__section_pricing_card}`} >
                                    <div className={`${classes.services__section_pricing_card_wrapper}`}>
                                        <div className='d-flex flex-row justify-content-between' >
                                            <div className='text-wrap d-flex flex-column justify-content-start align-items-start' >
                                                <h3 className="fs-2 fw-medium" >Premium</h3>
                                                <p className='fs-5' >Perfect for brands looking for complete web development services and robust digital marketing strategies.</p>
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
                        </div>
                        <div className="container mt-4">
                            <table className="table fs-3">
                                <thead >
                                    <tr className='fs-2'>
                                        <th className={classes.table_cell} scope="col">Features</th>
                                        <th className={classes.table_cell} scope="col">Basic</th>
                                        <th className={classes.table_cell} scope="col">Standard</th>
                                        <th className={classes.table_cell} scope="col">Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip('Keep your website running smoothly with regular updates, security checks, and performance monitoring to ensure optimal functionality.')}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`}>
                                                <span className='me-2'>
                                                Web Maintenance & Support
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Efficiently manage and update your website's content to keep it fresh, relevant, and engaging for your audience.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Content Management
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Enhance your site's speed, responsiveness, and user experience with tailored optimizations that drive better performance.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Website Optimization
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("I'll create visually stunning and user-friendly web designs that align with your brand and captivate your audience.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Web Design
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("I'll develop unique, custom-made WordPress, Shopify, and landing page themes that bring your vision to life and offer seamless functionality.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Website Web/Theme Development
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Add advanced features and custom functionalities to your WordPress site with expertly crafted plugins.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                WordPress Plugin Development
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>&ndash;</td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Gain valuable database insights with custom SQL queries and detailed CSV reports that organize and present your data effectively.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Custom SQL Queries & CSV Reports
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>&ndash;</td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Boost your site's search engine visibility with on-page SEO strategies that optimize content, structure, and meta-data.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Onpage SEO
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Ensure your website is indexed correctly on Google and Bing, making it easier for potential customers to find you online.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Google/Bing Indexing
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Engage your audience and grow your brand with targeted social media campaigns that drive traffic and conversions.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Social Media Marketing
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className="fw-bold" >&ndash;</td>
                                        <td>&ndash;</td>
                                        <td>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("The allocated time each month dedicated to delivering the services included in your chosen package.")}
                                        >
                                            <td className={`d-flex ${classes.table_cell}`} >
                                                <span className='me-2'>
                                                Hours Per Month
                                                </span>
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </td>
                                        </OverlayTrigger>
                                        <td className={classes.table_cell} >20</td>
                                        <td className={classes.table_cell} >45</td>
                                        <td className={classes.table_cell} >75</td>
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
                            <div className="text-center d-flex flex-column justify-content-center align-items-center my-5">
                                <h1 className="my-4">
                                    Custom Packages and Per Project Pricing Available Upon Request!
                                </h1>
                                <Link className={classes.link} passHref href="/Contact">
                                    <button className={`${classes.services__section_pricing_card_btn} fs-3`}>Inquire Now</button>
                                </Link>
                            </div>
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