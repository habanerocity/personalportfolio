import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import classes from "./index.module.scss";

import NavigationBar from '../../components/ui/NavigationBar';
import LogoBar from '../../components/ui/LogoBar';
import Footer from '../../components/ui/Footer';
import SectionContainer from '../../components/ui/SectionContainer';
import Headings from '../../components/ui/Headings';
import ButtonPair from "../../components/ui/ButtonPair";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Link from "next/link";
import Image from "next/image";

import pageFadeInAnimation from "../../animations/pageFadeInAnimation";

import serviceCardInfoData from "../../data/serviceCardInfoData";

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
                onAnimationStart={pageFadeInAnimation.onAnimationStart}
                >
                    <SectionContainer className="min-h-auto">
                        <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                            <div className={classes.flex__container}>
                                <div className={`w-100 align-items-start text-start justify-content-start ${classes.headings__container}`}>
                                    <Headings heading="How I Can Help You">Services</Headings>      
                                </div>
                            </div>
                            <div className='row mt-5 gx-0'>
                                <div className='col-12 px-0 col-lg-6 d-flex position-relative' >
                                    <Image
                                    src='/static/st_thomas_up_close.webp'
                                    layout='fill'
                                    className={`${classes.office_img} position-relative`}
                                    alt='Office Desk'
                                    />  
                                </div>
                                <div className={`col-12 col-lg-6 d-flex position-relative flex-column justify-content-center align-items-start p-5 ${classes.services__banner_text_content}`} >
                                    <h2 className={`${classes.services__banner_subheading}`}>Growth On Autopilot</h2>
                                    <div className={`fw-bold text-white ${classes.services__banner_heading}`} >
                                        From Worry-Free Website Maintenance To Complete Growth Strategies
                                    </div>
                                    <div className={`text-white mt-4 ${classes.services__banner_description}`} >
                                        Stop worrying about your website and digital marketing — let me handle it. My monthly service packages keep your site fast, secure, and optimized while implementing growth-focused strategies that boost traffic and drive conversions. Whether you need simple updates or a full-scale online presence overhaul, I’ve got you covered.
                                    </div>
                                </div>
                            </div>
                            <div className={classes.flex__container}>
                                <div className={`mt-5 ${classes.service__card_wrapper}`}>
                                        {serviceCardInfoData.map((serviceCard) => (
                                            <div key={serviceCard.id} className={`p-5 fs-4 ${classes.service__card}`}>
                                                <div className={classes.service__card_content_wrapper}>
                                                    <div className={classes.service__card_content}>
                                                        <Image className={classes.service__card_icon} src={serviceCard.icon} alt={serviceCard.altText} width={40} height={40} />
                                                        <h2 className="mt-3">{serviceCard.title}</h2>
                                                        <p className="mt-3">{serviceCard.description}</p>
                                                    </div>
                                                    <ButtonPair primaryCtaButtonText="Get Started" secondaryCtaButtonText="Learn More" secondaryCtaButtonLink={`/services/${serviceCard.link}`} flexCol={true} fullWidth={true} />
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </Container>
                    <div className={`h-auto ${classes.brands_section}`}>
                        <Container className={`d-flex flex-column position-relative`}>
                            <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                                <h2 className={classes.section__heading_header}>
                                    Some Brands I&apos;ve Worked With
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
                                    src="/static/VICTORIE-TM-5.webp"
                                    className={classes.brands__section_logo}
                                    height={150}
                                    width={180}
                                    alt="Victorie Packaging"
                                    />
                                    <Image
                                    src="/static/The-Zoe-PH-edited.webp"
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
                    <Container className={`d-flex flex-column position-relative`}>
                        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                            <div className='d-flex flex-column justify-content-start align-items-start'>
                                <h2 className={classes.section__heading_header}>
                                    Pricing
                                </h2>
                                <p className="fs-3">Packages That I Offer</p>
                            </div>
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
                                        <Link className={classes.link} passHref href="/contact">
                                            <button className={`${classes.services__section_pricing_card_btn} w-100 fs-3 mt-5`}>Get Started</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`p-5 fs-4 ${classes.services__section_pricing_card} ${classes.standard_card}`} >
                                    <div className={classes.popular_badge}>Most Popular</div>
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
                                            <span className='display-4 fw-bold me-1' >$650</span><span>USD per month</span>
                                        </div>
                                        <Link className={classes.link} passHref href="/contact">
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
                                            <span className='display-4 fw-bold me-1' >$1099</span><span>USD per month</span>
                                        </div>
                                        <Link className={classes.link} passHref href="contact">
                                            <button className={`${classes.services__section_pricing_card_btn} w-100 fs-3 mt-5`}>Get Started</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <table className={`table table-striped mt-5 mb-0 fs-3 ${classes.table}`}>
                                <thead>
                                    <tr className='fs-2'>
                                        <th scope="col">Features</th>
                                        <th scope="col">Basic</th>
                                        <th scope="col">Standard</th>
                                        <th scope="col">Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Web Maintenance & Support
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip('Keep your website running smoothly with regular plugin updates, security checks, and performance monitoring to ensure optimal functionality.')}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Content Management
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("I&apos;ll efficiently manage and update your website&apos;s content to keep it fresh, relevant, and engaging for your audience.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Website Optimization
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("Enhance your site's speed, responsiveness, and user experience with tailored optimizations that drive better performance.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Web Design
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("I'll create visually stunning and user-friendly web designs that align with your brand and captivate your audience.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className="fw-bold align-middle" >&ndash;</td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Website/Theme Development
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("I'll develop unique, custom-made WordPress, Shopify, and landing page themes that bring your vision to life and offer seamless functionality.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className="fw-bold align-middle" >&ndash;</td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            WordPress Plugin Development
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("Add advanced features and custom functionalities to your WordPress site with expertly crafted plugins.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className="fw-bold align-middle" >&ndash;</td>
                                        <td className='align-middle'>&ndash;</td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Custom SQL Queries & Reports
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("Gain valuable database insights with custom SQL queries and detailed CSV reports that organize and present your data effectively.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className="fw-bold align-middle" >&ndash;</td>
                                        <td className='align-middle'>&ndash;</td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Onpage SEO
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("Boost your site's search engine visibility with on-page SEO strategies that optimize content, structure, and meta-data.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className="fw-bold align-middle" >&ndash;</td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Google/Bing Indexing
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("Ensure your website is indexed correctly on Google and Bing, making it easier for potential customers to find you online.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className="fw-bold align-middle" >&ndash;</td>
                                        <td className='align-middle'>
                                            <Image
                                            className={classes.table_cell_check}
                                            src="/static/check.svg"
                                            height={25}
                                            width={25}
                                            alt="Check"
                                            />
                                        </td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Social Media Marketing
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("Engage your audience and grow your brand with targeted social media campaigns that drive traffic and conversions.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className="fw-bold align-middle" >&ndash;</td>
                                        <td className='align-middle'>&ndash;</td>
                                        <td className='align-middle'>
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
                                        <td className={`d-flex ${classes.table_cell}`}>
                                            <span className='me-2'>
                                            Hours Per Month
                                            </span>
                                            <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip("The allocated time each month dedicated to delivering the services included in your chosen package.")}
                                            >
                                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                                    <Image
                                                    src="/static/circle-question.svg"
                                                    height={15}
                                                    width={15}
                                                    alt="Web Maintenance & Support Breakdown"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td className={`align-middle ${classes.table_cell}`} >10</td>
                                        <td className={`align-middle ${classes.table_cell}`} >35</td>
                                        <td className={`align-middle ${classes.table_cell}`} >60</td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'></td>
                                        <td className='align-middle'>
                                            <Link className={classes.link} passHref href="/contact">
                                                <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>Get Started</button>
                                            </Link>
                                        </td>
                                        <td className='align-middle'>
                                            <Link className={classes.link} passHref href="/contact">
                                                <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>Get Started</button>
                                            </Link>
                                        </td>
                                        <td className='align-middle'>
                                            <Link className={classes.link} passHref href="/contact">
                                                <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>Get Started</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="container mt-4">
                            
                        
                        </div> */}
                    </Container>
                </SectionContainer>
                <div className={`h-auto ${classes.brands_section}`}>
                    <Container className={`d-flex flex-column position-relative`}>
                        <div className="d-flex flex-column justify-content-center align-items-center my-5">
                            <h1 className="text-center my-4">
                                Custom Packages and Per Project Pricing Available Upon Request!
                            </h1>
                            <Link className={classes.link} passHref href="/Contact">
                                <button id={classes.services__section_inquire_btn} className={`${classes.services__section_pricing_card_btn} fs-3`}>Inquire Now</button>
                            </Link>
                        </div>
                    </Container>
                    <Footer className='bg-white' />
                </div>
                </motion.div>
                <LogoBar />
            </div>
        
        </React.Fragment>
    )
};

export default Services;