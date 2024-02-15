import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './Components/Header';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
//set up configuration
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Footer from './Components/Footer';
import Computer from './Components/Computer';

const Layout = () => {
  return (
    <>
        <Header />
        
        <Outlet />
        
    </>
  )
}

const AppRouter=createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        errorElement:<ErrorPage />,
        children:[

            {
                path:'/',
                element:<>
                    <Hero />
                    <AboutUs />
                    <Footer />
                </>,
                errorElement:<ErrorPage />
            },
            {
                path:'/Login',
                element:
                <Login />,
                errorElement:<ErrorPage />
            },
            {
                path:'/Signup',
                element: <Signup />,
                errorElement:<ErrorPage />
            },
            
            {
                path:'/About',
                element:<>
                    <About />
                    <Contact />
                </>,
                errorElement:<ErrorPage />
            },
            {
                path:'/CE',
                element:<Computer/>
            }
        ]
    },
    
    
])


const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={AppRouter} />)
