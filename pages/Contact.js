import classes from "./Contact.module.scss";

import LogoBar from "../components/ui/LogoBar";
import NavigationBar from "../components/ui/NavigationBar";
import SectionContainer from "../components/ui/SectionContainer";
import Headings from "../components/ui/Headings";
import Container from "react-bootstrap/Container";
import ContactForm from "../components/ui/ContactForm";
import Footer from '../components/ui/Footer';

import pageFadeInAnimation from "../animations/pageFadeInAnimation";

import React from "react";

import { motion } from "framer-motion";

import Head from "next/head";
import Image from "next/legacy/image";

const Contact = () => {
  return (
    <React.Fragment>
      <main className={classes.pg_contact}>
        <Head>
          <title>
            Contact Me - Lindy Ramirez, Shopify Theme Developer
          </title>
          <meta
            name="description"
            content="Contact page for Lindy Ramirez, Wordpress and Shopify theme developer. Contact me here."
          />
        </Head>
        <NavigationBar />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pageFadeInAnimation}
        >
          <SectionContainer>
            <Container className={`${classes.container} d-flex flex-column align-items-center`}>
              <div className='position-relative align-items-center flex-column justify-content-center w-100'>
                <div className={`align-items-start text-start justify-content-start ${classes.headings__container}`}>
                  <Headings heading="Contact Me">Contact</Headings>
                </div>
              </div>
              <div className='d-flex flex-row justify-content-center p-0'>
                <div className={`justify-content-center align-items-center ${classes.main__flex}`}>
                  <div className='position-relative align-items-center flex-column justify-content-center w-100'>
                    <div className={`bg-white ${classes.contact__wrapper}`}>
                      <Container className='d-flex flex-row justify-content-center p-0'>
                        <div className={`justify-content-center align-items-center position-relative ${classes.pic__wrapper}`}>
                          <Image
                            src={"/static/lindy-hanoix460.webp"}
                            className={classes.shapes}
                            layout="fill"
                            alt="Abstract Shapes"
                            priority
                          />
                        </div>
                        <ContactForm />
                      </Container>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </SectionContainer>
        </motion.div>
        <LogoBar />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;