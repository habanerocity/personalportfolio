import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import classes from './renderProjectCards.module.scss';

const renderProjectCards = (cardProjectData, index) => {
    return (
        <Card className={`${classes.card} bg-white col-12 col-sm-12 col-md-12 col-lg-5`} key={index}>
            <Card.Img className={classes.card__top__br} variant="top" src={cardProjectData.image} alt={cardProjectData.title} />
            <Card.Body className={`${classes.card__body} p-4 d-flex flex-column align-items-center justify-content-between`}>
                <div className={classes.flex__card__body} >
                    <h2 className={`text-center fw-bolder`}>{cardProjectData.title}</h2>
                    <ListGroup className="list-group-flush text-center ">
                        <ListGroupItem>
                            <h3>Tools used</h3>
                            {cardProjectData.tools.map((tool, index) => (
                                <Badge key={index} pill text="light" className={`p-2 fs-4 m-2 ${classes.secondary_color}`}>
                                    <span className={classes.pill}>{tool}</span>
                                </Badge>
                            ))}
                        </ListGroupItem>
                    </ListGroup>
                    <span className={`${classes.card__description} fs-4 my-2`}>{cardProjectData.description}</span>
                </div>
                <div className="w-100 mt-2 d-flex justify-content-evenly align-items-center">
                    {cardProjectData.liveDemo && <Button href={cardProjectData.liveDemo} target="_blank" className={`fs-3`} variant="secondary" size="lg">Live Demo</Button>}
                    {cardProjectData.github && <Button href={cardProjectData.github} target="_blank" className={`fs-3`} variant="outline-secondary" size="lg">View Code</Button>}
                    {cardProjectData.designFile && <Button href={cardProjectData.designFile} target="_blank" className={`fs-3 px-4`} variant="secondary" size="lg">View Design</Button>}
                </div>
            </Card.Body>
        </Card>
    );
};

export default renderProjectCards;