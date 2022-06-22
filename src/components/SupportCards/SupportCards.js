import React from 'react'
import './style.scss'
const SupportCards = ({ span, p }) => {
    return (
        <div className="support_cards">
            <span> {span}</span>
            <p>{p}</p>
        </div>
    )
}

export default SupportCards