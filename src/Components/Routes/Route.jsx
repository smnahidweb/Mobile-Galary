import React from 'react';

import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from '../../MainLayout/MainLayout';
import Home from '../../Pages/Home';
import About from '../../Pages/About/About';
import Favourite from '../../Pages/Favorite/Favourite';
import Error from '../../Pages/Error/Error';
import AllPhones from '../AllPhones/AllPhones';
import Detail from '../../Pages/Detail/Detail';



export const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
   errorElement:Error,
   children:[
   {
    path: "/",
    // HydrateFallback: <p>Please Wait, Gadgets are Loading....</p>,
    loader: ()=> fetch('Data.json'),
    Component: Home
  
   },
   {
    path:"/about",
    Component:About
  },
  {
    path:"/favorite",
    Component:Favourite
  },
  {
    path:"/details",
    Component:AllPhones
  }
  ,
  {
    path:'/phone',
    Component: Detail
  }

]
  },
]);