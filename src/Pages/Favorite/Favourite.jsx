import React, { useEffect, useState } from 'react';
import PhonesContainer from '../PhonesContainer/PhonesContainer';
import { getItem, Removefavourites } from '../../Utilities/Index';
import FavoritesList from '../FavoritesList/FavoritesList';
import EmptyData from '../EmptyData/EmptyData';
 
const Favourite = () => {
    const [display,setDisplay] = useState([]);
    useEffect( ()=> {
       const finaldata = getItem();
       setDisplay(finaldata);
    },[] )
    const HandleDelate = (id) =>{
        Removefavourites(id)
        setDisplay(getItem)
    }
    if (display.length < 1) {
        return <EmptyData />
        
      }
    
    return (
        <div>
         
         <div className='grid grid-cols-1 md:grid-cols-3 mb-4'>
          
          {
   
        
         display.map(info => <FavoritesList info={info} HandleDelate= {HandleDelate}></FavoritesList>)    
         
   
          }
   
           </div>

        </div>
    );
};

export default Favourite;