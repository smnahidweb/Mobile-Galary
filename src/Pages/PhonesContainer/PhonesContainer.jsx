import React from 'react';
import { Link } from 'react-router';
const PhonesContainer = ({info}) => {
    console.log(info)
    
    return (
        <div >
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={info.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{info.name}</h2>
    <p>{info.description}</p>
    <div className="card-actions">
      <Link to='/phone'><button className="btn btn-primary">View More</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PhonesContainer;