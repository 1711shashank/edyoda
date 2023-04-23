import React from 'react'
import AssignmentCard from './AssignmentCard'

const ModuleAssignment = () => {
  return (
    <>
      <div className='moduleAssignment'>
        <h1 className='moduleBody-assignment-title'>Assignment-1: Operators | Loops</h1>
        <p className='moduleBody-assignment-time'>20 December 2021</p>

        <p className='moduleBody-assignmentCard-title'>Assignment Details</p>

        <AssignmentCard />
      </div>
    </>
  )
}

export default ModuleAssignment
