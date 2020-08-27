import React from 'react';
import './Courses.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Courses = (props) => {
    const { title, price, description, image } = props.course;
    const addCourse = props.addCourse;
    return (
        <div className="showCourses">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="image" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price : ${price}</Card.Text>
                    <Button variant="primary" className="addButton" onClick={() => addCourse(props.course)}><FontAwesomeIcon icon={faShoppingCart} />Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;