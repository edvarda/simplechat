import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getMessages, saveMessage } from './actions/postActions'; //TODO change name
import { Field, reduxForm, reset } from 'redux-form';

class App extends Component {

  //Lifecycle method
  componentWillMount() {
    this.props.getMessages();
  }

  //Custom
  renderMessages() {
    return (
      _.map(this.props.messages, (message, key) => {
        return (
          <div key={key} className="card message">
            <div className="row">
              <strong className="sender">{message.user}:</strong>
              <p className="text">{message.text}</p>
            </div>
          </div>
        );
      })
    );
  }

  //Custom
  renderField(field) {
    return(
      <input type="text" {...field.input} placeholder={`Please enter a ${field.label}`} className={field.class}/>
    );
  }

  //Custom
  onSubmit(values) {
    this.props.saveMessage(values).then(this.props.dispatch(reset('NewMessage')));
  }

  //Lifecycle method
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div>
          {this.renderMessages()}
        </div>
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} class="form-inline">
            <Field
              name="user"
              component={this.renderField}
              label="Username"
              class="form-control mb-2 mr-sm-2"
            />
            <Field
              name="text"
              component={this.renderField}
              label="Message"
              class="form-control mb-2 mr-sm-2"
            />
            <button type="submit" class="btn btn-primary mb-2 mr-sm-2">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewMessage'  
})(App);

form = connect(state => ({
  messages: state.messages,  
}), { getMessages, saveMessage })(form);

export default form;
