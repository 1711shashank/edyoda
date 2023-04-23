import React, { useState } from 'react';
import './HomeMenu.css';

const HomeMenu = ({ showMenu, courseID, setCourseId }) => {
    const [activeCourse, setActiveCourse] = useState(courseID);

    const handleClick = (event) => {
        const courseID = event.target.textContent;
        setCourseId(courseID);
        setActiveCourse(courseID);
        showMenu();
    };

    const courseList = [
        { id: 'ECRD', label: 'ECRD' },
        { id: 'FSR222222', label: 'FSR222222' },
        { id: 'DS261121', label: 'DS261121' },
        { id: 'DS031221', label: 'DS031221' },
    ];

    return (
        <div className='homeMenu'>
            <div className='homeMenu-select'>Select Program</div>
            <ul className='course-list'>
                {courseList.map((course) => (
                    <li
                        key={course.id}
                        className={`course-item ${activeCourse === course.id ? 'active' : ''}`}
                        onClick={handleClick}
                    >
                        {course.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeMenu;
