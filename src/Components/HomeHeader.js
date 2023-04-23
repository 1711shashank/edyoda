import React from 'react'

const HomeHeader = ({ courseID, openMenu }) => {
    return (
        <>
            <div className='home-Header'>
                <p className='course-id'> {courseID} </p>
                <span className='downward-triangle' onClick={openMenu} ></span>
                <p className='course-name'> Data Scientist Program</p>
            </div>

        </>
    )
}

export default HomeHeader
