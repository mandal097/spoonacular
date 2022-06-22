import React from 'react'
import './txt.scss'
const Text = ({ h, spann,p }) => {
    return (
        <div>
            <h1>{h} <span>{spann}</span></h1>
        </div>
    )
}

export default Text