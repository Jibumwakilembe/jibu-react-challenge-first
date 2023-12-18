import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesItem from './MoviesItem'

function MoviesSearch() {
    const [data ,setData]=useState([]);



   
    useEffect(()=>{
        loadUsersData();
      } ,[]);

     const loadUsersData = async (
          )=>{
            let series="movie"
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
                <h2> loading...</h2>
            </div>
        )
    }

  

  return (
    <div>


        <MoviesItem data={data} />
      
    </div>
  )
}

export default MoviesSearch
