import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './ship.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.grey900,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.white
  }
});
const URL = 'https://swapi.co/api/starships/';
class ship extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starships: []
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        this.setState({ starships: res.data.results })
        console.log(res.data.results)
      })
  }
  renderDisplay() {
    return _.map(this.state.starships, starship => {
      return (
        <div className="shiptitle">
         &nbsp;
          <h2>name: {starship.name}</h2>
          &nbsp;
          <li className="shipheader">
            model: {starship.model}<br/>
          </li>
          &nbsp;
          <li className="shipheader">
           manufacturer: {starship.manufacturer}<br/>
          </li>
          &nbsp;
          <li className="shipheader">
            length: {starship.length}<br/>
          </li>
          &nbsp;
          <li className="shipheader">
            max_atmosphering_speed: {starship.max_atmosphering_speed}<br/>
          </li>
          &nbsp;
        </div>
      )
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="Starship" />
        <div className= "shipBg">
          
          {this.renderDisplay()}
        </div>   
    </MuiThemeProvider>
    )
  }
}

export default ship;
