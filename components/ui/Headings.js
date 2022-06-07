import { Fragment } from 'react';

import classes from './Headings.module.scss';

const Headings = (props) => {
	return (
		<Fragment>
			<div>
				<h1 className={classes.subheading}>{props.children}</h1>
			</div>
			<h2 className={classes.heading}>{props.heading}</h2>
		</Fragment>
	);
};

export default Headings;
