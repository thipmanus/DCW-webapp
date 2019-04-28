import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import {NavLink } from 'react-router-dom'
import Routing from './routes/index'
  var config = {
    apiKey: "AIzaSyByfjMMiI1tRMwGsICAuhgBrVLSkCaWXA0",
    authDomain: "reacthomework2.firebaseapp.com",
    databaseURL: "https://reacthomework2.firebaseio.com",
    projectId: "reacthomework2",
    storageBucket: "reacthomework2.appspot.com",
    messagingSenderId: "610341994574"
  };
  firebase.initializeApp(config);

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {user:null}
  } 
  login = () => {
    var that = this;
    const result = auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      that.setState({user: user});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  logout = () => {
    var that = this;
    auth().signOut().then(function() {
      that.setState({user: null});
    }).catch(function(error) {
    });
  }
  renderName = () => {
    const {user} = this.state
    if(user)
      return (<div><img src={`${user.photoURL}`} />
      &nbsp;
      &nbsp;
      {user ? `Hi, ${user.displayName}` : 'Hi!'}</div>)
  }
  render() {
    return (
      <div >
        <div >
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation"> 
          <div className="container" style={zx}>
            <div className="navbar-brand">
              <a className="navbar-item" href="https://swapi.co/">
                <img src="https://img.auctiva.com/imgdata/1/8/4/6/4/9/7/webimg/720886307_tp.jpg" alt="Starwar LOGO" />
              </a>
            </div>
            <div className="navbar-menu" style={zx}>
            <div className="navbar-start">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/Film" activeClassName="is-active" className="navbar-item">Film</NavLink>
                <NavLink to="/People" activeClassName="is-active" className="navbar-item">People</NavLink>
                <NavLink to="/Starship" activeClassName="is-active" className="navbar-item">Starship</NavLink>
                <NavLink to="/Comment" activeClassName="is-active" className="navbar-item">Comment</NavLink>
                <NavLink to="/Contact" activeClassName="is-active" className="navbar-item">Contact</NavLink>
            </div>
            <div>
              {this.renderName()}
            </div>
            <div className="navbar-end">
          <button class="fb-signin-button" onClick={this.login}>
            Login with Facebook
          </button>
          &nbsp;
          <button class="fb-signin-button" onClick={this.logout}>
            Logout
          </button>
              </div>
          </div>
          </div>
        </nav>
        </div>
        <div>
          <Routing />
        </div>
      </div>
    );
  }
}
var zx = {
  width: '100%',
  display: 'contents',
  justifyContent: 'flex-start',
  flexdirection: 'row',
  position: 'relative',
}
export default App;
