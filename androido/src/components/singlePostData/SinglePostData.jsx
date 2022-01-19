import React from 'react'
import "./singlepostdata.css"
import postImg from "../images/a12.jpg"

export default function SinglePostData() {
    return (
        <div className='singlepostdata'>
            <div className="singlePostWrapper">
                <img src={postImg} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Learn coding in the easy way</h1>
            </div>
        </div>
    )
}
