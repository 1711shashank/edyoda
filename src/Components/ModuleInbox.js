import React from 'react'
import '../Pages/Module.css'

const ModuleInbox = () => {
    return (
        <>
            <div className='moduleInbox'>
                <div className='moduleInbox-item'>
                    <img src={require('../Assets/play-circle.svg')} alt='' />
                    <p>Python Loops</p>
                </div>
                <div className='moduleInbox-item'>
                    <img src={require('../Assets/play-circle.svg')} alt='' />
                    <p>Quiz-1: Data Types</p>
                </div>
                <div className='moduleInbox-item'>
                    <img src='../Assets/play-circle.svg' alt='' />
                    <p>Assignment-1: Operators | Loops</p>
                </div>
            </div>

        </>
    )
}

export default ModuleInbox
