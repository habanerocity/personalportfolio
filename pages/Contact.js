import classes from './Contact.module.scss';

import SideBar from '../components/ui/SideBar';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';
import Container from 'react-bootstrap/Container';
import ContactForm from '../components/ui/ContactForm';

import { motion } from 'framer-motion';

import Head from 'next/head';
import Image from 'next/image';

const Contact = () => {
	return (
		<main>
			<Head>
				<title>Contact Me - Lindy Ramirez, Front End Developer based in Los Angeles</title>
				<meta
					name="description"
					content="Contact page for Lindy Ramirez, front end react developer based in Los Angeles, California. Contact me here."
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
						<div className={classes.flex__container}>
							<div className={classes.headings__container}>
								<Headings heading="Contact Me">Contact</Headings>
							</div>
						</div>
						<div className={classes.budz}>
							<div className={classes.main__flex}>
								<div className={classes.flex__container}>
									<div className={classes.two}>
										<Container className={classes.budz}>
											<div className={classes.pic__holder}>
												<Image
													src={'/static/Images/shapes3.png'}
													className={classes.shapes}
													layout="fill"
													alt="Abstract Shapes"
												/>
											</div>
											<ContactForm />
										</Container>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</SectionContainer>
			</motion.div>
		</main>
	);
};

export default Contact;
