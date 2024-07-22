import React from 'react';
import { motion } from "framer-motion";

import classes from "./About.module.scss";

import Link from "next/link";
import Head from "next/head";

import Container from "react-bootstrap/Container";

import ToolList from '../components/ui/ToolList';
import Button from "../components/ui/Button";
import FlexContainer from "../components/ui/FlexContainer";
import LogoBar from '../components/ui/LogoBar';
import NavigationBar from "../components/ui/NavigationBar";
import SectionContainer from "../components/ui/SectionContainer";
import ProfileHeader from '../components/ui/ProfileHeader';
import Headings from "../components/ui/Headings";
import Footer from "../components/ui/Footer";

import pageFadeInAnimation from "../components/animations/pageFadeInAnimation";

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
              <div className={classes.flex__container}>
                <div className={classes.headings__container}>
                  <Headings heading="Who I Am">About Me</Headings>
                </div>
              </div>
              <FlexContainer>
                <div className={`${classes.about__card} col-4`}>
                  <ProfileHeader />
                  <div className={classes.bio__details}>
                    <div className="fs-4 pt-4">
                      Hey, I&apos;m Lindy, a freelance web developer deeply rooted in digital marketing and the e-commerce world. With a track record of helping brands improve their online presence and conversion rates, my journey in tech began with a childhood love for computers, evolving into a problem-solving mission. Beyond coding, I&apos;m a big fan of basketball and soccer, an adventure-seeking traveler, and a spicy food aficionado. If you&apos;re looking to collaborate on a project or just chat tech and shared interests, feel free to reach out—I&apos;m always up for new ventures.
                    </div>
                    <br />
                    <ToolList />
                    <div className={classes.btn__container}>
                      <Link passHref href="/Contact">
                        <Button name="Contact" />
                      </Link>
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