import React, { Component } from 'react';
import './App.css';
import { Field, reduxForm, reset } from 'redux-form';
import Inputcard from './Inputcard'
import Chatroom from './Chatroom'
import Statusbar from './Statusbar'

class App extends Component {

  //sendMessage={handleSubmit(this.sendMessage.bind(this))}

  //Lifecycle method
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <Statusbar />
        <Chatroom />
        <Inputcard />
      </div>
    );
  }
}

export default App;