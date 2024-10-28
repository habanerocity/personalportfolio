import React from "react";
import Head from "next/head";

import { Row, Col } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import classes from "./WordPress-Development-Services.module.scss";

import NavigationBar from '../components/ui/NavigationBar';
import LogoBar from '../components/ui/LogoBar';
import Footer from '../components/ui/Footer';
import SectionContainer from '../components/ui/SectionContainer';

import Link from "next/link";
import Image from "next/image";

import pageFadeInAnimation from "../animations/pageFadeInAnimation";

import { motion } from 'framer-motion';

import AnimatedHeading from '../components/animations/AnimatedHeading';


const WordPressDevelopmentServices = () => {

    const sectionHeadings = {
        sectionOne: "What is WordPress and Why You Should Use It For Your Website?",
        sectionTwo: "Why Should You Hire A Professional WordPress Developer?",
        sectionThree: "Why Me?",
        sectionFour: "WordPress Services That I Provide",
        sectionFive: "What Clients Are Saying About Me"
    }

    return (
    <React.Fragment>
        <Head>
            <title>Services - Lindy Ramirez | Freelance Web Developer</title>
            <meta
                name="description"
                content="Services page for Lindy Ramirez, Freelance Web Developer. View my services here."
            />
        </Head>
        <div className={classes.pg}>
            <NavigationBar />
            <motion.div
            initial="hidden"
            animate="visible"
            variants={pageFadeInAnimation}
            onAnimationComplete={() => {
                console.log('Animation complete, scrolling to top');
                window.scrollTo(0, 0);
                }}
            >
                <SectionContainer>
                    <Container className={`d-flex flex-row position-relative justify-content-between ${classes.flex__container__col}`}>
                        <div className={`${classes.hero__col_1} d-flex position-relative flex-column justify-content-between`} >
                            <Image
                            src='/static/winning.jpg'
                            layout='fill'
                            className={`position-relative ${classes.hero__img}`}
                            alt='Business Stakeholder Winning'
                            />
                            <div className={`d-flex justify-content-between align-items-center ${classes.hero__stats_container}`} >
                                <div className={`justify-content-center ${classes.hero__stats_1}`}>
                                    <div className='justify-content-center h-100 d-flex flex-column p-4 fs-3 fw-bold align-items-start' >
                                    Number of Free Plugins Available <br />
                                    <span className='display-3 fw-bold'>+59,000</span>
                                    </div>
                                </div>
                                <div className={`justify-content-center ${classes.hero__stats_2}`}>
                                    <div className='justify-content-center h-100 d-flex flex-column p-4 fs-3 fw-bold align-items-start' >
                                        Percentage of The Web Powered By WordPress <br />
                                        <span className='display-3 fw-bold'>+43%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes.hero__col_2} d-flex position-relative flex-column align-items-center justify-content-center`} >
                            <h1 className='display-1 fw-bold'>Unlock Your Brand's True Potential With a WordPress Website</h1>
                            <p className='fs-2' >Stand out with unlimited customization, easily manage content, and make your online presence soar to new heights</p>
                            <div className='w-100 d-flex align-items-center justify-content-between' >
                                <div className={`d-flex justify-content-center align-items-center ${classes.hero__icon_box}`} >
                                    <Image 
                                    src='/static/wordpress-brands-solid.svg'
                                    width='100'
                                    height='100'
                                    alt='WordPress Icon'
                                    />
                                </div>
                                <div className={`${classes.cta__wrapper} d-flex flex-column ms-4`}>
                                    <div className='fw-bold fs-4 d-flex flex-column justify-content-start' >
                                    Start building a website that truly represents your brand and drives results. Whether you need a custom WordPress theme, plugin customization, or ongoing support, I’m here to help you achieve your goals.
                                    </div>
                                    <Link className={`fw-bolder mt-2 fs-3 ${classes.hero__cta}`} href='/Contact'>
                                    Get My Free Consultation <span> <Image className={classes.hero__cta_arrow} src='/static/circle-arrow-right.svg' width='20' height='20' alt='Right arrow' /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className='mt-5 d-flex flex-column align-items-center justify-content-center' >
                                <div className='fs-2 mb-4'>
                                    Scroll Down
                                </div>
                                <Image
                                className={classes.bounce}
                                src='/static/chevron-down.svg'
                                height='30'
                                width='30'
                                alt='Chevron Down'
                                />
                            </div>
                        </div>
                    </Container>
                </SectionContainer>
                <div className={`h-auto ${classes.brands_section}`}>
                    <Container className={`d-flex flex-column position-relative ${classes.w85}`}>
                        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                            <AnimatedHeading
                            text={sectionHeadings.sectionOne}
                            className={`fw-bold ${classes.section__heading_header}`}
                            />
                            <Row >
                                <Col className={`d-flex flex-column flex-wrap justify-content-between align-items-start w-100 mt-5`}>
                                    <p className='fs-3 fw-normal' >
                                        WordPress is an open-source, powerful and flexible platform that powers 
                                        over 43% of websites on the internet. Its versatility allows businesses to create 
                                        highly customizable, scalable websites that align with their goals. With robust 
                                        features for SEO, content management, and e-commerce, WordPress 
                                        empowers you to elevate your online presence, attract more visitors, 
                                        and convert them into loyal customers.
                                    </p>
                                    <div className='d-flex flex-column align-items-start mt-3' >
                                        <div className='d-flex flex-column align-items-start mt-2'>   
                                            <div className='d-flex'>
                                                <div className={`${classes.benefit}`} >
                                                    <Image 
                                                    src='/static/check.png'
                                                    width='20'
                                                    height='20'
                                                    alt='checkmark'
                                                    />
                                                </div>
                                                <div className='ms-3 d-flex flex-column' >                                                   
                                                    <div className={`${classes.benefit__heading} fs-2 fw-bold`} >
                                                    Flexibility & Customization
                                                    </div>
                                                    <p className={`${classes.benefit__text_content} mb-0 fs-3 fw-normal`}>
                                                    Handily tailor your website with thousands of themes and plugins to 
                                                    match your brand’s unique aesthetic, from design to functionality.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex mt-1'>
                                                <div className={`${classes.benefit}`} >
                                                    <Image 
                                                    src='/static/check.png'
                                                    width='20'
                                                    height='20'
                                                    alt='checkmark'
                                                    />
                                                </div>
                                                <div className='ms-3 d-flex flex-column' >                                                   
                                                    <div className={`${classes.benefit__heading} fs-2 fw-bold`} >
                                                    SEO-Friendly
                                                    </div>
                                                    <p className={`${classes.benefit__text_content} mb-0 fs-3 fw-normal`}>
                                                    Built with clean code and designed to integrate SEO tools seamlessly, 
                                                    WordPress helps your website rank higher on search engines.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex mt-1'>
                                                <div className={`${classes.benefit}`} >
                                                    <Image 
                                                    src='/static/check.png'
                                                    width='20'
                                                    height='20'
                                                    alt='checkmark'
                                                    />
                                                </div>
                                                <div className='ms-3 d-flex flex-column' >                                                   
                                                    <div className={`${classes.benefit__heading} fs-2 fw-bold`} >
                                                    Easy Content Management
                                                    </div>
                                                    <p className={`${classes.benefit__text_content} mb-0 fs-3 fw-normal`}>
                                                    Enjoy a user-friendly interface that allows you to easily update, edit,
                                                    and manage content without needing a single line of code. Perfect for
                                                    websites that need to be updated constantly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex mt-1'>
                                                <div className={`${classes.benefit}`} >
                                                    <Image 
                                                    src='/static/check.png'
                                                    width='20'
                                                    height='20'
                                                    alt='checkmark'
                                                    />
                                                </div>
                                                <div className='ms-3 d-flex flex-column' >                                                   
                                                    <div className={`${classes.benefit__heading} fs-2 fw-bold`} >
                                                    Scalability
                                                    </div>
                                                    <p className={`${classes.benefit__text_content} mb-0 fs-3 fw-normal`}>
                                                    Whether you're starting small or planning to grow, WordPress can
                                                    handle any size business, allowing you to scale without limitations. Unlike 
                                                    other DIY platforms and page builders, you are truly in charge of your code and 
                                                    therefore your site speed, marketing optimizations, and overall user experience.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='d-flex mt-1'>
                                                <div className={`${classes.benefit}`} >
                                                    <Image 
                                                    src='/static/check.png'
                                                    width='20'
                                                    height='20'
                                                    alt='checkmark'
                                                    />
                                                </div>
                                                <div className='ms-3 d-flex flex-column' >                                                   
                                                    <div className={`${classes.benefit__heading} fs-2 fw-bold`} >
                                                    Strong Community Support
                                                    </div>
                                                    <p className={`${classes.benefit__text_content} mb-0 fs-3 fw-normal`}>
                                                    With a large community of developers and frequent updates, WordPress 
                                                    ensures security, innovation, and access to resources whenever needed.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center'>
                                    <Image 
                                    className={classes.section__image}
                                    src='/static/wp-laptop.jpg'
                                    width='500'
                                    height='350'
                                    alt='WordPress Interface on Laptop'
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className={`h-auto ${classes.bg_gray}`}>
                    <Container className={`d-flex flex-column position-relative ${classes.w85}`}>
                        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                            <AnimatedHeading
                            text={sectionHeadings.sectionTwo}
                            className={`fw-bold ${classes.section__heading_header}`}
                            />
                            <Row>
                                <Col className={`mt-5 d-flex justify-content-start align-items-center`}>
                                    <Image 
                                    className={classes.section__image}
                                    src='/static/foodventure-figma.webp'
                                    width='500'
                                    height='350'
                                    alt='Custom WordPress Theme'
                                    />
                                </Col>
                                <Col className='mt-5'>
                                    <p className='fs-3 fw-normal'>
                                    Hiring an experienced web developer is more than just getting 
                                    your website up and running—it’s about building a powerful online 
                                    presence that’s tailored to your brand’s goals. While DIY website 
                                    builders such as Wix or Squarespace offer quick setups, they come 
                                    with significant limitations. Unlike WordPress, these platforms 
                                    often restrict customization, performance, and scalability, which 
                                    can hinder your growth in the long run.
                                    </p>
                                    <p className='fs-3 fw-normal'>
                                    When you work with a professional WordPress developer, you get a 
                                    fully customized website that can reflect your unique brand identity 
                                    and meets your specific business needs. Unlike DIY tools, which rely 
                                    on pre-built templates, I can design and build you a WordPress theme 
                                    with custom code that’s tailored to your audience and optimized for 
                                    performance, security, and SEO. This ensures your customers can easily 
                                    find you, trust you, and convert into loyal clients.
                                    </p>
                                    <p className='fs-3 fw-normal'>
                                    As a business owner, your time is best spent on what you do best—running 
                                    your business. Hiring a web developer allows you to leave the technical 
                                    aspects of website development to a professional, so you can focus on 
                                    driving sales and growing your brand. You get the peace of mind that your 
                                    website is being expertly handled while you concentrate on your strengths.
                                    </p>
                                    <p className='fs-3 fw-normal'>
                                    An experienced developer doesn’t just launch your website and walk away. 
                                    I provide ongoing technical support, maintenance, and updates, ensuring 
                                    your WordPress website remains secure, up-to-date, and functions smoothly 
                                    as technology evolves. Security is a top priority—I implement WordPress 
                                    security best practices and other key measures to protect your site from 
                                    potential threats.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className={`h-auto ${classes.brands_section}`}>
                    <Container className={`d-flex flex-column position-relative ${classes.w85}`}>
                        <div className={`${classes.services__section_container} flex-column w-100 justify-content-start align-items-start ${classes.flex__container}`}>
                            <AnimatedHeading
                            text={sectionHeadings.sectionThree}
                            className={`fw-bold ${classes.section__heading_header}`}
                            />
                            <Row >
                                <Col className='mt-5'>
                                    <p className='fs-3 fw-normal' >
                                    Hey, I'm Lindy, a fullstack web developer with a focus on the WordPress and Shopify platforms,
                                    backed by a strong background in digital marketing. My passion for helping brands enhance their
                                    online presence and boost conversion rates is matched only by my dedication to solving problems.
                                    My journey in tech began with a love for computers as a child, evolving into a mission to use my 
                                    skills to make a real impact. Beyond coding, I'm an adventure-seeking traveler, a big fan of basketball
                                    and soccer, and a spicy food aficionado.
                                    </p>
                                    <p className='fs-1 mt-4 fw-semibold'>
                                    What You Get When You Hire Me
                                    </p>
                                    <div className={classes.my_attributes} >
                                        <div className={classes.attribute} >
                                            <p className='fs-2 fw-semibold mb-0'>📈 Results-Driven Approach</p>
                                            <p className='fs-3'>
                                            I’m dedicated to helping you achieve your goals. Every 
                                            WordPress solution I create is personalized specifically
                                            to your brand's needs, ensuring measurable results. I set 
                                            up analytics for every project that I build.
                                            </p>
                                        </div>
                                        <div className={classes.attribute} >
                                            <p className='fs-2 fw-semibold mb-0'>📲 Responsive Communication</p>
                                            <p className='fs-3'>
                                            One of my key strengths is maintaining open and responsive 
                                            communication with clients. I take pride in answering your 
                                            questions promptly, guiding you through every step of the 
                                            process.
                                            </p>
                                        </div>
                                        <div className={classes.attribute} >
                                            <p className='fs-2 fw-semibold mb-0'>🌱 Commitment to Growth</p>
                                            <p className='fs-3'>
                                            I constantly sharpen my skills and stay on top of the latest 
                                            WordPress trends, ensuring that my solutions are cutting-edge 
                                            and built to last.
                                            </p>
                                        </div>
                                        <div className={classes.attribute} >
                                            <p className='fs-2 fw-semibold mb-0'>🔨 Pride in Craftsmanship</p>
                                            <p className='fs-3'>
                                            I take immense pride in my work. Your success is my success, and 
                                            I strive to deliver only the best for every project. All my 
                                            websites are secure, mobile-responsive and optimized for performance.
                                            </p>
                                        </div>
                                        <div className={classes.attribute} >
                                            <p className='fs-2 fw-semibold mb-0'>🧩 Problem Solver</p>
                                            <p className='fs-3'>
                                            I love tackling challenges and finding creative solutions 
                                            that make a difference for my clients. Your challenges are 
                                            opportunities I’m excited to solve.
                                            </p>
                                        </div>
                                        <div className={classes.attribute} >
                                            <p className='fs-2 fw-semibold mb-0'>🤝 A Reliable Partner For Your Brand</p>
                                            <p className='fs-3'>
                                            When you work with me, you get more than a developer—you 
                                            gain a partner invested in the growth and success of your 
                                            business.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={classes.btn__container}>
                                        <Link className={classes.link} passHref href="/Contact">
                                            <button className={`${classes.hero__btn_solid} text-white ${classes.hero__btn} fs-3 mt-4 me-4`}>Get In Touch</button>
                                        </Link>
                                        <Link className={classes.link} passHref href="/Projects">
                                            <button className={`${classes.hero__btn_transparent} ${classes.hero__btn} fs-3 mt-4`}>View Work Samples</button>
                                        </Link>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center' >
                                    <div className={`d-flex justify-content-center align-items-center ${classes.img_collage}`} >
                                        <Image 
                                        className={`${classes.img_collage_first_floating} ${classes.section__image} ${classes.img_collage_photo}`}
                                        src='/static/aguachile-edited.png'
                                        width='180'
                                        height='200'
                                        alt='One of my favorite foods, aguachile'
                                        />
                                        <Image 
                                        className={`${classes.img_collage_main} ${classes.section__image} ${classes.img_collage_photo}`}
                                        src='/static/lindy-thailand.png'
                                        width='376'
                                        height='500'
                                        alt='Lindy in Thailand'
                                        />
                                        <Image 
                                        className={`${classes.img_collage_second_floating} ${classes.section__image} ${classes.img_collage_photo}`}
                                        src='/static/pacifico-beach.png'
                                        width='180'
                                        height='200'
                                        alt='Pacifico Beach, Siargao'
                                        />
                                        <Image 
                                        className={`${classes.img_collage_third_floating} ${classes.section__image} ${classes.img_collage_photo}`}
                                        src='/static/audi.jpg'
                                        width='225'
                                        height='169'
                                        alt='Pacifico Beach, Siargao'
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className={`h-auto ${classes.bg_gray}`}>
                    <Container className={`d-flex flex-column position-relative ${classes.w85}`}>
                        <div className={`${classes.services__section_container} flex-column w-100 d-flex justify-content-between align-items-start ${classes.flex__container}`}>
                            <AnimatedHeading
                            text={sectionHeadings.sectionFour}
                            className={`fw-bold ${classes.section__heading_header}`}
                            />
                            <div className={`d-flex justify-content-between mt-5 align-items-stretch ${classes.service_container_wrapper}`} >
                            <div className={`d-flex flex-column justify-content-between ${classes.services_container}`} >
                                <Row lg={3} className={`p-5 d-flex justify-content-between align-items-center ${classes.services_container_inner}`} >
                                    <Col className='p-2'>
                                        <div className={`${classes.service_icon_container}`}>
                                            <Image
                                            src='/static/laptop-code-white.svg'
                                            height='30'
                                            width='30'
                                            alt='Theme Development'
                                            />
                                        </div>
                                        <p className='text-white mt-2 fs-2 fw-bold' >Theme Development</p>
                                        <p className='text-white fs-3' >
                                        I can hand-code unique themes from custom code. Custom WordPress themes make your 
                                        website more unique, secure, and avoid the bloat that comes 
                                        with pre-made templates.  
                                        </p>
                                    </Col>
                                    <Col className='p-2 d-flex flex-column align-items-start' >
                                        <div className={`${classes.service_icon_container}`}>
                                            <Image
                                            src='/static/sliders.svg'
                                            height='30'
                                            width='30'
                                            alt='Theme Customization'
                                            />
                                        </div>
                                        <p className='text-white mt-2 fs-2 fw-bold' >Theme Customization</p>
                                        <p className='text-white fs-3' >
                                        I can work with your existing WordPress website or theme and make updates 
                                        using a page builder plugin, such as Elementor or Divi, or custom code to ensure everything 
                                        fits your vision.
                                        </p>
                                    </Col>
                                    <Col className='p-2'>
                                        <div className={`${classes.service_icon_container}`}>
                                            <Image
                                            src='/static/pen-to-square.svg'
                                            height='30'
                                            width='30'
                                            alt='Web Design'
                                            />
                                        </div>
                                        <p className='text-white mt-2 fs-2 fw-bold' >Theme Design</p>
                                        <p className='text-white fs-3' >
                                        Utilizing UI/UX best practices and design tools, such as 
                                        Figma and Adobe Photoshop, I design personalized, 
                                        mobile-responsive WordPress themes that reflect your business's 
                                        unique identity.
                                        </p>
                                    </Col>
                                    <Col className='p-2'>
                                        <div className={`${classes.service_icon_container}`}>
                                            <Image
                                            src='/static/plug-circle-bolt.svg'
                                            height='30'
                                            width='30'
                                            alt='Plugin Development'
                                            />  
                                        </div>
                                        <p className='text-white mt-2 fs-2 fw-bold' >Plugin Development</p>
                                        <p className='text-white fs-3' >
                                        Stuck with a plugin issue you can’t fix? I build WordPress plugins 
                                        from scratch to give your website the features you need—whether 
                                        it’s a custom post type, shortcode, widget, or admin menu.
                                        </p>
                                    </Col>
                                    <Col className='p-2'>
                                        <div className={`${classes.service_icon_container}`}>
                                            <Image
                                            src='/static/bolt-solid.svg'
                                            height='30'
                                            width='30'
                                            alt='Website Optimization'
                                            />  
                                        </div>
                                        <p className='text-white mt-2 fs-2 fw-bold' >Website Optimization</p>
                                        <p className='text-white fs-3' >
                                        I can help optimize your website for faster page loading speeds,
                                         stronger SEO, and improved accessibility. These optimizations 
                                         enhance UX, brand perception, and increase engagement.
                                        </p>
                                    </Col>
                                    <Col className='p-2'>
                                        <div className={`${classes.service_icon_container}`}>
                                            <Image
                                            src='/static/wrench.svg'
                                            height='30'
                                            width='30'
                                            alt='Maintenance & Support'
                                            />  
                                        </div>
                                        <p className='text-white mt-2 fs-2 fw-bold' >Maintenance & Support</p>
                                        <p className='text-white fs-3' >
                                        I’ll keep your website running smoothly and address any 
                                        issues that arise. I’ll also assist you with hosting, domain 
                                        management and setup to ensure everything is properly configured 
                                        from the start.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            {/* <div className={`h-100 ${classes.imageContainer}`} >
                                <Image 
                                src='/static/lindy-gl.png'
                                layout='fill'
                                alt='Lindy Ramirez, Web Developer'
                                className={`position-relative w-100 h-100 ${classes.services_img}`}
                                
                                />
                            </div> */}
                            </div>
                        </div>
                    </Container>
                </div>
            </motion.div>
        </div>
    </React.Fragment>
    );
}

export default WordPressDevelopmentServices;