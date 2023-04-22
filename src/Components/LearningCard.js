import React from 'react'
import './LearningCard.css'

const LearningCard = () => {
    return (
        <>
            <div className='learning-card card'>
                <div className='learning-card-left'>
                    <div className='learning-card-leftDetails'>
                        <img src={require('../Assets/Data-Wrangling.png')} alt='' />

                        <div>
                            <p>DATA WRANGLING & <br /> VISUALIZATION</p>
                            <div className='learning-card-instructorDetails'>
                                <img src={require('../Assets/Data-Wrangling.png')} alt='' />
                                <p>Test Instructor</p>
                            </div>

                        </div>
                    </div>
                    <div className='learning-card-leftStatsContainer'>

                        <div className='learning-card-leftStats'>
                            <p>Live Sessions</p>
                            <div>
                                <p>0/13</p>
                                <span className='learning-card-leftStatsBar'></span>
                            </div>
                        </div>
                        <div className='learning-card-leftStats'>

                            <p>Assignments</p>
                            <div>
                                <p>0/13</p>
                                <span className='learning-card-leftStatsBar'></span>
                            </div>
                        </div>
                        <div className='learning-card-leftStats'>

                            <p>MCO Ouiz</p>
                            <div>
                                <p>0/13</p>
                                <span className='learning-card-leftStatsBar'></span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='learning-card-right'>
                    <div className='learning-card-right-dateTime'>
                        <h3>Today's Plan</h3>
                        <p>21 March 2022</p>
                    </div>
                    
                    <div className='learning-card-right-module'>
                        <p>Data Transformation using <br/> Pandas - 3</p>
                    </div>
                    <div className='learning-card-right-feedBack'>
                        <h3>Daily Feedback</h3>
                        <p>opens at 07:30 PM</p>
                    </div>
                    <div className='learning-card-right-classTime'>
                        <button> JOIN LIVE SESSION</button>
                        <p>BEGINS AT 07:30 PM</p>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default LearningCard
