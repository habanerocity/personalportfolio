// import Head from 'next/head';
// import Image from 'next/image';
import Hero from '../components/ui/Hero';
import { Fragment } from 'react';
import SideBar from '../components/ui/SideBar';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// import classes from './index.module.scss';

const HomePage = () => {
	return (
		<Fragment>
			{/* <Navbar className={classes.nav} bg="light" variant="light">
				<Container>
					<div>
						<Navbar.Brand className={classes.brand} href="#home">
							LR
						</Navbar.Brand>
					</div>
					<div>
						<Nav className={classes.nav_items}>
							<Nav.Link className={classes.icon} href="#home">
								<Image src={`/../public/icons/house-solid.svg`} height={20} width={20} priority />
								<span> Home</span>
							</Nav.Link>
							<Nav.Link className={classes.icon} href="#features">
								<Image src={`/../public/icons/user-solid.svg`} height={20} width={20} priority />
								<span> About Me</span>
							</Nav.Link>
							<Nav.Link className={classes.icon} href="#skills">
								<Image src={`/../public/icons/laptop-code-solid.svg`} height={25} width={25} priority />
								<span> Skills</span>
							</Nav.Link>
							<Nav.Link className={classes.icon} href="#pricing">
								<Image src={`/../public/icons/briefcase-solid.svg`} height={20} width={20} priority />
								<span> Projects</span>
							</Nav.Link>
							<Nav.Link className={classes.icon} href="#contact">
								<Image src={`/../public/icons/envelope-solid.svg`} height={20} width={20} priority />
								<span> Contact</span>
							</Nav.Link>
						</Nav>
					</div>
				</Container>
			</Navbar> */}
			<SideBar />
			<Hero />
		</Fragment>
	);
};

export default HomePage;
