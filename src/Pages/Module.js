import React from 'react'
import CourseHeader from '../Components/CourseHeader'
import ModuleBody from '../Components/ModuleBody'
import ModuleInbox from '../Components/ModuleInbox'
import SideNavebar from '../Components/SideNavebar'
import './Module.css'

const Module = () => {
  return (
    <>
      <div className='modale'>
        <CourseHeader />
        <div className='modale-body'>
          <SideNavebar />
          <ModuleInbox />
          <ModuleBody />
          
        </div>


      </div>



    </>
  )
}

export default Module
