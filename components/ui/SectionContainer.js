import classes from './SectionContainer.module.scss';

const SectionContainer = (props) => {
	return <section className={`${classes.section} col-9`}>{props.children}</section>;
};

export default SectionContainer;
