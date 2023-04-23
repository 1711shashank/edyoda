import React from 'react'
import AssignmentCard from './AssignmentCard'

const ModuleAssignment = () => {
    return (
        <>
            <div className='moduleAssignment'>
                <div className='moduleAssignment-top'>
                <div className='moduleAssignment-left'>
                    <h1 className='moduleBody-assignment-title'>Assignment-1: Operators | Loops</h1>
                    <p className='moduleBody-assignment-time'>20 December 2021</p>
                </div>
                <div className='moduleAssignment-right quiz-card-left'>
                    <div>
                        <h3>3</h3>
                        <p>Problems</p>
                    </div>

                    <div>
                        <h3>100</h3>
                        <p>Total Score</p>
                    </div>

                </div>

                </div>
                <p className='moduleBody-assignmentCard-title'>Assignment Details</p>

                <AssignmentCard />
            </div>
        </>
    )
}

export default ModuleAssignment
