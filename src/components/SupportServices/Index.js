import React, { useEffect, useState } from 'react'
import SupportCards from '../SupportCards/SupportCards'
import './Style.scss'
const Index = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
        // return ()=> window.removeEventListener('scroll')
    })
    const data = [
        {
            id: 1,
            span: '  Get started',
            p: " The quick-start guide for setting up and using Carb Manager."
        },
        {
            id: 2,
            span: 'Set your goals',
            p: "Set or reset your diet, health, and activity goals."
        },
        {
            id: 3,
            span: 'Customize app settings',
            p: "Connect fitness devices, adjust your preferences, and set reminders."
        },
        {
            id: 4,
            span: 'Track foods, activities, and fasting',
            p: "Find and log foods, recipes, meal plans, and exercises. Set up and log your fasting hours."
        },
        {
            id: 5,
            span: ' Track body and health measurements',
            p: "Track weight, sleeping hours, blood glucose, ketones, exercise minutes, and dozens more."
        },
        {
            id: 6,
            span: ' View and analyze progress toward goals',
            p: "Visualize progress and gain insights into your health and wellness."
        },
        {
            id: 7,
            span: 'Manage your account',
            p: "Manage a Premium subscription, change your password, add your profile picture, and more."
        },
        {
            id: 8,
            span: 'Connect with the community',
            p: "Join a group, learn with the Keto Academy, chat with friends, or complete a challenge."
        },
        {
            id: 9,
            span: 'Get more help',
            p: "Advice on troubleshooting problems and how to contact the support team."
        },
    ]
    return (
        <div className='support_services'>
            <h2>Browse more Category</h2>
            <div className="support_services_">
                {
                    data.map((item) => (
                        <SupportCards index key={item.id} span={item.span} p={item.p} />
                    ))
                }
            </div>
            {
                show && <div className="to_top" onClick={()=>{
                    window.scroll({
                        top:0 ,
                        behavior:'smooth'
                    })
                }}></div>
            }
        </div>
    )
}

export default Index