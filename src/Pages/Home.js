import React from 'react'
import CertificationsCard from '../Components/CertificationsCard'
import LearningCard from '../Components/LearningCard'
import ProgressCard from '../Components/ProgressCard'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home-Header'>
                    <p className='course-id'> DS031221 </p>
                    <p className='course-name'> Data Scientist Program</p>
                </div>
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
                            <div className='continue-learning-cards'></div>
                                <LearningCard />
                                <ProgressCard />
                        </div>
                        
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home
