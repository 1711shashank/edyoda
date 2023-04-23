import React from 'react'
import CourseHeader from '../Components/CourseHeader';
import HomeIcon from '../Assets/home.png'
import ModuleIcon from '../Assets/modules.png'
import InstructorIcon from '../Assets/Instructor.png'
import { useNavigate } from 'react-router-dom';


const Instructor = () => {

    const navigate = useNavigate();

    return (
        <>
            <CourseHeader />
            <div className='home-navbar'>
                <img src={HomeIcon} alt='' onClick={() => navigate('/')} />
                <img src={ModuleIcon} alt='' onClick={() => navigate('/Module')} />
                <img src={InstructorIcon} alt='' onClick={() => navigate('/Instructor')} />
            </div>
        </>
    )
}

export default Instructor
