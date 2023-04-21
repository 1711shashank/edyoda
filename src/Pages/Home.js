import React from 'react'
import CertificationsCard from '../Components/CertificationsCard'
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
                        <CertificationsCard/>
                        <CertificationsCard/>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home
