import React from 'react';
import Data from '../../Data';
import { useState } from 'react';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
import './Main.css'


const Main = () => {
    const [courses, setCourses] = useState(Data);
    const [carts, setCarts] = useState([]);
    const addCourse = (course) => {
        const newCart = [...carts, course]
        setCarts(newCart);
    }
    return (
        <div className="main">
            <div className="courses">
                <h2 className="h2Edit">Available Courses</h2>
                <div className="courseList">
                    {
                        courses.map(course => <Courses addCourse={addCourse} course={course} key={course.id}></Courses>)
                    }
                </div>
            </div>
            <div className="cart">
                <h2 className="h2Edit">Enrolled Courses</h2>
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Main;