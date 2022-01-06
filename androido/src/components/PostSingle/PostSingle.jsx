import React from 'react'
import './postsingle.css'
import postImg from '../images/coder.png'

export default function PostSingle() {
    return (
        <div className='post'>
            <img src={postImg} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Android</span>
                    <span className="postCat">Java</span>
                </div>
                <span className="postTitle">Learn coding in the easy way</span>
                <hr/>
                <span className="postDate">1st May 2022</span>
                <span className="postContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
            </div>
        </div>
    )
}
