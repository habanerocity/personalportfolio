import { motion } from "framer-motion";

import classes from "./About.module.scss";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Container from "react-bootstrap/Container";

import { logoInfo } from "../components/data/aboutLogoInfoData";
import { skillsInfo } from "../components/data/skillsInfoData";

import Button from "../components/ui/Button";
import FlexContainer from "../components/ui/FlexContainer";
import LogoBar from '../components/ui/LogoBar';
import NavBar from "../components/ui/NavBar";
import SectionContainer from "../components/ui/SectionContainer";
import Headings from "../components/ui/Headings";

const About = () => {

  const renderSkills = (skill, index) => {
    return (
      <li className="list-unstyled me-3" key={index}>
        <Image src={skill.image} alt={skill.alt} height={40} width={40} />
      </li>
    );
  };

  const renderLogos = (logo, index) => {
    return (
      <div className={`mt-1 {classes.img}`} key={index}>
        <Link href={logo.link} target="_blank" rel="noreferrer">
          <Image
            className={`me-3 my-3 ${classes.social_media}`}
            src={logo.image}
            alt={logo.alt}
            height={25}
            width={25}
          />
        </Link>
      </div>
    );
  };

  return (
    <div className={classes.pg}>
      <Head>
        <title>
          About Me - Lindy Ramirez, Shopify Theme Developer
        </title>
        <meta
          name="description"
          content="About me page for Lindy Ramirez, Shopify Theme Developer. Learn more about me here."
        />
      </Head>
      <NavBar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2
            }
          }
        }}
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
                <div className={classes.flex__containerHeading}>
                  <Image
                    src={"/static/ai-me-1.jpg"}
                    alt="me"
                    height={130}
                    width={140}
                    className={classes.me}
                  />
                  <div className={classes.flex__containerCol}>
                    <h1 className={classes.lr}>Lindy Ramirez</h1>
                    <h3 className={`text-left ${classes.dev}`}>Web Developer</h3>
                    <div className={classes.icons}>
                      {logoInfo.map(renderLogos)}
                    </div>
                  </div>
                </div>
                <div className={classes.details}>
                  <div className="fs-4 py-4">
                    Hi my name is Lindy and I am a self-taught Web
                    Developer with a background in the e-commerce industry. I
                    have a keen interest in building clean and modern user interfaces,
                    with an emphasis in sound ux principles and increasing conversion rates for businesses. Computers and technology are a childhood passion
                    of mine and I have been solving tech-related problems ever
                    since. I am a fan of sports, traveling, and
                    spicy food. Feel free to contact me if you would like to
                    work or collaborate with me.
                  </div>
                  <div className="d-flex flex-column">
                    <h2>Skills</h2>
                    <ul className={`d-flex p-0 w-100 flex-wrap ${classes.skill__list}`}>
                      {skillsInfo.map(renderSkills)}
                    </ul>
                  </div>
                  <div className={classes.btn__container}>
                    <Link passHref href="/Contact">
                      <div>
                        <Button name="Contact" />
                      </div>
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
  );
};

export default About;
