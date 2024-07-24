import classes from './Button.module.scss';

const Button = (props) => {
	return (
		<button className={`text-center border-0 text-white ${classes.btn} fs-3`}>
			<span>{props.name}</span>
		</button>
	);
};

export default Button;
