import { Fragment } from 'react';

import classes from './Headings.module.scss';

const Headings = (props) => {
	return (
		<Fragment>
			<div>
				<h1 className={classes.subheading}>{props.children}</h1>
			</div>
			<h1 className={classes.heading}>{props.heading}</h1>
		</Fragment>
	);
};

export default Headings;
