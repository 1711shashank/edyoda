import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header-company-name'>EDYODA</div>
            <div className='header-user'> 
                <p className='header-user-name'>Hi Test Learner!</p>
                <img className='header-user-img' src={require('../Assets/Data-Analysis.png')} alt=''/>
            </div>
        </div>
    </>
  )
}

export default Header
