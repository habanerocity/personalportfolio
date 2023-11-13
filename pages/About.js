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
import NavigationBar from "../components/ui/NavigationBar";
import SectionContainer from "../components/ui/SectionContainer";
import Headings from "../components/ui/Headings";

const About = () => {

  const renderSkills = (skill, index) => {
    return (
      <li className="list-unstyled pe-3 pb-3 d-flex flex-column justify-content-center align-items-center" key={index}>
        <Image src={skill.image} alt={skill.alt} height={skill.height} width={skill.width} />
        <div className="text-center fs-6 mt-1">{skill.alt}</div>
      </li>
    );
  };

  const renderLogos = (logo, index) => {
    return (
      <div className={`mt-1 {classes.img}`} key={index}>
        <Link href={logo.link} target="_blank" rel="noreferrer">
          <Image
            className={`me-2 ${classes.social_media}`}
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
          About Me - Lindy Ramirez, Web Developer
        </title>
        <meta
          name="description"
          content="About me page for Lindy Ramirez, Web Developer. Learn more about me here."
        />
      </Head>
      <NavigationBar />
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
                    src={"/static/me-kl.png"}
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
                  <div className="fs-4 pt-4">
                    Hey, I&apos;m Lindy, a self-taught Web Developer deeply rooted in digital marketing and the e-commerce world. Specializing in Shopify and WordPress theme development, I&apos;m passionate about creating clean, modern user interfaces that prioritize sound UX principles and drive increased conversion rates. My journey in tech began with a childhood love for computers, evolving into a problem-solving mission. Beyond coding, I&apos;m a big fan of, an adventure-seeking traveler, and a spicy food aficionado. If you&apos;re looking to collaborate on a project or just chat tech and shared interests, feel free to reach out—I&apos;m always up for new ventures.
                  </div>
                  <br />
                  <div className="d-flex flex-column">
                    <h2>Skills</h2>
                    <ul className={`d-flex mb-2 p-0 w-100 flex-wrap ${classes.skill__list}`}>
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
