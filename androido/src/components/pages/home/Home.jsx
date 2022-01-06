import React from 'react'
import Header from '../../header/Header'
import PostData from "../../PostData/PostData"
import SideBar from '../../sidebar/SideBar'
import './home.css'

export default function Home() {
    return (
        <>
            <Header/>
            <div className='home'>
                <PostData/>
                <SideBar/>
            </div>
        </>
        
    )
}
