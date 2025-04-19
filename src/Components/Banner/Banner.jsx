import React, { useState } from 'react';

const Banner = ({HandleSearch}) => {
  const [searchText, setSearchText] = useState(" ")
  console.log(searchText)
    return (
        <div>
           <img className='w-[700px] mx-auto' src="/public/banner.png" alt="" />
           <h1 className='text-3xl mx-auto text-center'>Search, View and Buy</h1>
         
           <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nulla in non amet vitae quas sed. Unde quisquam dolore dolores.</p>

           <div className='mx-auto text-center'>
          <form action="" onSubmit={(e) => HandleSearch(e,searchText)}>
          <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input onChange={e => setSearchText(e.target.value)} type="search" required placeholder="Search by Phone Name" /> <br />
 
</label>
<button type='submit'  className="btn btn-outline btn-primary ml-10">Search Now</button>
          </form>
           </div>
        </div>
    );
};

export default Banner;