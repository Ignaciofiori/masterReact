import React, { useEffect, useReducer, useState } from 'react'
import { JuegosReducer } from '../reducers/JuegosReducer';

const init = ()=>{
  return JSON.parse(localStorage.getItem("juegos")) || [];
}



export const MisJuegos = () => {

  const [juegos,dispatch] = useReducer(JuegosReducer,[],init)

  useEffect(()=>{
     localStorage.setItem("juegos", JSON.stringify(juegos))
  },[juegos])



            {/*CREAR JUEGO*/}
  const conseguirDatos= (e)=>{
e.preventDefault();

    let juego ={
    id: new Date().getTime(),
    titulo: e.target.tituloJuego.value,
    descripcion: e.target.descripcion.value
}
console.log(juego);

const action ={
  type: "crear",
  payload: juego
};
dispatch(action);

console.log(juegos)
  }


            {/*BORRAR JUEGO*/}
  const borrarJuego = (id) =>{

    const action ={
      type:"borrar",
      payload: id
    };

    dispatch(action);
  }

            {/*EDITAR JUEGO*/}
  const editar = (e,id)=>{
 
    let juego ={
      id: id,
      titulo: e.target.value,
      descripcion: e.target.value
  }

  const action= {
    type:"editar",
    payload: juego
  }

  dispatch(action);
  }

  
  return (
    <div>
        <h1>Estos son mis videojuegos</h1>
        <p>Numero de videojuegos : {juegos.length}</p>
        <ul>
           {
           juegos.map(juego=>(
            <li key={juego.id}>
              {juego.titulo}
            &nbsp; <button onClick={e =>{borrarJuego(juego.id)}}>X</button>
            <input type="text" onBlur={e=>{editar(e,juego.id)}} />
              </li>
            
           ))
           }
        </ul>
        <h3>Agregar Juegos:</h3>
        <form onSubmit={conseguirDatos}>
            <input type="text" name='tituloJuego'  placeholder='Juego'/>
            <textarea name="descripcion" placeholder='Descripcion'></textarea>
            <input type="submit" value="Guardar"/>
        </form>
    </div>
  )
}
