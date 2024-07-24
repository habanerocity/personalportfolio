import classes from './FlexContainer.module.scss';

const FlexContainer = (props) => {
	return <div className={`d-flex position-relative align-items-start flex-row justify-content-center flex-wrap ${classes.flex_container}`}>{props.children}</div>;
};

export default FlexContainer;
