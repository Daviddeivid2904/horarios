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
  background:"lightblue",
}

  const [nombre, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [materia, setMateria] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${nombre} ${apellido} de ${materia}`)
    
//   const horarioVacio = {
//     lunes: [false, false, false, false, false, false],
//     martes: [false, false, false, false, false, false],
//     miercoles: [false, false, false, false, false, false],
//     jueves: [false, false, false, false, false, false],
//     viernes: [false, false, false, false, false],
//   };
//   const [horario, setHorario] = useState(horarioVacio);

  }

  return (
    <div style = {formulario}>
    <form onSubmit={handleSubmit}>
      <label>ingrese su nombre:
        <input 
          type="text" 
          value={nombre}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className = "error">Enviar</button>
      <h1 style={bigblue}>{nombre.toLowerCase()}</h1>

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
      <Horarios/>
    </form>
    </div>
  )
}

const Square = (props) => {

  const [tocado, setToca] = useState(false);
  
  function Tocar (){
       tocado? setToca(false): setToca(true)
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
    const cuadradito = [];
    const cuadraDias = [];
    const vacio = []
  function bloques (){
  for (var i = 1; i <= 5; i++) {
    cuadradito.push(
    <Square/>
    )
    }
  }

  function paraDias (){

     const dias = ["Viernes", "jueves" , "Miercoles", "Martes","Lunes"]

    for (var i = 0; i <= 4; i++) {
      cuadraDias.push(
      <Dia dia = {dias[i]}/>
      )
      }
    }
    function diasVacios (){

      const dias = ["","", "","","",""]
 
     for (var i = 0; i <= 5; i++) {
       vacio.push(
       <Dia dia = {dias[i]}/>
       )
       }
     }
  

  return(
    <div>
      <h1 className="status">Horarios disponibles: </h1>
      <br></br>
      <div className= "board-row">
        {paraDias()}
        {cuadraDias}
      </div>
      <div className= "board-row">
        {bloques()}
        {cuadradito}
        <Hora hora = "7:45 - 9:05"num = "1" />
      </div>
      <div className= "board-row">
        {cuadradito}
        <Hora hora = "9:20 - 10:40"num = "2" />
      </div>
      <div className= "board-row">
        {cuadradito}
        <Hora hora = "10:55 - 12:15" num = "3" />
      </div>

      <div className= "board-row">
        {diasVacios()}
        {vacio}
      </div>

      <div className= "board-row">
        {cuadradito}
        <Hora hora = "13:10 - 14:30"num = "4" />
      </div>
      <div className= "board-row">
        {cuadradito}
        <Hora hora = "14:40 - 16:00"num = "5" />
      </div>
      <div className= "board-row">
        {cuadradito}
        <Hora hora = "16:10 - 17:30"num = "6" />
      </div>
      
      
      
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

//   import { useState } from "react";
// import React from 'react';
// import "./styleProfes.css"
// export {Inputs}
// function Inputs() {
 
//   const bigblue = {
//     color: "blue",
//     padding: "40",
//     fontfamily: "Sans-Serif",
//     textalign: "center"
//   }
 
//   const formulario = {
//     background:"lightblue",
//   }
 
//   const horarioVacio = {
//     lunes: [false, false, false, false, false, false],
//     martes: [false, false, false, false, false, false],
//     miercoles: [false, false, false, false, false, false],
//     jueves: [false, false, false, false, false, false],
//     viernes: [false, false, false, false, false],
//   };
//   const [horario, setHorario] = useState(horarioVacio);
 
//   const [name, setName] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [materia, setMateria] = useState("");
 
 
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name} ${apellido} de ${materia}`)
   
//   }
 
//   return (
//     <div style = {formulario}>
//     <form onSubmit={handleSubmit}>
//       <label>ingrese su nombre:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <button className = "error">Enviar</button>
//       <h1 style={bigblue}>{name.toLowerCase()}</h1>
 
//       <label>ingrese apellido:
//         <input
//           type="text"
//           value={apellido}
//           onChange={(e) => setApellido(e.target.value)}
//         />
//       </label>
//       <h1 style={bigblue}>{apellido.toLowerCase()}</h1>
//       <label>ingrese materia:
//         <input
//           type="text"
//           value={materia}
//           onChange={(e) => setMateria(e.target.value)}
//         />
//       </label>
//       <h1 style={bigblue}>{materia.toLowerCase()}</h1>
//       <Horarios horario={horario}/>
//     </form>
//     </div>
//   )
// }
 
// const Square = (props) => {
 
//   const [tocado, setToca] = useState(false);
 
//   function Tocar (){
//    tocado? setToca(false): setToca(true)
//   }
 
//     //console.log("lunes 1 esta " + lunes_1)
//     //props.dia(true)
//     //console.log("lunes 1 esta " + lunes_1)
//     return (
//     <div className="square" onClick={Tocar}>
//       <div className = "click">
//         {tocado ? "✅" : ""}
//       </div>
//     </div>
//   );
// }
// const Hora = (props) => {
//   return (
//     <div className="izq">
//       <p className="numero">{props.num}</p>
//       <div className = "hora">
//           {props.hora}
//       </div>
//     </div>
//   );
// }
// const Dia = (props) => {
//   return (
//     <div className="dia">
//       {props.dia}
//     </div>
//   );
// }
 
// function Board({ horario }) {
//   const renderHora = (num,hora) => {
//     return <Hora hora = {hora} num = {num}/>;
//   }
 
//   const renderDia = (info) => {
//     return <Dia dia = {info}/>;
//   }
//   return(
//     <div>
//     {
//       Object.entries(horario).forEach((e) => {
//         <div className="board-row">
//           {
//             Array.from([1, 2, 3, 4, 5, 6], (i) => {
//               <Square dia={e.key} bloque={i}/>
//             })
//           }
//         </div>
//       })
//     }
//     </div>
//   );
 
//   }
 
// function Horarios ({ horario }){
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board horario={horario} />
//         </div>
//         <div className="game-info">
//         </div>
//       </div>
//     );
//   }
