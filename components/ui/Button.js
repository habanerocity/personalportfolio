import classes from './Button.module.scss';

const Button = (props) => {
	return (
		<button className={`${classes.btn} fs-3`}>
			<span>{props.name}</span>
		</button>
	);
};

export default Button;
