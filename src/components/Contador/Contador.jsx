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
    <div className='d-flex justify-content-center'>
        <div>
            <button onClick={reset} className="btn btn-sm btn-primary m-2">Reset</button>
        </div>
        <div>
            <button disabled={limitadoR} onClick={restar} className="btn btn-sm btn-primary m-2">-</button>
        </div>
        <h5 className='text-center m-2'>{numero}</h5>
        <div >
            <button disabled = {limitado} onClick={sumar} className="btn btn-sm btn-primary m-2">+</button>
        </div>        

        
    </div>
  )
}

export default Contador