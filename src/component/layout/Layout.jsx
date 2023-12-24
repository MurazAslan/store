import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from './layout.module.scss'
import { storeContext } from '../../context/StoreContext'

const Layout = () => {
    const {state,dispatch} = useContext(storeContext)
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
                        Basket {state.length !== 0 ? state.length : ''}
                    </Link>

                </li>
            </ul>
                </header>
            <Outlet/>
             </>
            

       
    )
}

export default Layout
