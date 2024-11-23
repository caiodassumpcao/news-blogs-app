import React from 'react'
import demoImg from '../assets/demo.jpg'
import './NewsModal.css'

const NewsModal = ({show, article, onclose}) => {
  if (!show) {
    return null
  }
  return (
    <div className='modal-overlay'>
      <div className="model-content">
        <span className="close-button" onClick={onclose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        {article && (
          <>
            <img src={article.image} alt={article.title} className='modal-image' />
            <h2 className="modal-title">{article.title}</h2>
            <p className="modal-source">Source: {article.source.name}</p>
            <p className="modal-date">{new Date(article.publishedAt).toLocaleString('en-US', {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
            <p className="modal-content-text">{article.content}</p>
            <a href={article.url} target='_blank' rel='noopener noreferrer' className="read-more-link">Read more</a>
          </>
        )}

      </div>
    </div>
   )
}

export default NewsModal