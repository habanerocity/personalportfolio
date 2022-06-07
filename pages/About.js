import { motion } from 'framer-motion';

import classes from './About.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Container from 'react-bootstrap/Container';

import { logoInfo } from '../components/data/aboutLogoInfoData';

import Button from '../components/ui/Button';
import FlexContainer from '../components/ui/FlexContainer';
import SideBar from '../components/ui/SideBar';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';

const About = () => {
	const renderLogos = (logo, index) => {
		return (
			<div className={classes.img} key={index}>
				<a href={logo.link} target="_blank">
					<Image className={classes.social_media} src={logo.image} alt={logo.alt} height={30} width={30} />
				</a>
			</div>
		);
	};
	return (
		<main>
			<Head>
				<title>About Me - Lindy Ramirez, Front End Developer based in Los Angeles</title>
				<meta
					name="description"
					content="About Me page for Lindy Ramirez, front end react developer based in Los Angeles, California. Learn more about me here."
				/>
			</Head>
			<SideBar />
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
										src={'/static/Images/tri2.png'}
										alt="me"
										height={130}
										width={140}
										className={classes.me}
									/>
									<div className={classes.flex__containerCol}>
										<h1 className={classes.lr}>Lindy Ramirez</h1>
										<h3 className={classes.dev}>Front End Developer</h3>
									</div>
								</div>
								<div className={classes.details}>
									<span className="fs-4">
										Hi my name is Lindy and I am a Front End Developer with a background in the
										e-commerce industry. I have a keen interest in clean and modern user
										experiences, with an emphasis in responsive design and the javascript ecosystem.
										Computers and technology are a childhood passion of mine and I've been solving
										tech-related problems ever since. I'm a fan of sports, automobiles, traveling,
										and spicy food. Feel free to contact me if you would like to work or collaborate
										with me.
									</span>
									<div className={classes.btn__container}>
										<Link href="/Contact">
											<div>
												<Button name="Hire Me" />
											</div>
										</Link>
										<div className={classes.icons}>{logoInfo.map(renderLogos)}</div>
									</div>
								</div>
							</div>
						</FlexContainer>
					</Container>
				</SectionContainer>
			</motion.div>
		</main>
	);
};

export default About;
