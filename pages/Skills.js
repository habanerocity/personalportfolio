import SideBar from '../components/ui/SideBar';
import Container from 'react-bootstrap/Container';
import classes from './Skills.module.scss';

import reactIcon from '../public/static/icons/react.png';
import bsIcon from '../public/static/icons/bs.png';
import reduxIcon from '../public/static/icons/redux.png';
import nextJSIcon from '../public/static/icons/nextjs.svg';
import gitIcon from '../public/static/icons/git.svg';
import webpackIcon from '../public/static/icons/webpack.png';

import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';

import Image from 'next/image';
import { Fragment } from 'react';

const Skills = () => {
	return (
		<Fragment>
			<SideBar />
			<SectionContainer>
				<Container className={classes.container}>
					<Headings heading="Technologies Used">Skills</Headings>
					<div className={classes.flex_container}>
						<Image src={`/static/icons/html.png`} height={150} width={150} priority />
						<Image src={`/static/icons/css.png`} height={150} width={150} priority />
						<Image src={`/static/icons/js.png`} height={150} width={160} priority />
						<Image src={webpackIcon} height={150} width={150} priority />
						<Image src={bsIcon} height={100} width={125} priority />
						<Image src={reactIcon} height={120} width={150} priority />
						<Image src={reduxIcon} height={100} width={125} priority />
						<Image src={nextJSIcon} height={150} width={200} priority />
						<Image src={`/static/icons/sass.png`} height={100} width={125} priority />
						<Image src={gitIcon} height={150} width={150} priority />
						<Image src={`/static/icons/vscode.svg`} height={100} width={100} priority />
						<Image src={`/static/icons/ps.png`} height={125} width={125} priority />
					</div>
				</Container>
			</SectionContainer>
		</Fragment>
	);
};

export default Skills;
