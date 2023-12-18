import React from 'react'
import './MovieComponent.css'


const SeriesItem=({data})=> {
  return (
    <div>
        {
            data && data.map((d,index)=>{
             
                return(
              <div className="about-us" key={index}>
                <ul className="about-nav">
                    <li className="about-link">
                      <h2>{d.title}</h2>
                      <img src={d.images["Poster Art"].url} alt="series"  className="moviesImage"/>
                      <h2>{d.programType}</h2>
                      </li> 
                </ul>
            </div>
                )
            })
        }
    </div>
  )
}

export default SeriesItem
