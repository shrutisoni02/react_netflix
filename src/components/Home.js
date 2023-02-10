import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Home() {
  const [search,setSearch]=useState("");
  console.log(search)
  return (
    <div className='homeBG'>
        <div className='home'>
            <h1>Search for your favourite movies</h1>
            <input onChange={(event)=>
              setSearch(event.target.value)
            } type='text' placeholder='Search Movies, TV shows and more...' value={search} />
            <button>
                <Link to = {`/search/${search}`} > Search</Link>
            </button>
        </div>
    </div>
  )
}

export default Home