import React from 'react'

export const Eventos = () => {
  const handleClick =(e, nombre)=>{
    alert("Hola soy un click, " + nombre )
}
const handleDoubleClick = (e, nombre)=>{
    alert("Hola soy un doble click, " + nombre)
}
  
const handleMouseEnter = (e)=>{
alert("haz entrado")
}
const handleMouseLeave = (e)=>{
alert("haz salido")
}
const handleOnFocus = (e)=>{
    console.log("escribe aqui tu nombre" )
}
const handleOnBlur = (e)=>{
    console.log("Estas Afuera" )
}
    return (
    <div>
        <h1>Eventos en React</h1>
        
    {/*Evento Click */}
        <button onClick={e => {handleClick(e,"Ignacio") }}>Dame click</button>

    <p>
    <button onDoubleClick={e=>{handleDoubleClick(e,"Ignacio")}}>Dame doble click</button>

    </p>        
    <div className='caja' 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
        Pasa por Encima!!
    </div>
    <p>
        <input type="text" 
        onFocus={handleOnFocus} placeholder='Introduce tu nombre'
        onBlur={handleOnBlur}/>
    </p>
    </div>
  )
}

