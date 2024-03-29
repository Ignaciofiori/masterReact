import React, { useRef } from 'react'

{/*UseRef hace referencia con un elemento del DOM*/}
export const Formulario = () => {
  const nombreInput = useRef();
  const apellidoInput = useRef();
  const emailInput = useRef();
  const miCaja = useRef()
  
  const mostrar = (e)=>{
    e.preventDefault()
    console.log(nombreInput.current.value)
    console.log(apellidoInput.current.value)
    console.log(emailInput.current.value)

    console.log(miCaja)
    miCaja.current.classList.add("fondeVerde")
    miCaja.current.innerHTML="El Formulario Se Ha Enviado"
  }
  
  return (
    <div>
<h1>Formulario</h1>

<div ref={miCaja} className='miCaja'>

<h2>Pruebas con UseREF</h2>

</div>

<form onSubmit={mostrar}>
    <input type="text" placeholder='Nombre' ref={nombreInput} /> <br/>
    <input type="text" placeholder='Apellido'ref={apellidoInput}/>  <br/>
    <input type="email" placeholder='Email'ref={emailInput}/>   <br/>
    <input type="submit" value={"Enviar"} />  <br/>
</form>
<button onClick={()=>nombreInput.current.select()}> Empezar a Rellenar Formulario</button>


    </div>
  )
}
