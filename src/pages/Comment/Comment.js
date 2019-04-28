import React, { Component } from 'react';
import Header from '../Comment/components/Header';
import MessageList from '../Comment/components/MessageList';
import MessageBox from '../Comment/components/MessageBox';
import firebase from 'firebase';
import '../Comment/Comment.css';
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
class Comment extends Component {
render() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="Comment" />
    <div className= "comBg">
    <div>
      &nbsp;&nbsp;
    </div>
    <div className="container">
      <Header title="Star war ภาคไหนและตัวละครใดถูกใจคุณที่สุด" />
      <div>
      &nbsp;&nbsp;
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
    </div>
    </MuiThemeProvider>
  );
 }
}
export default Comment;