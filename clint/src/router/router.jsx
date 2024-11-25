import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Login from "../component/admin/login/Login";
import PrivateRoute from "./PrivateRouter";
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
      element: <PrivateRoute><Dashbord/></PrivateRoute>,
      children: [
  {path: '/dashboard/addhero',
element: <PrivateRoute><AddHero/></PrivateRoute>,},
         {path: '/dashboard/addabout',
element: <PrivateRoute><AddAbout/></PrivateRoute>,},

{path: '/dashboard/addskill',
  element: <PrivateRoute><AddSkill/></PrivateRoute>,},
{path: '/dashboard/addprotfolio',
  element: <PrivateRoute><AddProtfolio/></PrivateRoute>,},
{path: '/dashboard/addcontactinfo',
  element: <PrivateRoute><AddContactInfo/></PrivateRoute>,},
  {path: '/dashboard/getallmessage',
    element: <PrivateRoute><GetAllMessage/></PrivateRoute>,},


    {path: '/dashboard/add',
      element: <PrivateRoute><AddEntity/></PrivateRoute>,},
{path: '/dashboard/addqulification',
      element: <PrivateRoute><AddQulification/></PrivateRoute>,},


      ]
    }



  ]);