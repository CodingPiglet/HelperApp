

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

const people_names = ["Plum", "Orange", "Red", "Blue", "exotic color", "x", "y"];
const room_names = ["D","B","c", "E", "f", "g", "h", "z", "d"];
const weapon_names = ["F","B","c", "E", "f", "g", "h", "z", "d"];

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
    var computed_id = this.props.row * this.props.num_players + this.props.player_num;
    return (
      <button onClick={this.props.onClick} id={this.props.info_type[0] + computed_id} info_type={this.props.info_type}>
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
    //this onclick doesn't do anything
    table_row_data.push(<td key={i}>
      <Toggle 
        value={props.values[i]} 
        info_type={props.info_type}
        row={props.row}
        player_num={i}
        num_players={props.num_players}
        onClick={(e) => props.onClick(e)}
      />

      {/* <button className="square" onClick={handleClick}>
      {props.values[i]}
    </button> */}
    </td>
    );

    
  }

  return table_row_data;

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
  
  renderClueTableRow(i, rowname, num_players, current_info, info_type) {
//
     const curr_row = <ClueRow
        value={"1"} 
        values = {current_info}
        onClick={(e) => this.props.onClick(e, info_type)}
        name={rowname}
        row={i}
        info_type={info_type}
        num_players={num_players}/>;
    return curr_row;
  }  

  renderClueSection(info_type, num_players, num_objects, data){

    var section_data = [];
    var name_data;
    if (info_type === "people") {
      name_data = people_names;
    }
    else if (info_type === "rooms") {
      name_data = room_names

    } else if (info_type === "weapons"){
      name_data = weapon_names;
    }

    for (var i = 0; i < num_objects; i++) {
      section_data.push(
        <React.Fragment key={i}>
        {this.renderClueTableRow(i, name_data[i], num_players, data.slice(i*num_players,(i+1)*num_players), info_type)}
        </React.Fragment>
        )

      }
    return section_data;
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
              {this.renderClueSection("people", this.props.state.num_players, this.props.state.num_people, this.props.state.people )}
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
            {this.renderClueSection("weapons", this.props.state.num_players, this.props.state.num_weapons, this.props.state.weapons )}
            </tbody>
          </Table>
        </div>
        <div className="room-rows">
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
            {this.renderClueSection("rooms", this.props.state.num_players, this.props.state.num_rooms, this.props.state.rooms )}
            {/* {this.renderClueSection("people", this.props.state.num_players, this.props.state.num_people, this.props.state.people )} */}
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
      rooms: Array(9*3).fill(2),
      weapons: Array(9*3).fill(3),

    };
  }

  handleClick(event) {
    var updated_people_info = this.state.people;
    var updated_rooms_info = this.state.rooms;
    var updated_weapons_info = this.state.weapons;
    // const people = current.square.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    var update_type = event.target.id[0];
    console.log("Clicked");
    console.log(event);

    console.log(event.target.info_type);
    var update_cell = event.target.id.substring(1);
    console.log(update_cell);
    // console.log(id); 
    if (update_type === "p") {
      updated_people_info[update_cell] = 5;
      //updated_people_info = updated_people_info.fill(3);
     } else if (update_type === "r"){
      updated_rooms_info = updated_rooms_info.fill(3);
     } else if (update_type === "w") {
      updated_weapons_info = updated_weapons_info.fill(3);
     }
     else {
       console.log("Unknown update")
     }


    this.setState({
      people: updated_people_info,
      rooms: updated_rooms_info,
      weapons: updated_weapons_info
    });

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
//onClick={}

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
