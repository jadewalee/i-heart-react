import React from 'react'
import Heartsvg from './heartsvg';


const colors = [
    '#b8e3f5',
    '#f5b8e4',
    '#b8f5b9',
    '#f5f3b8',
    '#e3b8f5',
    '#fffcf2'
];

function CandyColoredHeart(props) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className='heart'>
        <div className='heart-img'>
            <Heartsvg col={randomColor} />
            <p className='heart-message'>{props.msg}</p>
        </div>
    </div>
  )
}

export default CandyColoredHeart;