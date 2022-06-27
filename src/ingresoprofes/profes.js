import { useState } from "react";
import React from 'react';
import "./styleProfes.css"
export {Inputs}
function Inputs() {

  const bigblue = {
    color: "blue",
    padding: "40",
    fontfamily: "Sans-Serif",
    textalign: "center"
  }

const formulario = {
  border:"solid black",
  width:"80",
  padding:"5",
  position:"relative",
  background:"red",
}
const divCont = {
border:"solid black",
width: "70%",
height: "auto",
padding:"5",
background:"white"
}

  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [materia, setMateria] = useState("");
  //const diasDisp = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
    
  }


  const bloques = (bloque) => {
    return(
    <div>
     <input type="checkbox" id= {bloque} name="topping" value="disponible"/> {bloque}
    </div>
    )
  }
  const dias = (dia) => {
    return(
    <div>
     <input type="checkbox" id= {dia} name="topping" value="disponible" /> {dia}
    </div>
    )
  }

  return (
    <div style = {formulario}>
    <form onSubmit={handleSubmit}>
      <label>ingrese su nombre:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className = "error">Enviar</button>
      <h1 style={bigblue}>{name.toLowerCase()}</h1>

      <label>ingrese apellido:
        <input 
          type="text" 
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <h1 style={bigblue}>{apellido.toLowerCase()}</h1>
      <label>ingrese materia:
        <input 
          type="text" 
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
        />
      </label>
      <h1 style={bigblue}>{materia.toLowerCase()}</h1>

      <h1>Dias disponible:</h1>
      {dias("Lunes")}
      {dias("Martes")}
      {dias("Miercoles")}
      {dias("Jueves")}
      {dias("Viernes")}
      
      <h1>Bloques disponible:</h1>
      <div style = {divCont}>
      {bloques("1er bloque (7:45 a 9:05)")}
      {bloques("2do bloque (9:20 a 10:40)")}
      {bloques("3er bloque (10:55 a 12:15)")}
      {bloques("Almuerzo (12:15 a 13:10)")}
      {bloques("4t obloque (13:10 a 14:30) ")}
      {bloques("5to bloque (14:40 a 16)")}
      {bloques("6to bloque (16:10 a 17:30)")}
      </div>
    </form>
    </div>
  )
}


