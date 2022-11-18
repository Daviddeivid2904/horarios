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

  const [posibles_materias, setPosibles] = useState();
  const [posibles_profes, setProfesPosibles] = useState();

  const getApiData = async () => {
    const response = await fetch(
      "http://localhost:5000/materias"
    ).then((response) => response.json());
    console.log(response);
    setPosibles(response);
  };

  const getProfeData = async () => {
    const response = await fetch(
      "http://localhost:5000/profesores"
    ).then((response) => response.json());
    //console.log(response);
    setProfesPosibles(response);
  };

  useEffect(() => {
    getProfeData();
    getApiData();
  }, []);

  const [nombre, setNombre] = useState("Materia:");
  const [profesor, setProfesor] = useState("Profesor:");

  const setaerMateria = (e) =>{
    getApiData();
    console.log(e.target.value)
    setNombre(e.target.value)
  }

  const setaerProfe = (e) =>{
    getApiData();
    console.log(e.target.value)
    setProfesor(e.target.value)
  }
        return (
        <div className="squareHorarios">
          <label className = "nombreHorarios">{nombre}</label>
          <select className = "selector"  name="materias" /*onChange={setaerMateria}*/>
                  <option>Elegir materia</option>
              {posibles_materias && posibles_materias.map((user) => (
                  <option value = {user.nombre_materia}>{user.nombre_materia}</option>
              ))}
            </select>
            <label className = "profeHorario">{profesor}</label>
            <select className = "selector" name="materias" /*onChange={setaerProfe}*/>
                 <option>Elegir profesor</option>
              {posibles_profes && posibles_profes.map((user) => (
                  <option value = {user.apellido}>{user.apellido}</option>
              ))}
            </select>
        </div>
      );
    }
const Hora = (props) => {
  return (
    <div className="izqHorario">
      <p className="numeroHorario">{props.num}</p>
      <div className = "horaHorario">
          {props.hora}
      </div>
    </div>
  );
}
const Dia = (props) => {
  return (
    <div className="diaHorario">
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
        <div className= "board-rowHorario">
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
        <div className= "board-rowHorario"> 
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
     <div className= "board-rowHorario"> 
       {cant_veces.map(i => <Square setDisponibilidad = {props.setDisponibilidad} disponibilidad = {props.disponibilidad} Columna = {i} Fila = {horas.indexOf(numero) + 3}/>)}
       <Hora hora = {numero} num = {horas.indexOf(numero) + 4}/>
     </div> 
     )
 )
}
  
  return(
    <div>
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
      <div className="gameHorario">
        <div className="game-boardHorario">
          <Board setDisponibilidad = {props.setDisponibilidad} disponibilidad = {props.disponibilidad} />
        </div>
        <div className="game-infoHorario">
        </div>
      </div>
    );
  }

  export {Game}

