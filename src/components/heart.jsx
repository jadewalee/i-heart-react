import React from 'react'
import HeartLogo from '../assets/heart.svg'



function Heart({ msg }) {
    return (
        <div className='heart'>
            <img className='heart-img' src={HeartLogo} alt='Heart Image' />
            <p className='heart-message'>{msg}</p>
        </div>
    )
}

export default Heart;