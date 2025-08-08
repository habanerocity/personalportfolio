import React from 'react';
import classes from './SectionContainer.module.scss';

const SectionContainer = (props) => {
	const { className, children } = props;

	return <section className={`${className} ${classes.section}`}>{children}</section>;
};

export default SectionContainer;
