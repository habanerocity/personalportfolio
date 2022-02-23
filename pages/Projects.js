import { Fragment } from 'react';
import SideBar from '../components/ui/SideBar';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';

import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

import classes from './Projects.module.scss';

const Projects = () => {
	return (
		<Fragment>
			<SideBar />
			<SectionContainer>
				<Container className={classes.flex__container__col}>
					<div className={classes.flex__container}>
						<div>
							<Headings heading="Works Done">Projects</Headings>
						</div>
					</div>

					<div className={`${classes.card__holder}`}>
						<Card className={`${classes.card} col-5`}>
							<div
								className={classes.preview}
								style={{ width: '100%', height: '100%', position: 'relative' }}
							>
								<Image src={`/static/Images/portfoliomac.png`} layout="fill" objectFit="contain" />
							</div>
							<Card.Body>
								<ListGroup className="list-group-flush text-center ">
									<Card.Text>
										<Card.Title>Links</Card.Title>
										<Card.Link
											className={classes.link}
											target="_blank"
											href="https://mobile-mechanic-bc92f.web.app/"
										>
											Live Demo
										</Card.Link>
										<Card.Link className={classes.link} href="#">
											Github Repo
										</Card.Link>
									</Card.Text>
									<ListGroupItem>
										<Card.Title>Made with </Card.Title>
										<Badge pill bg="secondary" text="light" className="px-2">
											<Card.Text className={classes.pill}>Next JS</Card.Text>
										</Badge>
										<Badge pill bg="secondary" text="light" className="mx-2">
											<Card.Text className={classes.pill}>Bootstrap</Card.Text>
										</Badge>
										<Badge pill bg="secondary" text="light" className="px-2">
											<Card.Text className={classes.pill}>SCSS</Card.Text>
										</Badge>
									</ListGroupItem>
								</ListGroup>
								<h3 className={`${classes.card__heading} pt-md-3 `}>Personal Portfolio</h3>
								<Card.Text className={classes.card__description}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore aliquam
									beatae aut sed amet rem laborum veniam, quidem velit vero, dignissimos porro, a
									dicta deserunt consequatur alias aliquid modi.
								</Card.Text>
							</Card.Body>
						</Card>

						<Card className={`${classes.card} col-5`}>
							<div
								className={classes.preview}
								style={{ width: '100%', height: '100%', position: 'relative' }}
							>
								<Image src={`/static/Images/macmechanic.png`} layout="fill" objectFit="contain" />
							</div>
							<Card.Body>
								<ListGroup className="list-group-flush text-center">
									<Card.Text>
										<Card.Title>Links</Card.Title>
										<Card.Link
											className={classes.link}
											target="_blank"
											href="https://mobile-mechanic-bc92f.web.app/"
										>
											Live Demo
										</Card.Link>
										<Card.Link className={classes.link} href="#">
											Github Repo
										</Card.Link>
									</Card.Text>
									<ListGroupItem>
										<Card.Title>Made with </Card.Title>
										<Badge pill bg="secondary" text="light" className="px-2">
											<Card.Text className={classes.pill}>React JS</Card.Text>
										</Badge>
										<Badge pill bg="secondary" text="light" className="mx-2">
											<Card.Text className={classes.pill}>Bootstrap</Card.Text>
										</Badge>
										<Badge pill bg="secondary" text="light" className="px-2">
											<Card.Text className={classes.pill}>SCSS</Card.Text>
										</Badge>
									</ListGroupItem>
								</ListGroup>
								<h3 className={`${classes.card__heading} pt-md-3 `}>Ramirez Mobile Mechanic</h3>
								<Card.Text className={classes.card__description}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore aliquam
									beatae aut sed amet rem laborum veniam, quidem velit vero, dignissimos porro, a
									dicta deserunt consequatur alias aliquid modi.
								</Card.Text>
							</Card.Body>
						</Card>

						<Card className={`${classes.card} col-5`}>
							<div
								className={classes.preview}
								style={{ width: '100%', height: '100%', position: 'relative' }}
							>
								<Image src={`/static/Images/todomac.png`} layout="fill" objectFit="contain" />
							</div>
							<Card.Body>
								<ListGroup className="list-group-flush text-center ">
									<Card.Text>
										<Card.Title>Links</Card.Title>
										<Card.Link
											className={classes.link}
											target="_blank"
											href="https://daily-agenda-289d3.web.app/"
										>
											Live Demo
										</Card.Link>
										<Card.Link className={classes.link} href="#">
											Github Repo
										</Card.Link>
									</Card.Text>
									<ListGroupItem>
										<Card.Title>Made with </Card.Title>
										<Badge pill bg="secondary" text="light" className="px-2">
											<Card.Text className={classes.pill}>React JS</Card.Text>
										</Badge>
										<Badge pill bg="secondary" text="light" className="mx-2">
											<Card.Text className={classes.pill}>Bootstrap</Card.Text>
										</Badge>
										<Badge pill bg="secondary" text="light" className="px-2">
											<Card.Text className={classes.pill}>Firebase</Card.Text>
										</Badge>
									</ListGroupItem>
								</ListGroup>
								<h3 className={`${classes.card__heading} pt-md-3 `}>Todo List</h3>
								<Card.Text className={classes.card__description}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore aliquam
									beatae aut sed amet rem laborum veniam, quidem velit vero, dignissimos porro, a
									dicta deserunt consequatur alias aliquid modi.
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Container>
			</SectionContainer>
		</Fragment>
	);
};

export default Projects;
