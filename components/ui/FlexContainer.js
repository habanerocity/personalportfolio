import classes from './FlexContainer.module.scss';

const FlexContainer = (props) => {
	return <div className={classes.flex_container}>{props.children}</div>;
};

export default FlexContainer;
