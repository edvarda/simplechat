import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getMessages } from './actions/messageActions'; //TODO change name

class Chatroom extends Component {

  //Lifecycle method
  constructor(props) {
    super(props);
  }

  //Lifecycle method
  componentWillMount() {
    this.props.getMessages();
  }
  
  //Custom
  renderMessages() {
    return (
      _.map(this.props.messages, (message, key) => {
        return (
          <li key={key} className="message row">
            <strong className="sender">{message.user}:</strong>
            <p className="text">{message.text}</p>
          </li>
        );
      })
    );
  }

  //Lifecycle method
  render() {
    return(
      <div className="chatroom">
        <ul className="messages">
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  messages: state.messages,  
}), { getMessages })(Chatroom);;