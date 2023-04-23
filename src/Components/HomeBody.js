import React from 'react'
import CertificationsCard from './CertificationsCard'
import LearningCard from './LearningCard'
import ProgressCard from './ProgressCard'

const HomeBody = () => {
    return (
        <>

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


        </>
    )
}

export default HomeBody
