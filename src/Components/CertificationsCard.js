import React from 'react'
import './CertificationsCard.css'

const CertificationsCard = () => {
    return (
        <>

            <div className='upcoming-certifications-crad card'>
                
                <img src={require('../Assets/Data-Analysis.png')} alt='' />

                <div className='course-details'>
                    <p className='course-details-head'> CERTIFICATION  &nbsp; &nbsp; | &nbsp; &nbsp;  ATTEMPT 1 </p>
                    <p className='course-details-name'> DATA ANALYSIS <br /> CERTIFICATION</p>
                    <p className='course-details-status'> COMPLETED &nbsp; &nbsp; | &nbsp; &nbsp; 21 MAR 2022 </p>
                </div>


                <div className='exam-structure'>
                    <p className='exam-title'> Exam Structure </p>
                    <div className='exam-rounds'>
                        <p className='exam-round-title'> Round 1 </p>
                        <p className='exam-round'> MCQ </p>
                        <p className='exam-round'> Coding </p>
                    </div>
                    <div className='exam-rounds'>
                        <p className='exam-round-title'> Round 2</p>
                        <p className='exam-round'>Project</p>
                    </div>
                </div>

                <button> VIEW EXAM DETAILS </button>

            </div>


        </>
    )
}

export default CertificationsCard
