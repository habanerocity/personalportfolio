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

import PricingTable from '../../components/ui/PricingTable/PricingTable';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Link from "next/link";
import Image from "next/image";

import pageFadeInAnimation from "../../animations/pageFadeInAnimation";

import serviceCardInfoData from "../../data/serviceCardInfoData";

import pricingFeaturesData from "../../data/services/pricingFeaturesData";

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
            <div className={classes.pg} itemScope itemType="https://schema.org/WebPage">
                <NavigationBar />
                <motion.div
                initial="hidden"
                animate="visible"
                variants={pageFadeInAnimation}
                onAnimationStart={pageFadeInAnimation.onAnimationStart}
                >
                    <SectionContainer className="min-h-auto">
                        <Container className={`d-flex flex-column position-relative ${classes.flex__container__top_section}`}>
                            <section className={classes.flex__container} aria-labelledby="services-heading" role="banner">
                                <header className={`w-100 align-items-start text-start justify-content-start ${classes.headings__container}`}>
                                    <Headings id="services-heading" itemProp="name" heading="How I Can Help You">Services</Headings>      
                                </header>
                            </section>
                            <section className='row mt-5 gx-0' aria-labelledby="growth-heading" itemScope itemType="https://schema.org/Service">
                                <aside className='col-12 px-0 col-lg-6 d-flex position-relative' role="complementary">
                                    <Image
                                        src='/static/optimized/st_thomas_up_close-optimized.webp' // Use optimized version
                                        fill={true} // Use fill instead of layout='fill'
                                        className={`${classes.office_img} position-relative`}
                                        alt='Office Desk with modern workspace setup'
                                        priority={true} // Set priority to true for LCP image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                        quality={85}
                                        style={{ objectFit: 'cover' }}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                    />  
                                </aside>
                                <article itemProp="description" className={`col-12 col-lg-6 d-flex position-relative flex-column justify-content-center align-items-start p-5 ${classes.services__banner_text_content}`} >
                                    <header>
                                        <h2 id="growth-heading" className={`${classes.services__banner_subheading}`}>Growth On Autopilot</h2>
                                        <p className={`fw-bold text-white ${classes.services__banner_heading}`} itemProp="name" >
                                            From Worry-Free Website Maintenance To Complete Growth Strategies
                                        </p>
                                    </header>
                                    <p itemProp="description" className={`text-white mt-4 ${classes.services__banner_description}`} >
                                        Stop worrying about your website and digital marketing — let me handle it. My monthly service packages keep your site fast, secure, and optimized while implementing growth-focused strategies that boost traffic and drive conversions. Whether you need simple updates or a full-scale online presence overhaul, I’ve got you covered.
                                    </p>
                                </article >
                            </section>
                            <section className={classes.flex__container}  aria-labelledby="service-offerings-heading">
                                <h2 id="service-offerings-heading" className={classes.visually_hidden}>
                                    Available Services
                                </h2>
                                <div className={`mt-5 ${classes.service__card_wrapper}`} itemScope itemType="https://schema.org/ItemList">
                                    {serviceCardInfoData.map((serviceCard, index) => (
                                        <article 
                                            key={serviceCard.id} 
                                            className={`p-5 fs-4 ${classes.service__card}`}
                                            itemScope
                                            itemType="https://schema.org/Service"
                                            itemProp="itemListElement"
                                        >
                                            <div className={classes.service__card_content_wrapper}>
                                                <header className={classes.service__card_content}>
                                                    <div role="img" aria-label={serviceCard.altText}>
                                                        <Image 
                                                            className={classes.service__card_icon} 
                                                            src={serviceCard.icon} 
                                                            alt={serviceCard.altText} 
                                                            width={40} 
                                                            height={40} 
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <h3 className="mt-3" itemProp="name">{serviceCard.title}</h3>
                                                    <p className="mt-3" itemProp="description">{serviceCard.description}</p>
                                                </header>
                                                <nav aria-label={`${serviceCard.title} actions`}>
                                                    <ButtonPair 
                                                        primaryCtaButtonText="Get Started" 
                                                        secondaryCtaButtonText="Learn More" 
                                                        secondaryCtaButtonLink={`/services/${serviceCard.link}`} 
                                                        flexCol={true} 
                                                        fullWidth={true} 
                                                    />
                                                </nav>
                                            </div>
                                            <meta itemProp="position" content={index + 1} />
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </Container>
                    <aside  className={`h-auto ${classes.brands_section}`} aria-labelledby="brands-heading" role="complementary">
                        <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                            <section className={` flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                                <header>
                                    <h2 id="brands-heading" className={classes.section__heading_header}>
                                        Some Brands I&apos;ve Worked With
                                    </h2>
                                </header>
                                <div role="list" aria-label="Client brand logos" className={`d-flex flex-row flex-wrap justify-content-between align-items-center w-100 mt-5 ${classes.logo__holder}`}>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/tt.svg"
                                        className={classes.brands__section_logo_tt}
                                        height={150}
                                        width={150}
                                        alt="Taste Tripping"
                                        />
                                    </figure>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/VICTORIE-TM-5.webp"
                                        className={classes.brands__section_logo}
                                        height={150}
                                        width={180}
                                        alt="Victorie Packaging"
                                        />
                                    </figure>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/The-Zoe-PH-edited.webp"
                                        className={classes.brands__section_logo}
                                        height={150}
                                        width={180}
                                        alt="The Zoe PH Logo"
                                        />
                                    </figure>
                                    <figure role="listitem">
                                        <Image
                                        src="/static/bang-logo.webp"
                                        className={classes.brands__section_logo}
                                        height={150}
                                        width={180}
                                        alt="Bang Logo"
                                        />
                                    </figure>
                                </div>
                            </section>
                        </Container>
                    </aside >
                    <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                        <div className={`flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
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
                            <PricingTable 
                              features={pricingFeaturesData}
                              contactLink="/contact"
                              buttonText="Get Started"
                            />
                        </div>
                    </Container>
                </SectionContainer>
                <div className={`h-auto ${classes.brands_section}`}>
                    <Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="text-center mb-4">
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