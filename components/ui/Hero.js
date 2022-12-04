import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={` ${classes.hero}`}>
      <Head>
        <title>Lindy Ramirez | Front End Developer Based in Los Angeles</title>
      </Head>
      <div className={classes.hero_text}>
        <h1 className={classes.intro}>
          Hello <span className={classes.sup}>👋🏼</span>, <br />
          My Name is Lindy
        </h1>

        <div className={classes.lindy_container}>
          <Image
            alt="Lindy"
            className={classes.lindy}
            src={"/static/lindy-2.JPG"}
            height={201}
            width={200}
            objectFit="cover"
            layout="intrinsic"
            priority
          />
        </div>

        <div className={classes.details}>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .pauseFor(3300)
                .typeString("I'm a ")
                .pauseFor(2000)
                .typeString("Frontend Developer")
                .pauseFor(2000)
                .deleteChars(19)
                .pauseFor(2000)
                .typeString("n Ecommerce Specialist")
                .pauseFor(2000)
                .deleteChars(22)
                .pauseFor(2000)
                .typeString(" Foodie")
                .pauseFor(4000)
                .start();
            }}
            options={{
              loop: true,
              cursorClassName: "classes.details"
            }}
          />
        </div>
        <div>
          <Link className={classes.link} passHref href="/Projects">
            <button className={`${classes.see_projects} `}>See Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
