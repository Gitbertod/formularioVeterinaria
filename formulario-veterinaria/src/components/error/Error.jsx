import React from 'react'
import style from './Error.module.css'

const Error = ({children}) => {
  return (
    <div className={style.validation}>{children}</div>
  )
}

export default Error