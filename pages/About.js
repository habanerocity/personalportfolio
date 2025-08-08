import React from 'react';
import { motion } from "framer-motion";

import classes from "./About.module.scss";

import Link from "next/link";
import Head from "next/head";

import Container from "react-bootstrap/Container";

import RenderToolList from '../components/RenderToolList.js';
import Button from "../components/ui/Button";
import FlexContainer from "../components/ui/FlexContainer";
import LogoBar from '../components/ui/LogoBar';
import NavigationBar from "../components/ui/NavigationBar";
import SectionContainer from "../components/ui/SectionContainer";
import ProfileHeader from '../components/ui/ProfileHeader';
import Headings from "../components/ui/Headings";
import Footer from "../components/ui/Footer";

import pageFadeInAnimation from "../animations/pageFadeInAnimation";

import ButtonPair from '../components/ui/ButtonPair.js';

const About = () => {

  return (
  <React.Fragment>
    <div className={classes.pg}>
        <Head>
          <title>
            About Me - Lindy Ramirez, Web Developer
          </title>
          <meta
            name="description"
            content="About me page for Lindy Ramirez, Freelance Web Developer. Learn more about me here."
          />
        </Head>
        <NavigationBar />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pageFadeInAnimation}
        >
          <SectionContainer>
            <Container className={classes.flex__container__col}>
              <div className={`justify-content-start ${classes.flex__container}`}>
                <div className={`align-items-start text-start justify-content-start ${classes.headings__container}`}>
                  <Headings heading="Who I Am">About Me</Headings>
                </div>
              </div>
              <FlexContainer>
                <div className={`${classes.about__card} justify-content-center align-items-start bg-white col-4`}>
                  <ProfileHeader />
                  <div className={`bg-white ${classes.bio__details}`}>
                    <div className="fs-4 pt-4">
                    Hey I’m Lindy, a freelance web developer specializing in custom WordPress and Shopify solutions that blend technical precision with marketing savvy. I help brands and businesses elevate their online presence through high-performance websites, tailored e-commerce experiences, and conversion-driven design. <br />
                    <br />
                    With a background in digital marketing and e-commerce, I build websites and plugins that drive growth. Whether it’s a performant custom WordPress theme, a scalable Shopify store with bespoke functionality, or a seamless WooCommerce integration, I bridge the gap between code and strategy to deliver results. <br />
                    <br />
                    My tech journey started with a childhood love for computers, which grew into a passion for solving real-world problems through clean, efficient code. When I’m not optimizing websites or building WordPress plugins, you’ll find me shooting hoops, hunting down the spiciest dishes, or planning my next adventure. <br />
                    <br />
                    Let’s connect to turn your vision into a powerful digital reality, or just chat about tech, travel, or tacos. Reach out anytime, I’m always up for exciting projects and great conversations.
                    </div>
                    <br />
                    <RenderToolList/>
                    <div className={`justify-content-between align-items-center ${classes.btn__container}`}>
                      <ButtonPair 
                      primaryCtaButtonText = "Contact Me" 
                      secondaryCtaButtonText = "View Services" 
                      secondaryCtaButtonLink = "/services"
                      buttonPadding = {classes.about__btn_padding}
                      centeredOnMobile={false}
                      aboutPage = {true}
                      />
                    </div>
                  </div>
                </div>
              </FlexContainer>
            </Container>
          </SectionContainer>
        </motion.div>
        <LogoBar />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;