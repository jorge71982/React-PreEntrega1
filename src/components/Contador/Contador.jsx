import {useState, useEffect} from 'react'

const Contador = (props) => {

    const {initialValue} = props
    const [numero, setNumero] = useState (initialValue || 0)
    const [limitado, setLimitado] = useState(false)
    const [limitadoR, setLimitadoR] = useState(false)


    useEffect(() => {
      if (numero >= 10) {
        setLimitado(true)
      }
    
      return () => {
        setLimitado(false)
      };
    }, [numero])

    useEffect(() => {
        if (numero <= 0) {
          setLimitadoR(true)
        }
      
        return () => {
          setLimitadoR(false)
        };
      }, [numero])



    const sumar = () => setNumero (numero + 1)
    const restar = () => setNumero (numero - 1)
    const reset = () => setNumero (0)
  return (
    <div className='d-flex justify-content-around'>
        <div >
            <button disabled = {limitado} onClick={sumar}>Sumar</button>
        </div>        
        <div>
            <button disabled={limitadoR} onClick={restar}>Restar</button>
        </div>        
        <div>
            <button onClick={reset}>Reset</button>
        </div>
        <h5 className='text-center'> El numero actual es: {numero}</h5>
    </div>
  )
}

export default Contador