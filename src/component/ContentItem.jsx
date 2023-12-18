import React from 'react'
import {Link} from 'react-router-dom'

function ContentItem(props) {
  return (
    <>
       <li className="content__item">
      <Link className="content__item__link" to={props.path}>
        <figure className="content__item__pic-wrap" >
          <img src={props.src} alt="Travel " className="content__item__img" />
        </figure>
        <div className="content__item__info">
          <h5 className="content__item__text">
             {props.text}
          </h5>

        </div>

      </Link>

    </li>
    </>
  )
}

export default ContentItem
