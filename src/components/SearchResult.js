import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
function SearchResult () {
  const { movie } = useParams();
  const url =`https://imdb-api.com/en/API/SearchTitle/k_l4sx3wn4/${movie}`
  console.log(url)
  const [data, setData] = useState();
  useEffect(() => {
    async function fun1() {
      const response = await axios.get(url)
      console.log(response.data.results)
      setData(response.data.results);
    }
    fun1();

  }, [url])
  console.log(data);
  return (
    <div className='movieCards'>
    {
      data?.map((card)=>(
        <div className='movieCard'>
            <Link className ='movieCardLink' to={`/movie/${card.id}`}>
                <img src={card.image} alt= 'movie img' className='movieCardImg'/>
                <h1 className='movieCardTitle'>{card.title}</h1>
            </Link>
        </div>
        ))
    }
    </div>
  )
}
                                                                                
export default SearchResult