import { useState } from 'react';

import Image from 'next/image';
import styles from './Slider.module.scss';
import ReviewData from './SliderData';

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
		<aside 
			className={styles.wrapper}
			aria-label="Client testimonials"
			role="complementary"
		>
			<div className={styles.visually_hidden}>
				<h2>Web Development Client Testimonials</h2>
				<p>Reviews from satisfied web development clients</p>
			</div>
			<div className={`container d-flex justify-content-center align-items-center ${styles.slider}`}>
					<div className='w-100 d-flex justify-content-end mt-5' 	>
						<nav 
							className='w-25 d-flex justify-content-end align-items-center gap-2'
							aria-label="Testimonial navigation controls"
						>
							<button
								className={`${styles.arrow__left} ${styles.arrow}`}
								onClick={prevSlide}
								aria-label="Previous testimonial"
								type="button"
							>
								<Image
									src='/static/chevron-left.svg'
									alt=''
									width={32}
									height={32}
									aria-hidden="true"
								/>
								<span className={styles.visually_hidden}>Previous testimonial</span>
							</button>
							<button
								className={`${styles.arrow__right} ${styles.arrow}`}
								onClick={nextSlide}
								aria-label="Next testimonial"
								type="button"
							>
								<Image
									src='/static/chevron-right.svg'
									alt=''
									width={32}
									height={32}
									aria-hidden="true"
								/>
								<span className={styles.visually_hidden}>Next testimonial</span>
							</button>
						</nav>
					</div>
					<div 
						className="testimonials-carousel"
						role="region"
						aria-live="polite"
						aria-atomic="true"
						aria-label="Customer testimonials carousel"
					>
						{ReviewData.map((review, index) => {
							return (
								<div 
									className={index === currentSlide ? styles.slide__active : styles.slide} 
									key={review.id}
								>
									{index === currentSlide && (
										<div className={styles.review__slides}>
											<article className={`${styles.review__content} container`}>
												<div className={styles.quote} aria-hidden="true">
													<Image
                                                        src='/static/quote-left-solid.svg'
														alt='client testimonials'
                                                        className={styles.quote__symbol}
                                                        aria-hidden="true" 
                                                        width={60}
                                                        height={60}
														role="presentation"
                                                    />
												</div>
												<blockquote 
													className={`fs-3 ${styles.testimonial}`}
												>
													{review.feedback}
												</blockquote>
												<footer className="reviewer-info mt-3">
																										<div 
																											className="reviewer-avatar mb-2 d-flex justify-content-center align-items-center"
																										>
																											<Image 
																												src={review.companyLogo}
																												alt={`${review.company} company logo`}
																												className='rounded-circle'
																												height={65}
																												width={65}
																											/>
																										</div>
																										
																										<cite 
																											className="reviewer-details"
																										>
																											<div 
																												className={`fs-2 ${styles.person}`}
																											>
																												{review.name}
																											</div>														<div 
															className={`fs-3 ${styles.person}`}
														>
															<span>{review.company}</span>
															{' | '}
															<span>
															<span>{review.city}</span>
															{', '}
															<span>{review.state}</span>
															</span>
														</div>
													</cite>
												</footer>
											</article>
										</div>
									)}
								</div>
							);
						})}
					</div>
					<nav 
						className={`d-flex justify-content-center gap-2 mt-5 ${styles.pagination}`}
						aria-label="Testimonial slide indicators"
						role="group"
					>
					{ReviewData.map((review, index) => (
						<button
							key={index}
							className={`${styles.dot} ${currentSlide === index ? styles.dot_active : ''}`}
							onClick={() => setCurrentSlide(index)}
							aria-label={`Go to testimonial ${index + 1} from ${review.name}`}
							aria-current={currentSlide === index ? 'true' : 'false'}
							type="button"
						/>
					))}
					</nav>
			</div>
		</aside>
	);
};

export default Slider;