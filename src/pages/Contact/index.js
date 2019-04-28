import React, { Component } from 'react';
import { Card, Button, CardImg, CardText, CardGroup,CardBody } from 'reactstrap';
import './Content.css';
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
class Content extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="Contact" />
      <div class = "Backgounds">
      <br></br>
      <h1 className = "top">&nbsp;&nbsp;Developer&nbsp;&nbsp;</h1>
      <br></br>
      <br></br>
      <div class = "xflex">
      <CardGroup style={cards} >
        <Card style={cards} body inverse color="primary" >
          <CardImg style={cardStyle} src="https://www.picz.in.th/images/2018/09/26/hWNvAu.jpg" />
          <CardBody>
              <CardText>นายธิปมนัส รัตนนุพงค์</CardText>
              <CardText>รหัสนักศึกษา 5910110148</CardText>
              <a href="https://www.facebook.com/thipmanus.rattananupong">
              <Button color="info" size="lg" block >Facebook</Button>
              </a>
          </CardBody>
          </Card>
      </CardGroup>
      </div>
      </div>
      </MuiThemeProvider>
    );
   }
  }
var cardStyle = {
  width: '100%',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
}
var cards = {
  width: '25em',
  justifyContent: 'center',
}
export default Content;