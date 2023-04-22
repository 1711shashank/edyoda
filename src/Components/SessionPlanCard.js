import React, { useState } from 'react'
import './SessionPlanCard.css'

const SessionPlanCard = () => {

    const [activeTitle, setActiveTitle] = useState('SESSION PLAN');

    const handleClick = (event) => {
        setActiveTitle(event.target.textContent);
    };

    const headTitleList = [
        { headTitle: 'SESSION PLAN' },
        { headTitle: 'PRE-WATCH VIDEOS ' },
        { headTitle: 'SESSION RECORDING' },
        { headTitle: 'REFERENCES' },

    ];
    return (
        <>
            <div className='SessionPlanCard'>
                <div className='SessionPlanCard-head'>
                    {
                        headTitleList.map((curHeadTitle) => (
                            <div className={`SessionPlanCard-head-item ${activeTitle === curHeadTitle.headTitle ? 'active' : ''}`} onClick={handleClick}>
                                <p>
                                    {curHeadTitle.headTitle}</p>
                            </div>
                        ))
                    }

                </div>
                <div className='SessionPlanCard-body'>

                    <h3 style={{ fontSize: '2rem', fontWeight: '500', }}>Session Plan</h3>
                    <p style={{ fontSize: '1.6rem', color:'gray' }}> LIVE session is about to start. Please stay tuned. </p>

                    <button> JOIN LIVE SESSION </button>

                    <p style={{ fontSize: '1.6rem', fontWeight: '400', }}> Sub-Topics </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', listStyle: 'none' }}>
                        <li> 1. Sorting and Indexing Dataframe</li>
                        <li> 2. Filtering Dataframe</li>
                        <li> 3. Usage of loc and iloc functions</li>
                    </ul>

                    <p style={{ fontSize: '1.6rem', fontWeight: '400', }}>Session Details</p>

                </div>


            </div>

        </>
    )
}

export default SessionPlanCard
