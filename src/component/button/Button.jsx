import React from 'react'
import style from './button.module.scss'
const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick} className={text === '+' ? style.artir : style.azalt}>
      {text}
    </button>
  )
}

export default Button
