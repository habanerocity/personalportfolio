import Hero from '../components/ui/Hero';

import React from 'react';

import { motion } from 'framer-motion';

import NavigationBar from '../components/ui/NavigationBar';
import LogoBar from '../components/ui/LogoBar';
import Footer from '../components/ui/Footer';


import pageFadeInAnimation from '../animations/pageFadeInAnimation';

import classes from './index.module.scss';

import Head from 'next/head';

const HomePage = () => {
	return (
		<React.Fragment>
			<main className={`h-100 ${classes.main}`}>
				<Head>
					<meta
						name="description"
						content="Home page for Lindy Ramirez | Web Developer focused in Wordpress, Shopify and Front End Development. View my developer portfolio here."
					/>
				</Head>
				<NavigationBar xw />
				<motion.div
					initial="hidden"
					animate="visible"
					className={`h-100 ${classes.motion}`}
					variants={pageFadeInAnimation}
				>
					<Hero />
				</motion.div>
				<LogoBar xw />
			</main>
		</React.Fragment>
	);
};

export default HomePage;