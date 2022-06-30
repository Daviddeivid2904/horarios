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

  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [materia, setMateria] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name} ${apellido} de ${materia}`)
    
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
  const renderSquare = (dia) => {
    return <Square dia = {dia}/>;
  }

  const renderHora = (num,hora) => {
    return <Hora hora = {hora} num = {num}/>;
  }

  const renderDia = (info) => {
    return <Dia dia = {info}/>;
  }

  const status = "horarios"

    return (
      <div>
        <h1 className="status">{status}</h1>
        <div className="board-row">
          {renderDia("Viernes")}
          {renderDia("Jueves")}
          {renderDia("Miercoles")}
          {renderDia("Martes")}
          {renderDia("Lunes")}
        </div>
        <div className="board-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare("setlunes1")}
          {renderHora("1°","7:45 - 9:05")}
        </div>
        <div className="board-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderHora("2°","9:20 - 10:40")}

        </div>
        <div className="board-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderHora("3°","10:55 - 12:15")}

        </div>
        <div className="board-row">
          {renderDia()}
          {renderDia()}
          {renderDia()}
          {renderDia()}
          {renderDia()}
          {renderDia()}
        </div>
        <div className="board-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderHora("4°","13:10 - 14:30")}

        </div>
        <div className="board-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderHora("5°","14:40 - 16:00")}

        </div>
        <div className="board-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderHora("6°","16:10 - 17:30")}

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



