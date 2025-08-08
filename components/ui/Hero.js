import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import Typewriter from "typewriter-effect";

import classes from "./Hero.module.scss";

const Hero = () => {

  const text = ' Get in touch • Get in touch • ';
  const charArray = text.split('');

  return (
    <div className={`container h-100 w-100 ${classes.hero}`}>
      <Head>
        <title>Lindy Ramirez | Shopify Theme Developer | Wordpress Theme Developer </title>
      </Head>
      <div className={`d-flex position-static align-items-center h-100 w-100 ${classes.hero__wrapper}`}>
        <div className={`text-start text-white d-flex flex-column justify-content-start ${classes.hero_text}`}>
          <div className={`text-black ${classes.intro}`}>
            Hello <span className={classes.sup}>👋🏼</span>, <br />
            My Name is Lindy
          </div>
          <div className={classes.details}>
            <span>I&apos;m a&nbsp;</span>
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .pauseFor(2000)
                  .typeString(" Web Developer")
                  .pauseFor(500)
                  .deleteChars(13)
                  .pauseFor(500)
                  .typeString("WordPress Developer")
                  .pauseFor(500)
                  .deleteChars(19)
                  .pauseFor(500)
                  .typeString("Shopify Developer")
                  .pauseFor(2000)
                  .start();
              }}
              options={{
                loop: true,
                cursorClassName: "classes.details"
              }}
            />
          </div>
          <h4 className={`fw-light text-black ${classes.subsubheading}`}>I craft user-friendly websites that boost conversions <br />and get results. Outside of tech, I'm passionate about sports, travel,<br /> and spicy food.  Let&apos;s connect!</h4>
          <div className={classes.btn__container}>
            <Link className={classes.link} passHref href="/services">
              <button className={`${classes.hero__btn_solid} text-white ${classes.hero__btn} fs-3 mt-4 me-4`}>My Services</button>
            </Link>
            <Link className={classes.link} passHref href="/About">
              <button className={`${classes.hero__btn_transparent} ${classes.hero__btn} fs-3 mt-4`}>About Me</button>
            </Link>
          </div>
        </div>
        <div className={`position-relative ${classes.lindy_container}`}>
          <div className={`rounded-circle position-absolute d-flex justify-content-center align-items-center ${classes.circle}`}>
            <div className={`${classes.arc_text} position-absolute`}>
              <div className={`position-relative rounded-circle d-flex justify-content-center align-items-center m-auto ${classes.rotating_text_circle}`}>
                <div className={`w-100 h-100 position-absolute ${classes.rotating_text_text}`}>
                  {charArray.map((char, index) => (
                    <span className='position-absolute text-uppercase' key={index} style={{ transform: `rotate(${index * 12}deg)` }}>
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={`rounded-circle d-flex justify-content-center align-items-center ${classes.inner_circle}`}>
              <Link className={classes.link} passHref href="/Contact">
                <Image alt="Let's connect" src={"/static/bubble-chat.webp"} height={30} width={30} objectFit="cover" layout="intrinsic" priority />
              </Link>
            </div>
          </div>
          <Image
            alt="Lindy"
            className={classes.lindy}
            src={"/static/lindy-bluex640.webp"}
            height={640}
            width={440}
            objectFit="cover"
            layout="responsive"
            priority
          />
        </div>
        <div className={` ${classes.tidbits} d-flex align-items-center justify-content-center position-absolute`}>
          <div className={`${classes.tidbits__section} me-5`}>
            <div className={classes.tidbits__heading}>Specializing in</div>
            <h5 className={classes.tidbits__detail}>🌐 Custom WordPress Development</h5>
          </div>
          <div className={`${classes.tidbits__section} me-5`}>
            <div className={classes.tidbits__heading}>From</div>
            <h5 className={classes.tidbits__detail}>🌆 Los Angeles, CA</h5>
          </div>
          <div className={`${classes.tidbits__section} me-5`}>
            <div className={classes.tidbits__heading}>Experience</div>
            <h5 className={classes.tidbits__detail}>🧑🏻‍💻 3+ Years</h5>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;
