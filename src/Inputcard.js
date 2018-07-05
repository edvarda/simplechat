import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm, reset } from 'redux-form';
import { saveMessage } from './actions/messageActions'; //TODO change name
import { Input, Button, Container} from 'rebass';


const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 4fr 1fr;
`;

const StyledSendButton = styled(Button)`
	border: 2px solid ${props => props.theme.colors.bubbles};
`;

class Inputcard extends Component {

  //Custom
  sendMessage(values) {
  	if (values) {
  		const message = {...values, user: this.props.displayName};
    	this.props.saveMessage(message).then(this.props.dispatch(reset('NewMessage')));
    }
  }

  //Custom
  renderField(field) {
  	if (!field.loggedIn) {
  		return(
 			<Input bg="bubbles" type="text" {...field.input} placeholder={`You must be logged in to send messages`} disabled/>
    	);
  	} else {
	    return(
		    <Input bg="bubbles" type="text" {...field.input} placeholder={`Please enter a message`}/>
	    );
	}
  }

  //Lifecycle method
  render() {
    const { handleSubmit } = this.props;
    return(
    	<Container bg='englishgreen' px={3} py={3}>
          <StyledForm onSubmit={handleSubmit(this.sendMessage.bind(this))}>
            <Field
              name="text"
              component={this.renderField}
              loggedIn={this.props.loggedIn}
            />
        	<StyledSendButton bg="darkspring" ml={2} type="submit" disabled={!this.props.loggedIn}>Send</StyledSendButton>
          </StyledForm>
        </Container>
    );
  }
}

let input = reduxForm({
  form: 'NewMessage'  
})(Inputcard);

function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps, { saveMessage })(input);
