import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'next/image';
import styles from './Slider.module.scss';
import ReviewData from './SliderData';

import quoteLeft from '../../../public/static/quote-left-solid.svg';
import arrowLeft from '../../../public/static/chevron-left.svg';
import arrowRight from '../../../public/static/chevron-right.svg';

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide(currentSlide === ReviewData.length - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? ReviewData.length - 1 : currentSlide - 1);
	};

	if (!Array.isArray(ReviewData) || ReviewData.length <= 0) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<div className={`container ${styles.slider}`}>
				<Row className='mt-5' >
					<Col lg={1} className='d-flex justify-content-center align-items-center'>
						<Image
							src={arrowLeft}
							alt="left arrow"
							className={`${styles.arrow__left} ${styles.arrow}`}
							onClick={prevSlide}
						/>
					</Col>
					<Col lg={10} >
						{ReviewData.map((review, index) => {
							return (
								<div className={index === currentSlide ? styles.slide__active : styles.slide} key={review.id}>
									{index === currentSlide && (
										<div className={styles.review__slides}>
											<div className={`${styles.review__content} container`}>
												<div className={styles.quote}>
													<Image 
													src={quoteLeft} 
													alt="quote" 
													className={styles.quote__symbol} 
													/>
												</div>
												<p className='display-5'>{review.title}</p>
												<p className={`fs-3 ${styles.testimonial}`}>{review.feedback}</p>
												<p
													className={`fs-4 ${styles.person}`}
												>{`-${review.name}, ${review.city}, ${review.state}`}</p>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</Col>
					<Col lg={1} className='d-flex justify-content-center align-items-center'>
						<Image
							src={arrowRight}
							alt="right arrow"
							className={`${styles.arrow__right} ${styles.arrow}`}
							onClick={nextSlide}
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Slider;