import React, { useState } from 'react'
import CertificationsCard from '../Components/CertificationsCard'
import HomeMenu from '../Components/HomeMenu'
import LearningCard from '../Components/LearningCard'
import ProgressCard from '../Components/ProgressCard'
import './Home.css'

const Home = () => {

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
