import React, { useState } from 'react'
import './SessionPlanCard.css'
import InfoIcon from '../Assets/information-circle1.svg'
import TopicIcon from '../Assets/play-circle.svg'
import VideocamIcon from '../Assets/videocam.svg'
import DocumentIcon from '../Assets/document.svg'

const SessionPlanCard = () => {

    const [activeTitle, setActiveTitle] = useState('SESSION PLAN');

    const handleClick = (event) => {
        setActiveTitle(event.target.textContent);
    };

    const headTitleList = [
        { headTitle: 'SESSION PLAN', img: InfoIcon },
        { headTitle: 'PRE-WATCH VIDEOS ', img: TopicIcon },
        { headTitle: 'SESSION RECORDING', img: VideocamIcon },
        { headTitle: 'REFERENCES', img: DocumentIcon },

    ];
    return (
        <>
            <div className='SessionPlanCard'>

                <div className='SessionPlanCard-head'>
                    {headTitleList.map((curHeadTitle) => (
                        <div className={`SessionPlanCard-head-item ${activeTitle === curHeadTitle.headTitle ? 'active' : ''}`} onClick={handleClick}>
                            <img src={curHeadTitle.img} alt='' />
                            <p>{curHeadTitle.headTitle}</p>
                        </div>
                    ))}
                </div>


                <div className='SessionPlanCard-body'>

                    <h3 style={{ fontSize: '2rem', fontWeight: '500', }}>Session Plan</h3>
                    <p style={{ fontSize: '1.6rem', color: 'gray' }}> LIVE session is about to start. Please stay tuned. </p>

                    <button> JOIN LIVE SESSION </button>
                    <p style={{ fontSize: '1.6rem', fontWeight: '400', }}> Sub-Topics </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', listStyle: 'none' }}>
                        <li> 1. Sorting and Indexing Dataframe</li>
                        <li> 2. Filtering Dataframe</li>
                        <li> 3. Usage of loc and iloc functions</li>
                    </ul>

                    <p style={{ fontSize: '1.6rem', fontWeight: '400' }}>Session Details</p>

                </div>
            </div>
        </>
    )
}

export default SessionPlanCard
