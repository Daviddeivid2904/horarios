import React from 'react';
import "./styleHorario.css"

const Square = (props) => {
    return (
      <div className="square">
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

class Board extends React.Component {
  renderSquare(num,hora) {
    return <Square hora = {hora} num = {num}/>;
  }
  renderDia(info) {
    return <Dia dia = {info}/>;
  }

  render() {
    const status = 'Horario';

    return (
      <div>
        <h1 className="status">{status}</h1>
        <div className="board-row">
          {this.renderDia("Viernes")}
          {this.renderDia("Jueves")}
          {this.renderDia("Miercoles")}
          {this.renderDia("Martes")}
          {this.renderDia("Lunes")}
        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare("1°","7:45 - 9:05")}
        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare("2°","9:20 - 10:40")}

        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare("3°","10:55 - 12:15")}

        </div>
        <div className="board-row">
          {this.renderDia()}
          {this.renderDia()}
          {this.renderDia()}
          {this.renderDia()}
          {this.renderDia()}
          {this.renderDia()}
        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare("4°","13:10 - 14:30")}

        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare("5°","14:40 - 16:00")}

        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare("6°","16:10 - 17:30")}

        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export {Game}