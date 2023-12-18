import React from 'react'
import {useState, useEffect } from 'react'

import axios from 'axios'
import SeriesItem from './SeriesItem'

function SeriesSearch() {



  const [data, setData]=useState([]);
    

    useEffect(()=>{
        loadUsersData();
      } ,[]);

     const loadUsersData = async (
          )=>{
            let series="series"
            let sort="title"
              return await axios
              .get(`http://localhost:5000/entries?programType=${series}&_limit=20&_sort=${sort}`)
              .then((respond)=>{
                setData(respond.data);
                console.log("result:" ,respond.data);
              })
              .catch((err)=> console.log(err));
            
    
        }
        

    if(data.isLoading){
        return (
            <div className="loading">
                <h2> Loading...</h2>
            </div>
        )
    }

  

  return (
    <div>


        <SeriesItem data={data} />
      
    </div>
  )
}

export default SeriesSearch
