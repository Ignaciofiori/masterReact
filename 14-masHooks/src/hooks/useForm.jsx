import { useState } from "react";

export const useForm = (objetoInicial = {})=>{

    const [formulario,setFormulario]=useState(objetoInicial)
  
    const serializarFormulario = (formulario)=>{
  
      const formData = new FormData(formulario)
      const objetoCompleto = {}
  
      for(let [name,value] of formData){
        objetoCompleto[name] = value
      }
      return objetoCompleto
    }
  
  
    const enviado = (e)=>{
      e.preventDefault();
      console.log(e.target.titulo.value);
     
     let curso = serializarFormulario(e.target);
    
     setFormulario(curso);
    
  }  
    const cambiado = ({target}) =>{
        const {name,value} = target
        setFormulario({
          ...formulario,
          [name]:value
        })
    }  

    return{
        estado:formulario,
        enviado,
        cambiado
    }
}