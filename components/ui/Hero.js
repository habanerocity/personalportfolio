import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import me from '../../public/static/Images/lindy.png';

import classes from './Hero.module.scss';
import { classicNameResolver } from 'typescript';

const Hero = () => {
	return (
		<div className={classes.hero}>
			<Head>
				<title>Lindy Ramirez Front End Developer</title>
			</Head>
			<div className={classes.hero_text}>
				<h1 className={classes.intro}>
					Hello 👋🏼, <br />
					My Name is Lindy
				</h1>
				<Image
					alt={'lindy'}
					className={classes.lindy}
					src={'/static/Images/lindy.png'}
					height={200}
					width={200}
					priority
				/>
				<h2 className={classes.details}>I'm a Front End Developer Based in El Monte, CA</h2>
				<div>
					<Link className={classes.link} href="/Projects">
						<button className={`${classes.see_projects} `}>See Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
