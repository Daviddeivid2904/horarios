import React from 'react';
import "./styleHorario.css"

const Square = (props) => {
    return (
      <div className="horariossquare">
        <p className="horariosnumero">{props.num}</p>
        <div className = "horarioshora">
            {props.hora}
        </div>
      </div>
    );
  }
const Dia = (props) => {
    return (
      <div className="horariosdia">
        {props.dia}
      </div>
    );
}

function Board() {
  const renderSquare = (num,hora) => {
    return <Square hora = {hora} num = {num}/>;
  }
  const renderDia = (info) => {
    return <Dia dia = {info}/>;
  }

  const status = "horarios"

    return (
      <div>
        <h1 className="horariosstatus">{status}</h1>
        <div className="horariosboard-row">
          {renderDia("Viernes")}
          {renderDia("Jueves")}
          {renderDia("Miercoles")}
          {renderDia("Martes")}
          {renderDia("Lunes")}
        </div>
        <div className="horariosboard-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare("1°","7:45 - 9:05")}
        </div>
        <div className="horariosboard-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare("2°","9:20 - 10:40")}

        </div>
        <div className="horariosboard-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare("3°","10:55 - 12:15")}

        </div>
        <div className="horariosboard-row">
          {renderDia()}
          {renderDia()}
          {renderDia()}
          {renderDia()}
          {renderDia()}
          {renderDia()}
        </div>
        <div className="horariosboard-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare("4°","13:10 - 14:30")}

        </div>
        <div className="horariosboard-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare("5°","14:40 - 16:00")}

        </div>
        <div className="horariosboard-row">
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare()}
          {renderSquare("6°","16:10 - 17:30")}

        </div>
      </div>
    );
  }

function Game (){
    return (
      <div className="horariosgame">
        <div className="horariosgame-board">
          <Board />
        </div>
        <div className="horariosgame-info">
        </div>
      </div>
    );
  }

export {Game}