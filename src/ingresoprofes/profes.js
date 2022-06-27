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
  //const diasDisp = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
    
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
  //const [disp, setDisp] = useState(false);
  return (
    <div className="square">
      <div className = "hora"> 
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
  const renderSquare = (num,hora) => {
    return <Square hora = {hora} num = {num}/>;
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
          {renderSquare()}
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


