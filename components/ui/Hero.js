import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import classes from "./Hero.module.scss";

const Hero = () => {

  const text = 'DownloadResume-DownloadResume-';
  const charArray = text.split('');

  return (
    <div className={`container ${classes.hero}`}>
      <Head>
        <title>Lindy Ramirez | Shopify Theme Developer | Wordpress Theme Developer </title>
      </Head>
      <div className={`${classes.hero__wrapper}`}>
        <div className={classes.hero_text}>
          <h1 className={classes.intro}>
            Hello <span className={classes.sup}>👋🏼</span>, <br />
            My Name is Lindy
          </h1>
          <div className={classes.details}>
            <span>I'm a&nbsp;</span>
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .pauseFor(1000)
                  .typeString(" Web Developer")
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
          <h4 className={classes.subsubheading}>I craft user-friendly websites that boost conversions <br />and get results.  Passionate about tech, sports, travel,<br /> and spicy food.  Let's connect!</h4>
          <div>
            <Link className={classes.link} passHref href="/Projects">
              <button className={`${classes.hero__btn_solid} fs-3 mt-4 me-4`}>My Portfolio</button>
            </Link>
            <Link className={classes.link} passHref href="/Contact">
              <button className={`${classes.hero__btn_transparent} fs-3 mt-4`}>Contact Me</button>
            </Link>
          </div>
        </div>
        <div className={classes.lindy_container}>
          <div className={classes.circle}>
            <div className={`${classes.arc_text} position-absolute`}>
              <div className={classes.rotating_text_circle}>
                <div className={classes.rotating_text_text}>
                  {charArray.map((char, index) => (
                    <span key={index} style={{ transform: `rotate(${index * 12}deg)` }}>
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={classes.inner_circle}>
              <Image alt="Download resume" src={"/static/download-solid.svg"} height={30} width={30} objectFit="cover" layout="intrinsic" priority />
            </div>
          </div>
          <Image
            alt="Lindy"
            className={classes.lindy}
            src={"/static/lindy-blue.png"}
            height={440}
            width={440}
            objectFit="cover"
            layout="intrinsic"
            priority
          />
        </div>
        <div className={` ${classes.tidbits} d-flex align-items-center justify-content-center position-absolute`}>
          <div className={`${classes.tidbits__section} me-5`}>
            <div className={classes.tidbits__heading}>Based in</div>
            <h5 className={classes.tidbits__detail}>Manila, Philippines</h5>
          </div>
          <div className={`${classes.tidbits__section} me-5`}>
            <div className={classes.tidbits__heading}>From</div>
            <h5 className={classes.tidbits__detail}>Los Angeles, CA</h5>
          </div>
          <div className={`${classes.tidbits__section} me-5`}>
            <div className={classes.tidbits__heading}>Experience</div>
            <h5 className={classes.tidbits__detail}>2+ Years</h5>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;
