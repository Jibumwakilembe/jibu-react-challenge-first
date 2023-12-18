import React from 'react'
import ContentItem from './ContentItem.jsx';
import './Content.css'

function Content() {
  return (
    <div className="content">
        <div className="content__container">
            <div className="content__wrapper">
                <ul className="content__items">
                    <ContentItem
                    src='./src/images/img-8.jpg'
                    text='Popular Series'
                    path='/series' 
                    />
                     <ContentItem
                    src='./src/images/img-home.jpg'
                    text='Popular Movies'
                    path='/movies' 
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Content
