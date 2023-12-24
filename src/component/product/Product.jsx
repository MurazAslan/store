import React, { useContext, useEffect, useState } from 'react'
import Button from '../button/Button'
import style from './products.module.scss'
import { storeContext } from '../../context/StoreContext'

const Product = ({ title, img, price, id }) => {

  const {  dispatch } = useContext(storeContext)
  const [productCount, setProductCount] = useState(0)



  const addBtn = () => {
if (!productCount) return
    dispatch({
      type: 'add',id,
      payload: {
        count: productCount,
        price,
        title
      }
    })
    setProductCount(0)
  }

  const countProduct = (deyer) => {
    if (deyer === 'azalt') {
      if(productCount <= 0) return;
      setProductCount(oldCount => oldCount - 1
      )
    }
    if (deyer === 'artir') {
      setProductCount(oldCount => oldCount + 1)
    }
  }
  return (
    <>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>${productCount >= 1 ? price * productCount : price   }</p>
      <div className={style.button}>
        <Button text={'+'} onClick={() => countProduct('artir')}>

        </Button>
        <p>{productCount}</p>
        <Button text={'-'} onClick={() => countProduct('azalt')}>

        </Button>
      </div>
      <Button text={'Add'} onClick={addBtn}>Add</Button>

    </>
  )
}

export default Product
