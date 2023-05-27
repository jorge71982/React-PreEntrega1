import React, {useState, createContext} from 'react'


export const CarContext = createContext("")


const CarProvider = ({children}) => {
    const [car, setCar] = useState([])
    

    const addCar = (product) => setCar ([...car, product])
  return (
    <CarContext.Provider value={{ car, addCar}}>{children}</CarContext.Provider>
  )
}

export default CarProvider