import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Film.css';
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
const URL = 'https://swapi.co/api/films/';
class Film extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        this.setState({ films: res.data.results })
        console.log(res.data.results)
      })
  }
  renderDisplay() {
    return _.map(this.state.films, films => {
      return (
        <div className="shiptitle">
          &nbsp;
          <h2>name: {films.title}</h2>
          &nbsp;
          <li className="shipheader">
            episode: {films.episode_id}<br/>
          </li>
          &nbsp;
          <li className="shipheader">
            director: {films.director}<br/>
          </li>
          &nbsp;
          <li className="shipheader">
            release date: {films.release_date}<br/>
          </li>
          &nbsp;
        </div>
      )
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="Film" />
        <div className= "filmBg">
          
          {this.renderDisplay()}
        </div>   
    </MuiThemeProvider>
    )
  }
}

export default Film;
