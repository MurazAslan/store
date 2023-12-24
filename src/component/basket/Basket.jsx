import React, { useContext } from 'react'
import { storeContext } from '../../context/StoreContext'
import style from './basket.module.scss'

const Basket = () => {
  const { state, dispatch } = useContext(storeContext)

  return (
    <div className={style.basket}>
      {state?.map((el, index) => (
        <div className={style.basketBoxs}
          key={index}
        >
          <p>Product: {el.title} </p>
          <p>Product price: {el.price}$ </p>
          <p>Product count: {el.count}</p>
        </div>
      ))}

    </div>
  )
}

export default Basket
