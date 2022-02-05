

import React from 'react';
import ReactDOM from 'react-dom';
//import ListGroup from 'react-native';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ListGroup} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function ClueRow(props) {
  return (
    <ListGroup horizontal={"md"}>
      <ListGroup.Item>{props.name}</ListGroup.Item>
      <ButtonGroup>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </ButtonGroup>
    </ListGroup>
    // <button></button>
  );
}


function ClueTableRow(props) {
  return (
      <tr>
        <td>{props.name}</td>
        <td><button className="square" onClick={props.onClick}>
          {props.value}
        </button></td>
        <td><button className="square" onClick={props.onClick}>
          {props.value}
        </button></td>
        <td><button className="square" onClick={props.onClick}>
          {props.value}
        </button></td>
    </tr>
    );
}

class ClueInfo extends React.Component {
  renderClueRow(i, rowname) {
    return (
      <ClueRow
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        name={rowname}
      />
    );
  }
  renderClueTableRow(i, rowname) {
    return (
      <ClueTableRow
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        name={rowname}
      />
    );
  }  

  render() {

    return (
      <div>
        <div className="people-rows">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ella</th>
                <th>Ian</th>
                <th>Janice</th>
              </tr>
            </thead>
            <tbody>
              {this.renderClueTableRow(0, "Prof Plum")}
              {this.renderClueTableRow(1, "Prof Green")}
            </tbody>
          </Table>
        </div>
        <div className="weapon-rows">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ella</th>
                <th>Ian</th>
                <th>Janice</th>
              </tr>
            </thead>
            <tbody>
              {this.renderClueTableRow(0, "Candles")}
              {this.renderClueTableRow(1, "Rope")}
            </tbody>
          </Table>
        </div>
        <div className="weapon-rows">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ella</th>
                <th>Ian</th>
                <th>Janice</th>
              </tr>
            </thead>
            <tbody>
              {this.renderClueTableRow(0, "Kitchen")}
              {this.renderClueTableRow(1, "Dining Room")}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}


class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">

        {/* New clue stuff starts here */}
          <div className="cluesheet">
            <div className="clueboard">
              <ClueInfo
                squares={current.squares}
                />
            </div>
          </div>
        </div>

    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
