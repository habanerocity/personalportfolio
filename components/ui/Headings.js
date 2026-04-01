import { Fragment } from 'react';

import classes from './Headings.module.scss';

const Headings = (props) => {
	return (
		<Fragment>
			<div>
				<h2 className={`text-uppercase text-start text-white ${classes.subheading}`}>{props.children}</h2>
			</div>
			<h1 className={`fw-bold text-start ${classes.heading}`}>{props.heading}</h1>
		</Fragment>
	);
};

export default Headings;