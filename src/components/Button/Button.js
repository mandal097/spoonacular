import React from 'react'
import './button.scss'

const Button = ({ txt, width, scrolled }) => {
    return (
        <div className='joinBtn'
            style={{
                width: `${width}`,
                backgroundColor: scrolled ? '#2dd29a' : '',
                color: scrolled && 'white'
            }}
        >{txt}</div>
    )
}

export default Button