import { useState } from "react";
import React, {useEffect} from 'react';
import "./styleHorario.css"

const Game = props => {

  return (
    <div className="manualmente">
      <h1>Hacer manualmente</h1>
        <div className = "separados">
          
          <div className= "horarios">
            <Horarios/>
          </div>

          <div className= "horarios">
            <Horarios/>
          </div>
        </div>
    </div>
)
  }


const Square = (props) => {
  const [nombre, setNombre] = useState("mati");
  const [profesor, setProfesor] = useState("juan");
        return (
        <div className="squareHorarios">
          <label className = "nombreHorarios">{nombre}</label>
          <label className = "profeHorario">{profesor}</label>
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

const Board = (props) => {
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
          {cant_veces.map(i => <Square setDisponibilidad = {props.setDisponibilidad} disponibilidad = {props.disponibilidad} Columna = {i} Fila = {horas.indexOf(numero)}/>)}
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
       {cant_veces.map(i => <Square setDisponibilidad = {props.setDisponibilidad} disponibilidad = {props.disponibilidad} Columna = {i} Fila = {horas.indexOf(numero) + 3}/>)}
       <Hora hora = {numero} num = {horas.indexOf(numero) + 4}/>
     </div> 
     )
 )
}
  
  return(
    <div>
      <h1 className="status"></h1>
      <br></br>
    {paraDias()}
    {tabla1()}
    {diasVacios()}
    {tabla2()}
    </div>
  );
 
  }

  const Horarios = (props) => {
    return (
      <div className="game">
        <div className="game-board">
          <Board setDisponibilidad = {props.setDisponibilidad} disponibilidad = {props.disponibilidad} />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }

  export {Game}

