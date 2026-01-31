import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import Image from 'next/image';
import Link from 'next/link';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import clockIcon from '../public/static/calendar-solid-full.svg';


import classes from './renderBlogPostCards.module.scss';

const renderBlogPostCards = (blogPost, index) => {
    const formattedDate = new Date(blogPost.datePublished).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Card className={`${classes.card} bg-white col-12 col-sm-12 col-md-6 col-lg-4`} key={index}>
            <Link href={`/blog/${blogPost.slug}`} passHref>
                <Card.Img 
                    className={classes.card__image} 
                    variant="top" 
                    src={blogPost.image} 
                    alt={blogPost.imageAlt} 
                />
            </Link>
            <Card.Body className={`${classes.card__body} p-4 d-flex flex-column`}>
                <div className={classes.flex__card__body} >
                    <Link href={`/blog/${blogPost.slug}`} passHref className={`text-decoration-none text-black ${classes.card__title_link}`}>
                        <h2 className={`fw-bolder`}>{blogPost.title}</h2>
                    </Link>
                    <ListGroup className="list-group-flush text-left">
                        <ListGroupItem className="p-0 mt-2 mb-2">
                            <span className='fs-3 fw-bold '>Tags: </span>
                            {blogPost.tools.map((tool, index) => (
                                <Badge key={index} pill text="light" className={`p-2 fs-4 m-2 ${classes.secondary_color}`}>
                                    <span className={classes.pill}>{tool}</span>
                                </Badge>
                            ))}
                        </ListGroupItem>
                    </ListGroup>
                    <div className='mt-0'>
                        <div className='fs-4 fw-bold d-block d-flex justify-content-start align-items-center'>
                            <span><Image src='static/calendar-solid-full.svg' alt="clock" width={20} height={20} className="me-2" /></span>{formattedDate}
                        </div>
                        <div className='fs-4 fw-bold d-block d-flex justify-content-start align-items-center'>
                            <span><Image src='static/clock-solid-full.svg' alt="clock" width={20} height={20} className="me-2" /></span>{blogPost.readingTime} min read
                        </div>
                    </div>
                </div>
                <p className={`${classes.card__description} fs-4 my-2`}>{blogPost.excerpt}</p>
            </Card.Body>
        </Card>
    );
};

export default renderBlogPostCards;