import React from 'react'
import SideBar from '../../sidebar/SideBar'
import SinglePostData from "../../singlePostData/SinglePostData"

export default function SinglePost() {
    return (
        <div className='single'>
            <SinglePostData/>
            <SideBar/>
        </div>
    )
}
