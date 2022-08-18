import { useState } from "react";
import React from 'react';
import "./styleProfes.css"
export {Inputs}
const Inputs = props => {

  const bigblue = {
    color: "blue",
    padding: "40",
    fontfamily: "Sans-Serif",
    textalign: "center"
  }
  const [nombre, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [materia, setMateria] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${nombre} ${apellido} de ${materia} y estara en los siguientes horarios: ${Square.horario}`)
  }
  
  if(!props.show){
    return null
  }

  return (
    <div className = "shadow">
      <div className = "formulario">
    <form onSubmit={handleSubmit}>
      <label>Nombre del docente:
      <br></br>
        <input 
          type="text" 
          value={nombre}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <h1 style={bigblue}>{nombre.toLowerCase()}</h1>

      <label>Apellido del docente:
      <br></br>
        <input 
          type="text" 
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <h1 style={bigblue}>{apellido.toLowerCase()}</h1>
      <label>Materia que da:
      <br></br>
        <input 
          type="text" 
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
        />
      </label>
      <h1 style={bigblue}>{materia.toLowerCase()}</h1>
      <Horarios/>
      <button className = "boton">Enviar</button>
      <button onClick = {props.onClose} className = "boton">Cerrar</button>
    </form>
    </div>
    </div>
  )
}


const horarioVacio = [
  [false, false, false, false, false, false,"lunes"],
  [false, false, false, false, false, false,"martes"],
  [false, false, false, false, false, false,"miercoles"],
  [false, false, false, false, false, false,"jueves"],
  [false, false, false, false, false,"viernes"],
];


const Square = (props) => {

  const [tocado, setToca] = useState(false);
  const [horario, setHorario] = useState(horarioVacio);
  const newHorario = [...horario];

  function Tocar (){
       tocado? setToca(false) : setToca(true)

       if(tocado) newHorario[props.Fila][props.Columna] = false 
       else newHorario[props.Columna][props.Fila] = true
       
       setHorario(newHorario)
       console.log(horario)
      }
        return (
        <div className="square" onClick={Tocar}>
          <div className = "click">
            {tocado ? "✅" : ""}
          </div>
        </div>
      );
    }
const Hora = (props) => {
  return (
    <div className="izq">
      <p className="numero">{props.num}</p>
      <div className = "hora">
          {props.hora}
      </div>
    </div>
  );
}
const Dia = (props) => {
  return (
    <div className="dia">
      {props.dia}
    </div>
  );
}

function Board() {
    const cuadraDias = [];
    const vacio = []


  function paraDias (){

     const dias = ["Viernes", "jueves" , "Miercoles", "Martes","Lunes"]

    for (var i = 0; i <= 4; i++) {
      cuadraDias.push(
      <Dia dia = {dias[i]}/>
      )
      }

      return (
        <div className= "board-row">
        {cuadraDias}
        </div>
      )
    }
  function diasVacios (){

      const dias = ["","", "","","",""]
 
     for (var i = 0; i <= 5; i++) {
       vacio.push(
       <Dia dia = {dias[i]}/>
       )
       }

      return(vacio)
     }

     
  function tabla1(){
       const horas = ["7:45 - 9:05","9:20 - 10:40", "10:55 - 12:15"] 
       const cant_veces = [4,3,2,1,0]
    return(  
      horas.map(numero => 
        <div className= "board-row"> 
          {cant_veces.map(i => <Square Columna = {i} Fila = {horas.indexOf(numero)}/>)}
          <Hora hora = {numero} num = {horas.indexOf(numero) + 1}/>
        </div> 
        )
    )
  }

  function tabla2(){
    const horas = ["13:10 - 14:30","14:40 - 16:00", "16:10 - 17:30"] 
    const cant_veces = [4,3,2,1,0]
 return(  
   horas.map(numero => 
     <div className= "board-row"> 
       {cant_veces.map(i => <Square Columna = {i} Fila = {horas.indexOf(numero) + 3}/>)}
       <Hora hora = {numero} num = {horas.indexOf(numero) + 4}/>
     </div> 
     )
 )
}
  
  return(
    <div>
      <h1 className="status">Horarios disponibles: </h1>
      <br></br>
    {paraDias()}
    {tabla1()}
    {diasVacios()}
    {tabla2()}
    </div>
  );
 
  }

function Horarios (){
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
