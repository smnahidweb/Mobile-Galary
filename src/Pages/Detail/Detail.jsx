import React from 'react';
import { useLoaderData, useParams,Link } from 'react-router';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
import { AddPhone } from '../../Utilities/Index';

const Detail = () => {
    const data = useLoaderData();
    const {id} = useParams()
    const SinglePhone = data.find(phone => phone.id === parseInt(id));
    const {
name,image,brand,price,model,storage,description,camera_info

    } = SinglePhone || {}



const HandleFavorites = (SinglePhone)=>{
    AddPhone(SinglePhone)
}

    return (
        <div>
          <img 
    src={image} 
    alt="Phone image"
    className="w-full h-auto object-cover rounded-lg shadow-md max-w-md mx-auto m-8"
  />
  <div className='flex justify-around items-center'>
    <h2 className='text-4xl'>{name}</h2>
   <div>
   <Link to="" className='mr-7'>
    <button><MdOutlineShoppingCart size={20} /></button>
    </Link>
    <Link to={`/phone/${id}`}>
    <button onClick={()=>HandleFavorites(SinglePhone)}><MdBookmarkAdd size={20}/></button>
    </Link>
   </div>
  </div>

<div>
    <p>Brand: {brand}</p>
    <p>Brand: {model}</p>
   

</div>
            
            
        </div>
    );
};

export default Detail;