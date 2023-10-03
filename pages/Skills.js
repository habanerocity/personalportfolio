import SideBar from '../components/ui/SideBar';
import Container from 'react-bootstrap/Container';
import classes from './Skills.module.scss';

import { motion } from 'framer-motion';

import { skillsInfo } from '../components/data/skillsInfoData';

import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';

import Head from 'next/head';
import Image from 'next/image';

const Skills = () => {
	const renderSkills = (skills, index) => {
		return (
			<motion.div
				className={classes.skill}
				whileHover={{
					scale: [1, 1.4, 1.2],
					rotate: [0, 10, -10, 0],
					filter: [
						'hue-rotate(0) contrast(100%)',
						'hue-rotate(360deg) contrast(200%)',
						'hue-rotate(45deg) contrast(300%)',
						'hue-rotate(0) contrast(100%)'
					],
					transition: {
						duration: 0.2
					}
				}}
				key={index}
			>
				<Image src={skills.image} height={skills.height} width={skills.width} alt={skills.alt} />
				<h3 className="text-center mt-1">{skills.alt}</h3>
			</motion.div>
		);
	};

	return (
		<main>
			<Head>
				<title>Skills - Lindy Ramirez, Front End Developer based in Los Angeles</title>
				<meta
					name="description"
					content="Skills page for Lindy Ramirez, front end react developer based in Los Angeles, California. View my tech skills here."
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
							delay: 0.4
						}
					}
				}}
			>
				<SectionContainer>
					<Container className={classes.container}>
						<Headings heading="Technologies Used">Skills</Headings>
						<div className={classes.grid}>{skillsInfo.map(renderSkills)}</div>
					</Container>
				</SectionContainer>
			</motion.div>
		</main>
	);
};

export default Skills;
