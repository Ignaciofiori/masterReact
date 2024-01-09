import React, { useEffect, useState } from 'react'

export const Ajax = () => {
    const[usuarios,setUsuarios] = useState([])
    const [cargando,setCargando]= useState(true)
    const [errores,setErrores] = useState("")

   const getUsuarios =  ()=>{

    setTimeout(async ()=>{
      try{   
    
    let peticion = await fetch("https://reqres.in/api/users?page=2")
    let {data} = await peticion.json();
    setUsuarios(data)
    setCargando(false)
    
    } catch(error){
      console.log(error.message)
      setErrores(error.message)
      console.log(errores)
     }
      },2000)



        }

useEffect(()=>{getUsuarios()},[])

//cuando hay un error
if(errores != ""){
return(
<div>
 {errores}
</div>
)
}

//Cuando esta cargando
else if(cargando == true){
  return(
    <div className='cargando'>
  Cargando Datos...
    </div>
  )
  
}
else if(cargando==false && errores === ""){
//Cuando todo fue bien
return (

  <div>
      <h2>Listado de Usuarios</h2>
      <ul>
          {usuarios.map(usuario=>{
              return <li key={usuario.id}>
                <img src={usuario.avatar} width="20px"/>
                &nbsp;
                {usuario.first_name +" "+ usuario.last_name} </li>
          })}
      </ul>
  </div>
)
}

}


