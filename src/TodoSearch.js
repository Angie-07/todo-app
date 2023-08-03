import React from 'react'
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  console.log(searchValue);

  return (
    <div className='todo-search'>
      <input value={searchValue} placeholder="Search a TODO" onChange={(event)=>{setSearchValue(event.target.value)}}/>
    </div>
  )
}

export  {TodoSearch}
