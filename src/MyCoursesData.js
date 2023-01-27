import React from "react";
import UiDesigning from './Images/designing.png'
import backend from './Images/server.png'
import product from './Images/shopping-bag.png'
import frontendImage from './Images/browser.png'


export const MyCoursesData = [
    {
        image: <img className='subheader-image' src={frontendImage} alt=''/>,
        text: 'Frontend Engineering',
        lessons: '10 Lessons',
        level: 'Intermediate'
    },

    {
        image: <img className='subheader-image' src={backend} alt=''/>,
        text: 'Backend Engineering',
        lessons: '3 Lessons',
        level: 'Advanced'
    },

    {
        image: <img className='subheader-image' src={product} alt=''/>,
        text: 'Product Management',
        lessons: '5 Lessons',
        level: 'Advanced'
    },

    
];