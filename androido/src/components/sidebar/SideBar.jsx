import React from 'react'
import './sidebar.css'
import sidebarImg from '../images/a3.jpg'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItems">
                <span className="sidebarTitle">About Androido</span>
                <img src={sidebarImg} alt=""/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="sidebarItems">
                <span className="sidebarTitle">Androido Courses</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Java</li>
                    <li className="sideBarListItem">kotlin</li>
                    <li className="sideBarListItem">JavaScript</li>
                    <li className="sideBarListItem">SQL</li>
                    <li className="sideBarListItem">Android</li>
                    <li className="sideBarListItem">Spring</li>
                    <li className="sideBarListItem">React</li>
                </ul>
            </div>

            <div className="sidebarItems">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fab fa-facebook-square"></i>
                    <i className="sideBarIcon fab fa-twitter"></i>
                    <i className="sideBarIcon fab fa-linkedin-in"></i>
                    <i class="sideBarIcon fab fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}
