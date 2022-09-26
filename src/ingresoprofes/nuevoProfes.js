import { useState } from "react";
import React, {useEffect} from 'react';
import "./styleProfes.css"

const Inputs = props => {

  const [nombre, setName] = useState("");

  const [apellido, setApellido] = useState("");

  const [materia, setMateria] = useState("");

  const [idMateria, setIdMateria] = useState("");

  const [posibles_materias, setPosibles] = useState();


  const horarioVacio = [
    [false, false, false, false, false, false,"lunes"],
    [false, false, false, false, false, false,"martes"],
    [false, false, false, false, false, false,"miercoles"],
    [false, false, false, false, false, false,"jueves"],
    [false, false, false, false, false,"viernes"],
  ];

  const [disponibilidad, setDisponibilidad] = useState(horarioVacio)

  const setaerMateria = (e) =>{
    getApiData();
    setMateria(e.target.value)
    setIdMateria(e.target.value.id_materia)
    console.log("materia es " + materia + "su ID es" + idMateria)
  }

  const getApiData = async () => {
    const response = await fetch(
      "http://localhost:5000/materias"
    ).then((response) => response.json());
    console.log(response);
    setPosibles(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`The name you entered was: ${nombre} ${apellido} de ${materia}`)

    fetch('http://localhost:5000/infoProfesor', {
      method: 'POST',
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        disponibilidad:disponibilidad,
        materia: materia,
        id_materia: idMateria
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

  return (
    <div className = "shadow">
      <div className = "formulario">
        <form onSubmit={handleSubmit}>
          <div className = "formHeader">
            <p onClick = {props.onClose} className = "boton">X</p>
          </div>
          <label>Nombre del docente:
            <br></br>
            <input 
              className = "inputs"
              placeholder = "Escribe aquí"
              type="text" 
              value={nombre}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
            <br></br>
            <label>Apellido del docente:
            <br></br>
            <input 
              className = "inputs"
              placeholder = "Escribe aquí"
              type="text" 
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </label>
          <br></br>
          <label> Materia que da:
            <br></br>
            <select name="materias" onChange={setaerMateria}>
              {posibles_materias && posibles_materias.map((user) => (
                  <option value = {user.nombre_materia}>{user.nombre_materia}</option>
              ))}
            </select>
          </label>
        <Horarios setDisponibilidad = {setDisponibilidad} disponibilidad = {disponibilidad}/>
        <button className = "boton">Guardar</button>
       </form>
    </div>
  </div>
  )
}



const Square = (props) => {

  const [tocado, setToca] = useState(false);
  const newHorario = [...props.disponibilidad];
  function Tocar (){
       tocado? setToca(false) : setToca(true)

       if(tocado) newHorario[props.Fila][props.Columna] = false 
       else newHorario[props.Columna][props.Fila] = true
       props.setDisponibilidad(newHorario)
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
      <h1 className="status">Horarios disponibles: </h1>
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

  export {Inputs}

