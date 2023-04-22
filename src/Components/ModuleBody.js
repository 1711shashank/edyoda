import React from 'react'
import './ModuleBody.css'
import SessionPlanCard from './SessionPlanCard'

const ModuleBody = () => {
  return (
    <>
    <div className='moduleBody'>
        <h1 className='moduleBody-course-title'>Python Loops</h1>
        <p className='moduleBody-course-time'>15 December 2021, Wednesday, 07:30 PM</p>
        <p className='moduleBody-course-feedback'>DAILY FEEDBACK</p>

        <SessionPlanCard/>

    </div>
      
    </>
  )
}

export default ModuleBody
