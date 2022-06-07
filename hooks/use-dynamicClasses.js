import styles from '../components/ui/ContactForm.module.scss';

const useDynamicClasses = (hasError, valueIsValid) => {
	const dynamicClass = hasError
		? `${styles.input__error}`
		: valueIsValid ? `${styles.input__success}` : `${styles.inp}`;

	return dynamicClass;
};

export default useDynamicClasses;
