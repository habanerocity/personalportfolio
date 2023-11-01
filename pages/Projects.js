import NavBar from '../components/ui/NavBar';
import LogoBar from '../components/ui/LogoBar';

import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';
import { cardInfo } from '../components/data/projectsCardInfoData';

import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import Head from 'next/head';

import { motion } from 'framer-motion';

import classes from './Projects.module.scss';

const Projects = () => {
	const renderCard = (card, index) => {
		return (
			<Card className={`${classes.card} col-12 col-sm-12 col-md-12 col-lg-5`} key={index}>
				<Card.Img className={classes.card__top__br} variant="top" src={card.image} alt={card.title} />
				<Card.Body className="p-4 d-flex flex-column align-items-center justify-content-between">

					<div className={classes.flex__card__body} >
						<h2 className={` ${classes.card__heading}`}>{card.title}</h2>
						<ListGroup className="list-group-flush text-center ">
							<ListGroupItem>
								<h3>Tools used</h3>
								<Badge pill bg="secondary" text="light" className="p-2 fs-4">
									<span className={classes.pill}>{card.tools[0]}</span>
								</Badge>
								<Badge pill bg="secondary" text="light" className="mx-2 p-2 fs-4">
									<span className={classes.pill}>{card.tools[1]}</span>
								</Badge>
								<Badge pill bg="secondary" text="light" className="p-2 mt-1 fs-4">
									<span className={classes.pill}>{card.tools[2]}</span>
								</Badge>

							</ListGroupItem>
						</ListGroup>
						<span className={` ${classes.card__description} fs-4 my-2`}>{card.description}</span>
					</div>
					<div className="w-100 mt-2 d-flex justify-content-evenly align-items-center">
						<Button href={card.liveDemo} target="_blank" className={`fs-3`} variant="secondary" size="lg">Live Demo</Button>
						<Button href={card.github} target="_blank" className={`fs-3`} variant="outline-secondary" size="lg">View Code</Button>
					</div>

				</Card.Body>
			</Card>
		);
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
			<NavBar />
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
							<div className={classes.headings__container}>
								<Headings heading="Works Done">Projects</Headings>
							</div>
						</div>
						<div className={`${classes.card__holder}`}>{cardInfo.map(renderCard)}</div>
					</Container>
				</SectionContainer>
			</motion.div>

			<LogoBar />

		</main>
	);
};

export default Projects;
