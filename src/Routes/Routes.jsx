import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddToy from '../pages/AddToy/AddToy';
import Blogs from '../pages/Blogs/Blogs';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import MyPost from '../pages/MyPost/MyPost';
import UpdateToy from '../pages/UpdateToy/UpdateToy';
import MyPostList from '../pages/MyPostList/MyPostList';
import PrivateRoute from './PrivateRoute';
import PostUpdate from '../pages/PostUpdate/PostUpdate';


export const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Error 404</p>,
    children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/toys')
        },
        {
            path: '/alltoys',
            element: <AllToys></AllToys>,
            loader: ()=> fetch('https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/toys')
        },
        {
            path: '/update/:id',
            element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
            loader: ({params})=> fetch(`https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/toys/${params.id}`)
        },
        {
            path:'/mytoys',
            element: <PrivateRoute> <MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/addtoy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>,
            loader: ()=> fetch('https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/myposts')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/addpost',
            element: <PrivateRoute><MyPost></MyPost></PrivateRoute>
        },
        {
            path: '/myposts',
            element: <PrivateRoute><MyPostList></MyPostList></PrivateRoute>
        },
        {
            path: '/updatepost/:id',
            element: <PrivateRoute><PostUpdate></PostUpdate></PrivateRoute>,
            loader: ({params})=> fetch(`https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/myposts/${params.id}`)
        }
        
    ]
  },
]);