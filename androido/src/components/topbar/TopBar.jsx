import React from 'react'
import './topbar.css'
import profileimg from '../images/R.png'

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-linkedin-in"></i>
                <i className="topIcon fab fa-github-alt"></i>
            </div>
            <div className="topMiddle">
                <ul className="topList">
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>Tutorials</li>
                    <li className='topListItem'>Live Projects</li>
                    <li className='topListItem'>App Store</li>
                    <li className='topListItem'>Hosting Service</li>
                    <li className='topListItem'>Blogs</li>
                    <li className='topListItem'>About</li>
                </ul>
            </div>
            <div className="topRight">
                <img src={profileimg} alt="" className="topImg" />
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
