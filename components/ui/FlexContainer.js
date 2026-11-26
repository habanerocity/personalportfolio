import classes from './FlexContainer.module.scss';

const FlexContainer = (props) => {
	// props.className is optional, so pages can adjust the container (e.g. its min-height)
	return <div className={`d-flex position-relative align-items-start flex-row justify-content-center flex-wrap ${classes.flex_container} ${props.className || ''}`}>{props.children}</div>;
};

export default FlexContainer;
