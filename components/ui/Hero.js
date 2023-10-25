import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={` ${classes.hero}`}>
      <Head>
        <title>Lindy Ramirez | Shopify Theme Developer </title>
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
            src={"/static/avatar.png"}
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
                .pauseFor(1000)
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteChars(13)
                .pauseFor(1000)
                .typeString("Shopify Theme Developer")
                .pauseFor(1000)
                .deleteChars(23)
                .pauseFor(1000)
                .typeString(" Wordpress Theme Developer")
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
            <button className={`${classes.see_projects} fs-3`}>See Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
