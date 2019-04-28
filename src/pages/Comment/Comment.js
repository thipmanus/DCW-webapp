import React, { Component } from 'react';
import Header from '../Comment/components/Header';
import MessageList from '../Comment/components/MessageList';
import MessageBox from '../Comment/components/MessageBox';
import firebase from 'firebase';
import '../Comment/Comment.css';
class Comment extends Component {
render() {
  return (
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
  );
 }
}
export default Comment;