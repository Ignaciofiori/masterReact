import React from 'react'

export const EditarFormulario = ({pelicula,conseguirPeliculas,setEditar,setListadoState}) => {
const title = "Editar"
  
const editarPelicula = (e,id) =>{
  e.preventDefault();
//CONSEGUIR TARGET DEL OBJETO
let target = e.target;
//Buscar indice del objeto de la pelicula a actualizar
const peliculasAlmacenadas =  conseguirPeliculas();
const indice = peliculasAlmacenadas.findIndex(peli => peli.id == id )
//CREAR OBJETO CON ESE INDICE
let peliActualizada ={
    id,
    titulo:target.titulo.value,
    descripcion:target.description.value 
}

//ACTUALIZAR EL ELEMENTO CON ESE INDICE
peliculasAlmacenadas[indice] = peliActualizada

//GUARDAR EN EL STORAGE 
localStorage.setItem("peliculas",JSON.stringify(peliculasAlmacenadas))
setListadoState(peliculasAlmacenadas)
setEditar(0)
}

    return (
   
        <div className='edit-form'>
            <h3 className='title'>{title}</h3>
            <form onSubmit={ (e)=>{editarPelicula(e,pelicula.id)}}>
                <input type="text"
                    name='titulo' 
                    className='titulo_editado'
                    defaultValue={pelicula.titulo} />

               <textarea name="description"
                        defaultValue={pelicula.descripcion}
                        className='descripcion_editada'/>

                <input type="submit" value="Actualizar" />
            </form>
        </div>
  )
}
