import React from 'react';

import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from '../../MainLayout/MainLayout';
import Home from '../../Pages/Home';
import About from '../../Pages/About/About';
import Favourite from '../../Pages/Favorite/Favourite';
import Details from '../../Pages/Details/Details';
import Error from '../../Pages/Error/Error';



export const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
   errorElement:Error,
   children:[
   {
    path: "/",
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
    Component:Details
  }

]
  },
]);