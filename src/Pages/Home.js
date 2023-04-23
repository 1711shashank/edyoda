import React, { useState } from 'react'
import HomeMenu from '../Components/HomeMenu'
import HomeIcon from '../Assets/homeActive.png'
import ModuleIcon from '../Assets/modules.png'
import InstructorIcon from '../Assets/Instructor.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import HomeBody from '../Components/HomeBody'
import HomeHeader from '../Components/HomeHeader'

const Home = () => {

    const navigate = useNavigate();
    const [shoeMenu, setShoeMenu] = useState(false);
    const [courseID, setCourseId] = useState('DS031221');

    const openMenu = () => {
        setShoeMenu(!shoeMenu);
    }


    return (
        <>
            <div className='home'>

                <HomeHeader courseID={courseID} openMenu={openMenu}/>

                {shoeMenu ? <HomeMenu showMenu={openMenu} courseID={courseID} setCourseId={setCourseId} /> : <></>}

                <div className='home-Body'>
                    <div className='home-navbar'>
                        <img src={HomeIcon} alt='' onClick={() => navigate('/')} />
                        <img src={ModuleIcon} alt='' onClick={() => navigate('/Module')} />
                        <img src={InstructorIcon} alt='' onClick={() => navigate('/Instructor')} />
                    </div>

                    <div className='home-course-body'>
                        <HomeBody />
                    </div>

                </div>
                <img className='chatIcon' src={require('../Assets/chatIcon.jpg')} alt='' />
            </div>
        </>
    )
}

export default Home
