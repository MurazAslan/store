import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from './layout.module.scss'
import { storeContext } from '../../context/StoreContext'

const Layout = () => {
    const {state,dispatch} = useContext(storeContext)
    const [productCount,setProductCount] = useState(0)
    useEffect(() => {
        state.filter((el,index) => {
            setProductCount(productCount + el.count)
        })
    },[state])
    return (
             <>
                
                <header>
                <ul className={style.headerUl}>
                <li>
                    <Link to={'/'}>
                        E-Commerce
                    </Link>

                </li>
                <li>
                    <Link >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'basket/'}>
                        Basket {productCount !== 0 ? productCount : ''}
                    </Link>

                </li>
            </ul>
                </header>
            <Outlet/>
             </>
            

       
    )
}

export default Layout
