import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './_SuccessWindow.module.scss';
import close from '../../../public/static/icons/times-solid.svg';

import Image from 'next/image';

const SuccessWindow = (props) => {
	const [ closeWindow, setCloseWindow ] = useState(false);

	const closeWindowHandler = () => {
		setCloseWindow(true);
	};

	return (
		<div className={styles.backdrop} onConfirm={props.onConfirm}>
			<div className={styles.success}>
				<div onClick={props.onConfirm} className={styles.closeBtn__container}>
					<Image src={close} width={5} height={5} className={styles.close} alt="close button" />
				</div>
				<div className={styles.flex__container}>
					<p>Thanks, I will get back to you promptly!</p>
					<button className={styles.btn} onClick={props.onConfirm}>
						Got It!
						<span />
					</button>
				</div>
			</div>
		</div>
	);
};

const DisplaySuccess = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<SuccessWindow onConfirm={props.onConfirm} />,
				document.getElementById('success-root')
			)}
		</React.Fragment>
	);
};

export default DisplaySuccess;
