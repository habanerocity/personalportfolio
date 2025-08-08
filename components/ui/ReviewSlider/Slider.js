import React, { useState } from 'react';

import Image from 'next/image';
import styles from './Slider.module.scss';
import ReviewData from './SliderData';

import QuoteLeftIcon from '../../../public/static/quote-left-solid.svg';
import ArrowLeftIcon from '../../../public/static/chevron-left.svg';
import ArrowRightIcon from '../../../public/static/chevron-right.svg';

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
			<div className={`container d-flex justify-content-center align-items-center ${styles.slider}`}>
					<div className='w-100 d-flex justify-content-end mt-5' >
						<div className='w-25 d-flex justify-content-end align-items-center' >
						<ArrowLeftIcon
                                className={`${styles.arrow__left} ${styles.arrow}`}
                                onClick={prevSlide}
                                aria-label="Previous slide"
                                role="button"
                                width={24}
                                height={24}
                            />
                            <ArrowRightIcon
                                className={`${styles.arrow__right} ${styles.arrow}`}
                                onClick={nextSlide}
                                aria-label="Next slide"
                                role="button"
                                width={24}
                                height={24}
                            />
						</div>
					</div>
					<div >
						{ReviewData.map((review, index) => {
							return (
								<div className={index === currentSlide ? styles.slide__active : styles.slide} key={review.id}>
									{index === currentSlide && (
										<div className={styles.review__slides}>
											<div className={`${styles.review__content} container`}>
												<div className={styles.quote}>
													<QuoteLeftIcon 
                                                        className={styles.quote__symbol}
                                                        aria-hidden="true" 
                                                        width={60}
                                                        height={60}
                                                    />
												</div>
												<p className={`fs-3 ${styles.testimonial}`}>{review.feedback}</p>
												<Image 
												src={review.companyLogo}
												alt='company logo'
												className='rounded-circle'
												height={65}
												width={65}
												/>
												<p className={`fs-2 ${styles.person}`}>{review.name}</p>
												<p className={`fs-3 ${styles.person}`}>{`${review.company} | ${review.city}, ${review.state}`}</p>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
					<div className={`d-flex justify-content-center gap-2 mt-5 ${styles.pagination}`}>
					{ReviewData.map((_, index) => (
						<button
						key={index}
						className={`${styles.dot} ${currentSlide === index ? styles.dot_active : ''}`}
						onClick={() => setCurrentSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
						/>
					))}
					</div>
			</div>
		</div>
	);
};

export default Slider;