

import React from 'react';
import ReactDOM from 'react-dom';
//import ListGroup from 'react-native';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ListGroup} from 'react-bootstrap';
// import {ButtonGroup} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';
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

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cellEntry: this.props.value}
    //{isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //this.props.current_info.knowledge.people[0]=this.state.cellEntry;
    var newState = this.state;
    newState.cellEntry = newState.cellEntry+1;
    //this.props.people[0]= this.state.cellEntry;

    // this.setState(prevState => ({
    //   cellEntry: prevState.cellEntry+1
    // }));
    this.setState(newState)
    // this.setState(this.stateUpdate());
  }
// from render  {this.state.isToggleOn ? this.props.value : 'OFF'}

  render() {
    console.log(this.props.value)
    return (
      <button onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
function BuildDataCells(props) {
  var table_row_data = [];
  for (var i = 0; i < props.num_players; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    table_row_data.push(<td key={i}>
      <Toggle 
        value={props.values[i]} 
        onClick={() => props.onClick(0)}
      />

      {/* <button className="square" onClick={handleClick}>
      {props.values[i]}
    </button> */}
    </td>
    );

    
  }

  return table_row_data;
  // const listItems = props.values.map((number) =>
  //   <td key={number.toString()}>
  //     <button className="square" onClick={props.onClick}>{number}</button>
  //   </td>
  // );

  // return listItems;
}

function ClueRow(props) {
  var data = BuildDataCells(props)
  return (
    <tr>
      <td>{props.name}</td>
      {data}
    </tr>
  );
}

class ClueInfo extends React.Component {


  
  renderClueTableRow(i, rowname, num_players, current_info) {
    // return (
    //   <ClueRow
    //     value={"1"} 
    //     values = {current_info}
    //     onClick={() => this.props.onClick(i)}
    //     name={rowname}
    //     num_players={num_players}
    //   />
    // );
    console.log("In Clue table");
    console.log(current_info)
     const curr_row = <ClueRow
        value={"1"} 
        values = {current_info}
        onClick={() => this.props.onClick(i)}
        name={rowname}
        num_players={num_players}/>;
    return curr_row;
  }  

  render() {
    console.log("Rendering ClueInfo"); 
    console.log(this.props.state.people) 
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
              {this.renderClueTableRow(0, "Prof Plum", this.props.state.num_players, this.props.state.people.slice(0,3))}
              {this.renderClueTableRow(1, "Prof White", this.props.state.num_players, this.props.state.people.slice(3,6))}
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
              {this.renderClueTableRow(0, "Candles", 3, [1, 2, 3])}
              {this.renderClueTableRow(1, "Rope", 3, [1, 2, 3])}
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
              {this.renderClueTableRow(0, "Kitchen", 3, [1, 2, 3])}
              {this.renderClueTableRow(1, "Dining Room", 3, [1, 2, 3])}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}


class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      num_players: 3,
      num_weapons: 5,
      num_rooms: 6,
      num_people: 6,
      people: Array(9*3).fill(1),
      rooms: Array(6*3).fill(null),
      weapons: Array(6*3).fill(null),

    };
  }

  handleClick(i) {
    var current_people = this.state.people;
    // const people = current.square.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    current_people = current_people.fill(3);
    this.setState({
      people: current_people
    });

    console.log(this.state.people);  

    console.log(this.state.rooms);  
    }

  render() {



    const current = this.state;
    // const weapon_known = false;
    // const weapon_best_guess = "Candlestick"
    // let weapon_status;
    // if (weapon_known) {
    //   weapon_status = ": " + weapon_best_guess;
    // } else {
    //   weapon_status = "Weapon Unknown";
    // }

    return (
      <div className="game">

        {/* New clue stuff starts here */}
          <div className="cluesheet">
            <div className="clueboard">
              <ClueInfo
                state={current}
                onClick={i => this.handleClick(i)}
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
