import React from 'react'
import userImg from '../assets/user.jpg'
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='blogs'>
        <div className="blogs-left">
            <img src={userImg} alt="User Image"/>
        </div>
        <div className="blogs-right">
            <button className='post-btn'>Create a New Post</button>
            <button className="blogs-close-btn">
                Back <i className="bx bx-chevron-right"></i>
            </button>
        </div>
    </div>
  )
}

export default Blogs