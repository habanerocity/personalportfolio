import NavigationBar from '../components/ui/NavigationBar';
import LogoBar from '../components/ui/LogoBar';
import Footer from '../components/ui/Footer';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';
import ProjectCategories from '../components/ui/ProjectCategories';

import { cardInfo as projectInfoData } from '../components/data/projectsCardInfoData';
import renderProjectCards from '../components/utils/renderProjectCards';

import Container from 'react-bootstrap/Container';

import pageFadeInAnimation from '../components/animations/pageFadeInAnimation';
import cardFadeInAnimation from '../components/animations/cardFadeInAnimation';

import Head from 'next/head';

import React, { useState } from 'react';

import { motion } from 'framer-motion';

import classes from './Projects.module.scss';

const Projects = () => {
	const [activeCategory, setActiveCategory] = useState('All');

	const handleCategoryClick = (category) => {
		setActiveCategory(category)
	}

	return (
		<React.Fragment>
			<main className={classes.pg_projects}>
				<Head>
					<title>Projects - Lindy Ramirez | Shopify Theme Developer</title>
					<meta
						name="description"
						content="Projects page for Lindy Ramirez, Shopify Theme Developer. View my projects here."
					/>
				</Head>
				<NavigationBar />
				<motion.div
					initial="hidden"
					animate="visible"
					variants={pageFadeInAnimation}
				>
					<SectionContainer>
						<Container className={`d-flex flex-column position-relative ${classes.flex__container__col}`}>
							<div className={classes.flex__container}>
								<div className={`w-100 align-items-start text-start justify-content-start ${classes.headings__container}`}>
									<Headings heading="Works Done">Projects</Headings>
									<div className={classes.project__filtering}>
										<ProjectCategories activeCategoryProps={activeCategory} setActiveCategoryProps={handleCategoryClick} />
									</div>
								</div>
							</div>
							<motion.div 
							key={activeCategory} 
							variants={cardFadeInAnimation}
							initial="hidden"
							animate="visible"  
							className={`${classes.card__group__wrapper} justify-content-between align-items-start flex-wrap`}
							>
							{projectInfoData.filter(project => activeCategory === 'All' || project.categories.includes(activeCategory))
							.map((project, index) => renderProjectCards(project, index))
							}
							</motion.div>
						</Container>
					</SectionContainer>
				</motion.div>
				<LogoBar />
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default Projects;