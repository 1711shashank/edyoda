import React, { useState } from 'react'
import CourseHeader from '../Components/CourseHeader'
import ModuleTopic from '../Components/ModuleTopic'
import ModuleQuiz from '../Components/ModuleQuiz'
import ModuleAssignment from '../Components/ModuleAssignment'
import ModuleInbox from '../Components/ModuleInbox'
import HomeIcon from '../Assets/home.png'
import ModuleIcon from '../Assets/modulesActive.png'
import InstructorIcon from '../Assets/Instructor.png'
import './Module.css'
import { useNavigate } from 'react-router-dom'

const Module = () => {

    const navigate = useNavigate();
    const [moduleInbox, setModuleInbox] = useState('Lecture');

    return (
        <>
            <div className='modale'>
                <CourseHeader />
                <div className='modale-body'>

                    <div className='home-navbar'>
                        <img src={HomeIcon} alt='' onClick={() => navigate('/')} />
                        <img src={ModuleIcon} alt='' onClick={() => navigate('/Module')} />
                        <img src={InstructorIcon} alt='' onClick={() => navigate('/Instructor')} />
                    </div>

                    <ModuleInbox setModuleInbox={setModuleInbox} />

                    {moduleInbox === 'Lecture' ? <ModuleTopic /> : <></>}
                    {moduleInbox === 'Quiz' ? <ModuleQuiz /> : <></>}
                    {moduleInbox === 'Assignment' ? <ModuleAssignment /> : <></>}

                </div>
            </div>

            <img className='chatIcon' src={require('../Assets/chatIcon.jpg')} alt='' />
        </>
    )
}

export default Module
