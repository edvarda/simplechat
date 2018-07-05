import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, reduxForm, reset } from 'redux-form';
import Inputcard from './Inputcard'
import Chatroom from './Chatroom'
import Statusbar from './Statusbar'

const AppWrapper = styled.div`
  max-width: 60%;
  margin: auto;
  margin-top: 5rem;
  box-shadow: 0px 7px 20px 0px rgba(0,0,0,0.7);
`

class App extends Component {

  //Lifecycle method
  render() {
    const { handleSubmit } = this.props;
    return (
      <AppWrapper>
        <Statusbar />
        <Chatroom />
        <Inputcard />
      </AppWrapper>
    );
  }
}

export default App;