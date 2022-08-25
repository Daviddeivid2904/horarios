import { useState } from "react";
import React from 'react';
import "./styleMaterias.css"

const Materia = props =>{
    const [nombreMateria, setNombreMateria] = useState("");
    const [horas, setHoras] = useState(0);
    const [seguida, setSeguida] = useState(false);
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(seguida)
      fetch('http://localhost:5000/infoMateria', {
      method: 'POST',
      body: JSON.stringify({
        nombre_materia: nombreMateria,
        continuidad: seguida,
        horas_por_semana:horas,
      }),
      headers: {
        'Content-Type': 'application/json'// AQUI indicamos el formato
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
    props.getApiData()

    }
    if(!props.show){
      return null
    }
    return(
<div className = "shadowMateria">
  <form className="materiabody">
        <label>ingrese nombre de la materia:
          <input 
            type="text" 
            value={nombreMateria}
            onChange={(e) => setNombreMateria(e.target.value)}
          />
        </label>

        <br></br>  <br></br>  <br></br>

        <label> puede ser continua?
          <input 
            type="checkBox" 
            value={seguida}
            onChange={(e) => setSeguida(e.target.checked)}
            checked = {seguida}
          />
        </label>
        
        <br></br>  <br></br>  <br></br>

        <label>horas por semana:
          <input 
            type="number" 
            min = "1"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />
        </label>

        <br></br>  <br></br>  <br></br>

        <button onClick={handleSubmit} >Guardar</button>
        <button onClick = {props.onClose}className = "boton">Cerrar</button>      </form>
 </div>
    )
}
export {Materia}
