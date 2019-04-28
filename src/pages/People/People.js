import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './People.css';
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
const URL = 'https://swapi.co/api/people/';
class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        this.setState({ people: res.data.results })
        console.log(res.data.results)
      })
  }
  renderDisplay() {
    return _.map(this.state.people, people => {
      return (
        <div className="shiptitle">
          &nbsp;
          <h2>name: {people.name}</h2>
          &nbsp;
          <li className="shipheader">
            height: {people.height}<br/>
          </li>
          &nbsp;
          <li className="shipheader">
            weight: {people.mass}<br/>
          </li>
          &nbsp;
          <li className="shipheader">
            gender: {people.gender}<br/>
          </li>
          &nbsp;
        </div>
      )
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="People" />
        <div className= "peoBg">
          
          {this.renderDisplay()}
        </div>   
    </MuiThemeProvider>
    )
  }
}

export default People;
