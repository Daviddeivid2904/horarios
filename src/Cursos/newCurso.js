import { useState } from "react";
import React from 'react';

const Inputs = props =>{
    const [nombreCurso, setNombreCurso] = useState("");
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch('http://localhost:5000/infoMateria', { // cambiar a /cursos
      method: 'POST',
      body: JSON.stringify({
        nombre_curso: nombreCurso,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    })

    }
    if(!props.show){
      return null
    }
    return(
<div className = "shadowMateria">
  <form className="materiabody">
        <label>ingrese nombre del curso:
          <input 
            type="text" 
            value={nombreCurso}
            onChange={(e) => setNombreCurso(e.target.value)}
          />
        </label>

        <br></br>  <br></br>  <br></br>

        <button onClick={handleSubmit} >Guardar</button>
        <button onClick = {props.onClose}className = "boton">Cerrar</button>      </form>
 </div>
    )
}
export {Inputs}
