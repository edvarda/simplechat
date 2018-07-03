import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { saveMessage } from './actions/messageActions'; //TODO change name
import './App.css';

class Inputcard extends Component {
  //Custom
  sendMessage(values) {
    this.props.saveMessage(values).then(this.props.dispatch(reset('NewMessage')));
  }

  //Custom
  renderField(field) {
    return(
      <input type="text" {...field.input} placeholder={`Please enter a ${field.label}`} className={field.class}/>
    );
  }

  
  render() {
    const { handleSubmit } = this.props;
    return(
    	<div className="inputcard">
          <form onSubmit={handleSubmit(this.sendMessage.bind(this))}>
	        <div className="form-row">
	  	      	<div className="col">
		            <Field
		              name="user"
		              component={this.renderField}
		              label="Username"
		              class="form-control"
		            />
 	           	</div>
	           	<div className="col-7">
		            <Field
		              name="text"
		              component={this.renderField}
		              label="Message"
		              class="form-control"
		            />
				</div>
	            <div className="col">
	            	<button type="submit" className="btn btn-primary form-control">Send</button>
	            </div>
	        </div>
          </form>
        </div>
    );
  }
}

let input = reduxForm({
  form: 'NewMessage'  
})(Inputcard);

export default connect(null, { saveMessage })(input);
