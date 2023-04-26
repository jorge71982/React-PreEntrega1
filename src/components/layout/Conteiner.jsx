import React, { Fragment } from 'react'
import Navbar1 from '../Navbar/Navbar1'

const Conteiner = (props) => {
  return (
    <Fragment>
        <Navbar1/>
        {props.children}
    </Fragment>
  )
}

export default Conteiner