import React from 'react';
import { useEffect,useState } from 'react';
import PhonesContainer from '../../Pages/PhonesContainer/PhonesContainer';
import { VscPreview } from 'react-icons/vsc';

const AllPhones = ({data}) => {
     const [display,setDisplay] = useState([]);
     const [AllDisplay,SetAllDisplay] = useState(false);
       
        useEffect( () => {

            if(AllDisplay){
                setDisplay(data)
            }
            else{
                setDisplay(data.slice(0,6))
            }
         

        },[AllDisplay,data])
    return (
        <div className='py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 mb-4'>
          
       {

     
      display.map(info => <PhonesContainer info ={info}></PhonesContainer>)    
      

       }

        </div>
        <button onClick={()=> SetAllDisplay(prev => !prev) } className='btn btn-primary'>{AllDisplay? 'Show Less' : "Show All"}</button>

      
    </div>
    );
};

export default AllPhones;