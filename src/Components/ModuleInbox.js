import React, { useState } from 'react';
import '../Pages/Module.css';

import ActiveLectureIcon from '../Assets/activeTopic.svg';
import ActiveQuizIcon from '../Assets/activeModuleQuiz.svg';
import ActiveAssignmentIcon from '../Assets/activeAssignment.svg';

import LectureIcon from '../Assets/topic.svg';
import QuizIcon from '../Assets/moduleQuiz.svg';
import AssignmentIcon from '../Assets/assignment.svg';

const ModuleInbox = ({ setModuleInbox }) => {

    const moduleInboxList = [
        {
            id: 'Lecture',
            img: LectureIcon,
            imgActive: ActiveLectureIcon,
            text: 'Python Loops'
        },
        {
            id: 'Quiz',
            img: QuizIcon,
            imgActive: ActiveQuizIcon,
            text: 'Quiz-1: Data Types'
        },
        {
            id: 'Assignment',
            img: AssignmentIcon,
            imgActive: ActiveAssignmentIcon,
            text: 'Assignment-1: Operators | Loops'
        },
    ]

    const [activeModuleInbox, setActiveModuleInbox] = useState('Lecture');

    const handleClick = (id) => {
        setModuleInbox(id);
        setActiveModuleInbox(id);
    };

    return (
        <>
            <div className='moduleInbox'>
                {moduleInboxList.map((curModuleInbox) => (
                    <div className={`moduleInbox-item ${activeModuleInbox === curModuleInbox.id ? 'active' : ''}`} onClick={() => handleClick(curModuleInbox.id)} key={curModuleInbox.id}>
                        <img src={activeModuleInbox === curModuleInbox.id ? curModuleInbox.imgActive : curModuleInbox.img} alt='' />
                        <p>{curModuleInbox.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ModuleInbox
