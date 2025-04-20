import React from 'react';
import { Removefavourites } from '../../Utilities/Index';

const FavoritesList = ({info,HandleDelate}) => {
    console.log(info)
    return (
        
  <div className="card bg-base-100  shadow-sm">
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
     
    </div>
    <button onClick= { ()=>HandleDelate(info.id)} className='absolute -top-3 -right-3 btn btn-primary'>X</button>
  </div>
        </div>
    );
};

export default FavoritesList;