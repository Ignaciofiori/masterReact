import React,{useState} from 'react'
import PropTypes from "prop-types"

export const Ejercicio = ({year}) => {
  const [yearNow,setYearnow] = useState(year)
  const siguiente = (e)=>{
setYearnow(yearNow + 1)
  }
  const anterior = ()=>{
    setYearnow(yearNow - 1)
  }
  const resetear =(e)=>{
    setYearnow(year)
  }
  const cambiarYear = (e)=>{
    let dato = parseInt(e.target.value) 
    if(Number.isInteger(dato)){
        setYearnow(dato)
    }
    else{
       setYearnow(year)
    }
  }
    return (
    <div>
    <h2>Ejercicio Eventos y UseState</h2>
    <strong className="label-green">{yearNow}</strong>
    
    <p>
        <button onClick={siguiente}>SIGUIENTE</button>
        <br></br>
        <button onClick={anterior}>ANTERIOR</button>
        <br></br>
        <button onClick={resetear}>Resetear Fecha</button>
    </p>
    <p>
        <input type="text" placeholder='cambia year aqui'
        onChange={cambiarYear} />
    </p>
    </div>

  )
}

Ejercicio.propTypes = {
year: PropTypes.number.isRequired
}