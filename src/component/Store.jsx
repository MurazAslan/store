import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './home/Home'
import Basket from './basket/Basket'
import Layout from './layout/Layout'
import StoreContextProvider from '../context/StoreContext'

const router = createBrowserRouter([
    {
     path:'/',
     element: <Layout />,
     children: [
        {
            index: true,
            element: <Home />
            
        },
        {
            path: 'basket/',
            element: <Basket/>
        }
     ]   
    }
])


const Store = () => {
  return (
    <StoreContextProvider>

    
    <RouterProvider router={router}>
      
    </RouterProvider>
    </StoreContextProvider>
  )
}

export default Store
