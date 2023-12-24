import React from 'react'
import style from './home.module.scss'
import Product from '../product/Product'
import { productsData } from '../productsData/productsData'





const Home = () => {
    return (
        <div className={style.homeContainer}>

            {productsData.map((el, index) =>
                <div className={style.box}>
                    <Product
                        key={index}
                        img={el.img}
                        title={el.title}
                        price={el.price}
                        count={el.count}
                        id={index}

                    />
                </div>)}




        </div>
    )
}

export default Home
