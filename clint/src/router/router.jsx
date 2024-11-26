import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Login from "../component/admin/login/Login";
import Dashbord from "../component/admin/dashbord/Dashbord";
import AddHero from "../component/admin/dashbord/AddHero";
import AddAbout from "../component/admin/dashbord/AddAbout";
import AddSkill from "../component/admin/dashbord/AddSkill";
import AddProtfolio from "../component/admin/dashbord/AddProtfolio";
import AddContactInfo from "../component/admin/dashbord/AddContactInfo";
import GetAllMessage from "../component/admin/dashbord/GetAllMessage";
import AddEntity from "../component/admin/dashbord/AddEnrity";
import AddQulification from "../component/admin/dashbord/AddQulification";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <App/>,
        },
        
      
      ],


      
 
    },

    {
      path: "/login",
      element: <Login/>,
      
    },

    {
      
      path: '/dashboard',
      element: <Dashbord/>,
      children: [
  {path: '/dashboard/addhero',
element: <AddHero/>,},
         {path: '/dashboard/addabout',
element: <AddAbout/>,},

{path: '/dashboard/addskill',
  element: <AddSkill/>,},
{path: '/dashboard/addprotfolio',
  element: <AddProtfolio/>,},
{path: '/dashboard/addcontactinfo',
  element: <AddContactInfo/>,},
  {path: '/dashboard/getallmessage',
    element: <GetAllMessage/>,},


    {path: '/dashboard/add',
      element: <AddEntity/>,},
{path: '/dashboard/addqulification',
      element: <AddQulification/>,},


      ]
    }



  ]);