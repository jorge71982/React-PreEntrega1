import React, { Fragment } from 'react'
import Contador from '../Contador/Contador'
import ItemListContainer from '../itemListContainer/ItemListContainer'


const Conteiner = (props) => {
  return (
    <Fragment>
        <ItemListContainer/>
        <Contador initialValue = {5}/>
        <Contador/>
    </Fragment>
  )
}

export default Conteiner