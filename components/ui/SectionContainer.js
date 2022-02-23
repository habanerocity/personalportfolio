import classes from './SectionContainer.module.scss';

const SectionContainer = (props) => {
	return <section className={classes.section}>{props.children}</section>;
};

export default SectionContainer;
