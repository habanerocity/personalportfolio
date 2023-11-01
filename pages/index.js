import Hero from '../components/ui/Hero';

import { motion } from 'framer-motion';

import NavBar from '../components/ui/NavBar';
import LogoBar from '../components/ui/LogoBar';

import classes from './index.module.scss';

import Head from 'next/head';

const HomePage = () => {
	return (
		<main className={classes.main}>
			<Head>
				<meta
					name="description"
					content="Home page for Lindy Ramirez | Front End React Developer Based in Los Angeles, California. View my developer portfolio here."
				/>
			</Head>
			<NavBar xw />
			<motion.div
				initial="hidden"
				animate="visible"
				className={` ${classes.motion}`}
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
				<Hero />
			</motion.div>
			<LogoBar xw />
		</main>
	);
};

export default HomePage;
