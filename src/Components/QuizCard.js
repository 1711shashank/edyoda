import React from 'react'
import CalendarIcon from '../Assets/calendar.svg'
import ClockIcon from '../Assets/clock-blue.svg'

const QuizCard = () => {
    return (
        <>
            <div className='quiz-card card'>
                <div className='quiz-card-left'>
                    <div>
                        <h3>10</h3>
                        <p>Questions</p>
                    </div>
                    <div>
                        <h3>-</h3>
                        <p>Duration</p>
                    </div>
                    <div>
                        <h3>125</h3>
                        <p>Total Score</p>
                    </div>
                </div>
                <div className='quiz-card-right'>
                    <div className='quiz-card-right-Container'>
                        <p className='quiz-card-right-title'>Start:</p>
                        <div className='quiz-card-right-row'>
                            <img src={CalendarIcon} alt='' />
                            <p>16 Dec 2021</p>
                        </div>
                        <div className='quiz-card-right-row'>
                            <img src={ClockIcon} alt='' />
                            <p> 07:30 PM</p>
                        </div>
                    </div>

                    <div className='quiz-card-right-Container'>
                        <p className='quiz-card-right-title'>End:</p>
                        <div className='quiz-card-right-row'>
                            <img src={CalendarIcon} alt='' />
                            <p>19 Dec 2021</p>
                        </div>
                        <div className='quiz-card-right-row'>
                            <img src={ClockIcon} alt='' />
                            <p> 11:59 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizCard
