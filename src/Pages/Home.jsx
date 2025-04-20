import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import AllPhones from '../Components/AllPhones/AllPhones';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    const [Phones,setPhones] = useState(data)

    const HandleSearch  = (e,text) =>{
    
        e.preventDefault()
      
        const SearchText = data.filter(phone => 
            
            phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||

           phone?.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
        
    
    ) 
    console.log(SearchText)
    setPhones(SearchText)

    }


    return (
        <div>
        <Banner HandleSearch ={HandleSearch}></Banner>
        <AllPhones Phones = {Phones}></AllPhones>
        </div>
    );
};

export default Home;