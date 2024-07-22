import NavigationBar from '../components/ui/NavigationBar';
import LogoBar from '../components/ui/LogoBar';

import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';
import { cardInfo as projectInfo } from '../components/data/projectsCardInfoData';

import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import Head from 'next/head';

import React, { useState } from 'react';

import { motion } from 'framer-motion';

import classes from './Projects.module.scss';

const Projects = () => {
	const [activeCategory, setActiveCategory] = useState('All');

	const handleCategoryClick = (category) => {
		setActiveCategory(category)
	}

	const renderCard = (card, index) => {
		return (
			<Card className={`${classes.card} col-12 col-sm-12 col-md-12 col-lg-5`} key={index}>
				<Card.Img className={classes.card__top__br} variant="top" src={card.image} alt={card.title} />
				<Card.Body className={`${classes.card__body} p-4 d-flex flex-column align-items-center justify-content-between`}>
					<div className={classes.flex__card__body} >
						<h2 className={` ${classes.card__heading}`}>{card.title}</h2>
						<ListGroup className="list-group-flush text-center ">
							<ListGroupItem>
								<h3>Tools used</h3>
								{card.tools.map((tool, index) => (
									<Badge key={index} pill text="light" className={`p-2 fs-4 m-2 ${classes.secondary_color}`}>
										<span className={classes.pill}>{tool}</span>
									</Badge>
								))}
							</ListGroupItem>
						</ListGroup>
						<span className={` ${classes.card__description} fs-4 my-2`}>{card.description}</span>
					</div>
					<div className="w-100 mt-2 d-flex justify-content-evenly align-items-center">
						{card.liveDemo && <Button href={card.liveDemo} target="_blank" className={`fs-3`} variant="secondary" size="lg">Live Demo</Button>}
						{card.github && <Button href={card.github} target="_blank" className={`fs-3`} variant="outline-secondary" size="lg">View Code</Button>}
						{card.designFile && <Button href={card.designFile} target="_blank" className={`fs-3 px-4`} variant="secondary" size="lg">View Design</Button>}
					</div>
				</Card.Body>
			</Card>
		);
	};

	// Animation variants for Framer Motion
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
		  opacity: 1,
		  transition: {
			duration: .5,
			ease: ["easeIn"]
		  },
		},
	  };
	  

	return (
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
					<Container className={classes.flex__container__col}>
						<div className={classes.flex__container}>
							<div className={`w-100 ${classes.headings__container}`}>
								<Headings heading="Works Done">Projects</Headings>
								<div className={classes.project__filtering}>
									<ul className={`my-2 list-unstyled ${classes.flex__container}`} >
										<li onClick={() => handleCategoryClick('All')} className={`${activeCategory === 'All' ? classes.nav__link__active : ''} ${classes.nav__link} me-3`} >All</li>
										<li onClick={() => handleCategoryClick('WordPress')} className={`${activeCategory === 'WordPress' ? classes.nav__link__active : ''} ${classes.nav__link} me-3`} >WordPress</li>
										<li onClick={() => handleCategoryClick('Shopify')} className={`${activeCategory === 'Shopify' ? classes.nav__link__active : ''} ${classes.nav__link} me-3`} >Shopify</li>
										<li onClick={() => handleCategoryClick('React JS')} className={`${activeCategory === 'React JS' ? classes.nav__link__active : ''} ${classes.nav__link} me-3`} >React JS</li>
										<li onClick={() => handleCategoryClick('Landing Pages')}  className={`${activeCategory === 'Landing Pages' ? classes.nav__link__active : ''} ${classes.nav__link} me-3`} >Landing Pages</li>
										<li onClick={() => handleCategoryClick('Design')} className={`${activeCategory === 'Design' ? classes.nav__link__active : ''} ${classes.nav__link}`}  >Design</li>
									</ul>
								</div>
							</div>
						</div>
						<motion.div 
						key={activeCategory} 
						variants={containerVariants}
						initial="hidden"
        				animate="visible"  
						className={`${classes.card__holder}`}
						>
						{projectInfo.filter(project => activeCategory === 'All' || project.categories.includes(activeCategory))
						.map((project, index) => renderCard(project, index))
						}
						</motion.div>
					</Container>
				</SectionContainer>
			</motion.div>

			<LogoBar />

		</main>
	);
};

export default Projects;
