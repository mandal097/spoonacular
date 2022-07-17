import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './header.scss'
import { useNavigate } from 'react-router-dom'

const HeaderView = ({ toggle, scrolled }) => {
    const navigate = useNavigate()
    return (
        <div className={toggle ? "header_view" : ''}>
            <div className="header_view_wrapper">
                <div className="header_view_middle">
                    <span onClick={() => {
                        navigate('/features');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }}>Features</span>
                    <span onClick={() => {
                        navigate('/*');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }}>Premium</span>
                    <span onClick={() => {
                        navigate('/allrecipe');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }}>Recipes</span>
                    <span onClick={() => {
                        navigate('/articles');
                        window.scroll({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }}>Articles</span>
                    <span onClick={() => {
                        navigate('/*');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }}>Cookbook</span>
                    <span onClick={() => {
                        navigate('/help');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }}>Support</span>
                </div>
                <div className="header_view_bottom">
                    <span onClick={() => {
                        navigate('/account/signin');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }}>Log In</span>
                    <Button onClick={() => {
                        navigate('/*');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }} txt='Join For free' width='50%' scrolled={scrolled} />
                </div>
            </div>
        </div>
    )
}



const Header = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
        // return ()=> window.removeEventListener('scroll')
    })

    const handleToggle = () => {
        switch (toggle) {
            case false:
                setToggle(true);
                break;
            case true:
                setToggle(false);
                break;
            default:
                setToggle(false)
        }
    }

    return (
        <>
            <div className={scrolled ? 'scrolled header' : 'header'} crh>
                <div className='header_wrapper'>
                    <div className="left" onClick={() => {
                        navigate('/');
                        window.scroll({
                            top: 0,
                            behavior: 'auto'
                        })
                    }}>
                    </div>
                    <div className="middle">
                        <div className={scrolled ? 'navsScrolled dropdownScrolled' : 'navs dropdown'}
                            onClick={() => {
                                navigate('/features');
                                window.scroll({
                                    top: 0,
                                    behavior: 'auto'
                                })
                            }}
                        >Features</div>
                        <div className={scrolled ? 'navsScrolled' : 'navs'}
                            onClick={() => {
                                navigate('/*');
                                window.scroll({
                                    top: 0,
                                    behavior: 'auto'
                                })
                            }}
                        >Premium</div>
                        <div className={scrolled ? 'navsScrolled' : 'navs'}
                            onClick={() => {
                                navigate('/allrecipe');
                                window.scroll({
                                    top: 0,
                                    behavior: 'auto'
                                })
                            }}
                        >recipes</div>
                        <div className={scrolled ? 'navsScrolled dropdownScrolled' : 'navs dropdown'}
                            onClick={() => {
                                navigate('/articles');
                                window.scroll({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }}
                        >articles</div>
                        <div className={scrolled ? 'navsScrolled' : 'navs'}
                            onClick={() => {
                                navigate('/*');
                                window.scroll({
                                    top: 0,
                                    behavior: 'auto'
                                })
                            }}
                        >cookbook</div>
                        <div className={scrolled ? 'navsScrolled' : 'navs'} onClick={() => {
                            navigate('/help');
                            window.scroll({
                                top: 0,
                                behavior: 'auto'
                            })
                        }}>support</div>
                    </div>
                    <div className="right">
                        <span className={scrolled ? 'logInScrolled' : 'login'} id={toggle && 'toggleR'}
                            onClick={() => {
                                navigate('/account/signin');
                                window.scroll({
                                    top: 0,
                                    behavior: 'auto'
                                })
                            }}
                        > log in</span>
                        <div className='joinBtn'
                            style={{
                                width: '50%',
                                backgroundColor: scrolled ? '#2dd29a' : '',
                                color: scrolled && 'white'
                            }}
                            onClick={() => {
                                navigate('/*');
                                window.scroll({
                                    top: 0,
                                    behavior: 'auto'
                                })
                            }}
                        >Join For free</div>
                    </div>
                    <div className="toggleBtn" onClick={handleToggle}>
                        <div className={toggle ? 'cancel' : 'ham'}></div>
                    </div>
                </div>
            </div>
            {
                toggle && <HeaderView toggle={toggle} scrolled={scrolled} />
            }

        </>
    )
}





export default Header