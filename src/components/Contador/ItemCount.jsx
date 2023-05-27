import {useState, useEffect} from 'react'

const ItemCount = () => {

    const [count, setCount] = useState (1)
    const [limitado, setLimitado] = useState(false)
    const [limitadoR, setLimitadoR] = useState(false)


    useEffect(() => {
      if (count >= 10) {
        setLimitado(true)
      }
    
      return () => {
        setLimitado(false)
      };
    }, [count])

    useEffect(() => {
        if (count <= 1) {
          setLimitadoR(true)
        }
      
        return () => {
          setLimitadoR(false)
        };
      }, [count])



    const sumar = () => setCount (count + 1)
    const restar = () => setCount (count - 1)
    const reset = () => setCount (1)
  return (
    <div className='d-flex justify-content-center'>
        <div>
            <button onClick={reset} className="btn btn-sm btn-primary m-2">Reset</button>
        </div>
        <div>
            <button disabled={limitadoR} onClick={restar} className="btn btn-sm btn-primary m-2">-</button>
        </div>
        <h5 className='text-center m-2'>{count}</h5>
        <div >
            <button disabled = {limitado} onClick={sumar} className="btn btn-sm btn-primary m-2">+</button>
        </div>        

        
    </div>
  )
}

export default ItemCount