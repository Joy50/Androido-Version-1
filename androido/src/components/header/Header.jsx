import React from 'react'
import './header.css'
import headerImg from '../images/a12.jpg'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleLg">Coding is Fun</span>
            </div>
            <img src={headerImg} alt="" className="headerImg" />
        </div>
    )
}
