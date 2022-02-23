import classes from './Button.module.scss';

const Button = (props) => {
	return (
		<button className={classes.btn}>
			<span>{props.name}</span>
		</button>
	);
};

export default Button;
