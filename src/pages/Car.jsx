import React, {Fragment, useContext} from 'react'
import CarCard from '../components/Car/CarCard'
import { CarContext } from '../context/CarProvider'

const Car = () => {

    const {car} = useContext(CarContext)
    
  return (
    <Fragment>
    <div>
        {car.map((product) => (
            <CarCard inCarrito key= {product.precio} {...product} />
        ))}
    </div>
    
      </Fragment>
  )
}

export default Car