import React, { useState } from 'react'
import CertificationsCard from '../Components/CertificationsCard'
import HomeMenu from '../Components/HomeMenu'
import LearningCard from '../Components/LearningCard'
import ProgressCard from '../Components/ProgressCard'
import HomeIcon from '../Assets/homeActive.png'
import ModuleIcon from '../Assets/modules.png'
import InstructorIcon from '../Assets/Instructor.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
    const [shoeMenu, setShoeMenu] = useState(false);
    const [courseID, setCourseId] = useState('DS031221');

    const openMenu = () => {
        setShoeMenu(!shoeMenu);
    }


    return (
        <>
            <div className='home'>
                <div className='home-Header'>
                    <p className='course-id'> {courseID} </p>
                    <span className='downward-triangle' onClick={openMenu} ></span>
                    <p className='course-name'> Data Scientist Program</p>
                </div>

                {shoeMenu ? <HomeMenu showMenu={openMenu} courseID={courseID} setCourseId={setCourseId} /> : <></>}

                <div className='home-Body'>


                    <div className='home-navbar'>
                        <img src={HomeIcon} alt='' onClick={() => navigate('/')} />
                        <img src={ModuleIcon} alt='' onClick={() => navigate('/Module')} />
                        <img src={InstructorIcon} alt='' onClick={() => navigate('/Instructor')} />
                    </div>


                    <div className='home-course-body'>
                        <div className='course-upcoming-certifications'>
                            <h2 className='card-title'>Upcoming Certifications</h2>
                            <CertificationsCard />
                        </div>
                        <div className='continue-learning'>
                            <h2 className='card-title'>Continue Learning</h2>
                            <div className='continue-learning-cards'>
                                <LearningCard />
                                <ProgressCard />
                            </div>
                        </div>
                    </div>
                </div>
                <img className='chatIcon' src={require('../Assets/chatIcon.jpg')} alt='' />
            </div>


        </>
    )
}

export default Home
