import React from 'react'
import demoImg from '../assets/demo.jpg'
import './NewsModal.css'

const NewsModal = () => {
  return (
    <div className='modal-overlay'>
      <div className="model-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={demoImg} alt="Modal Image" className='modal-image' />
        <h2 className="modal-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, id.</h2>
        <p className="modal-source">Source: The Guardian</p>
        <p className="modal-date">Nov 23, 2024, 11:35 AM</p>
        <p className="model-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, aliquid quis, ea iure inventore officia corrupti officiis pariatur nisi repudiandae provident reiciendis quidem minima necessitatibus! Maxime explicabo impedit porro exercitationem, accusantium beatae earum nam saepe.</p>
        <a href="#" className="read-more-link">Read more</a>
      </div>
    </div>
   )
}

export default NewsModal