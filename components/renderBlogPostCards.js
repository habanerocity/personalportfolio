import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import Image from 'next/image';
import Link from 'next/link';

import HeroButton from '../components/ui/HeroButton';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import classes from './renderBlogPostCards.module.scss';

const renderBlogPostCards = (blogPost, index) => {
    const formattedDate = new Date(blogPost.datePublished).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Card 
            className={`${classes.card} bg-white col-12 col-sm-12 col-md-12 col-lg-3 `} 
            key={index}
            itemScope 
            itemType="https://schema.org/BlogPosting"
        >
            <Link href={`/blog/${blogPost.slug}`} passHref>
                <Card.Img 
                    className={classes.card__top__br} 
                    variant="top" 
                    src={blogPost.image} 
                    alt={blogPost.imageAlt} 
                    itemProp="image"
                />
            </Link>
            <Card.Body className={`${classes.card__body} p-4 d-flex flex-column`}>
                <div className={classes.flex__card__body} >
                    <Link href={`/blog/${blogPost.slug}`} passHref className={`text-decoration-none text-black ${classes.card__title_link}`}>
                        <h2 className={`fw-bolder`} itemProp="headline">{blogPost.title}</h2>
                    </Link>
                    <link itemProp="mainEntityOfPage" href={`https://www.lindyramirez.com/blog/${blogPost.slug}`} />
                    <ListGroup className="list-group-flush text-left">
                        <ListGroupItem className="p-0 mt-2 mb-2">
                            <span className='fs-3 fw-bold '>Tags: </span>
                            {blogPost.tools.map((tool, index) => (
                                <Badge key={index} pill text="light" className={`p-2 fs-5 m-2 ${classes.secondary_color}`}>
                                    <span className={classes.pill}>{tool}</span>
                                </Badge>
                            ))}
                            <meta itemProp="keywords" content={blogPost.tools.join(', ')} />
                        </ListGroupItem>
                    </ListGroup>
                    <div className='mt-0'>
                        <div className='fs-4 fw-bold d-block d-flex justify-content-start align-items-center'>
                            <span><Image src='static/calendar-solid-full.svg' alt="clock" width={20} height={20} className="me-2" /></span>
                            <time dateTime={blogPost.datePublished} itemProp="datePublished">{formattedDate}</time>
                            <meta itemProp="dateModified" content={blogPost.dateModified} />
                        </div>
                        <div className='fs-4 fw-bold d-block d-flex justify-content-start align-items-center'>
                            <span><Image src='static/clock-solid-full.svg' alt="clock" width={20} height={20} className="me-2" /></span>{blogPost.readingTime} min read
                        </div>
                    </div>
                </div>
                <p className={`${classes.card__description} fs-4 my-2`} itemProp="abstract">{blogPost.excerpt}</p>
                <span itemProp="author" itemScope itemType="https://schema.org/Person" className="visually-hidden">
                    <meta itemProp="name" content={blogPost.author.name} />
                </span>
                <span itemProp="publisher" itemScope itemType="https://schema.org/Organization" className="visually-hidden">
                    <meta itemProp="name" content="Lindy Ramirez Web Development" />
                    <link itemProp="url" href="https://www.lindyramirez.com" />
                    <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                        <link itemProp="url" href="https://www.lindyramirez.com/static/Lr-svg.svg" />
                    </span>
                </span>
            </Card.Body>
            <div className='mb-4 d-flex justify-content-center align-items-center'>
                <HeroButton  href={`/blog/${blogPost.slug}`}>Read Post</HeroButton>
            </div>
        </Card>
    );
};

export default renderBlogPostCards;