import React from 'react'
import './ProgressCard.css'

const ProgressCard = () => {
  return (
    <>
      <div className='progress-card card'>
        <p className='progress-card-title'>Progress Overview</p>
        <div className='progress-card-innerBox'>
          <h2 >0%</h2>
          <p>Overall Grade</p>
        </div>
        <div className='progress-card-innerBox'>
          <h2>0%</h2>
          <p>Attendance</p>
        </div>
        <p className='progress-card-viewDetails'>VIEW DETAILED PROGRESS</p>
      </div>

    </>
  )
}

export default ProgressCard
