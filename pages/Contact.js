import { Fragment } from 'react';

import classes from './Contact.module.scss';

import SideBar from '../components/ui/SideBar';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';
import Container from 'react-bootstrap/Container';
import Button from '../components/ui/Button';

const Contact = () => {
	return (
		<Fragment>
			<SideBar />
			<SectionContainer>
				<Container>
					<div className={`col-12`}>
						<div className={classes.main__flex}>
							<div className={classes.flex__container}>
								{/* <div className={classes.heading__holder}>
									<Headings heading="Get in Touch">Contact Me</Headings>
								</div> */}
								<div className={classes.two}>
									<Container>
										<h1 className={classes.hire}>Get in Touch</h1>
										<p className={classes.description}>
											I am available for freelance work. Connect with me via phone: 01923 088574
											or email: admin@example.com
										</p>
										<div className={classes.input__box}>
											<input placeholder="Enter your name" type="text" />
											<input placeholder="Enter your email" type="text" />
											<input placeholder="Enter your subject" type="text" />
											<textarea
												className={classes.msg}
												rows="10"
												placeholder="Enter your message"
												id="msg"
											/>
											<div className={classes.hire__btn}>
												<Button name="Hire Me" />
											</div>
										</div>
									</Container>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</SectionContainer>
		</Fragment>
	);
};

export default Contact;
