import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMessages } from './actions/messageActions';
import { increaseHistoryLength } from './actions/roomActions';
import { Container, Box } from 'rebass';

const StyledMessageListWrapper = styled.div`
   height: 500px;
   overflow: auto;
   display:grid;
`;

const StyledMessageList = styled.div`
  align-self:end;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 0;
`;

const StyledMessage = styled.div`
  flex: 0 0 auto;
  margin-bottom: 0.2rem;
  background: transparent;
`;

const StyledTimestamp = styled.span`
  color: grey;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const StyledSender = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`;

const StyledText = styled.span`
`;

const StyledHistoryButton = styled(Box)`
  width: 100%;
  height: 2rem;
  border: 2px solid ${props => props.theme.colors.englishgreen};
  border-radius 4px;
  text-align: center;
  padding-top: 5px;
  $:hover {
    backgound: ${props => props.theme.colors.englishgreen};
    color: ${props => props.theme.colors.bubbles};
  }
`;

function IncreaseHistory(props) {
  return( 
    <StyledHistoryButton onClick={props.increaseHistory}>
      Load 15 more messages
    </StyledHistoryButton>
  );
}

class Chatroom extends Component {

  //Lifecycle method
  constructor(props) {
    super(props);
  }

  //Lifecycle method
  componentWillMount() {
    this.props.getMessages(this.props.historySize);
  }

  componentDidMount() {
    //this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    if (this.props.historySize !== prevProps.historySize) { this.props.getMessages(this.props.historySize); }
    //this.scrollToBottom();
  }

  //Custom
  renderMessages() {
    return (
      _.map(this.props.messages, (message, key) => {
        return (
          <StyledMessage key={key}>
            <StyledTimestamp>{message.timestamp}</StyledTimestamp>
            <StyledSender>{message.user}:</StyledSender>
            <StyledText>{message.text}</StyledText>
          </StyledMessage>
        );
      })
    );
  }

  //Lifecycle method
  render() {
    return(
      <Container bg="bubbles" px={2} py={2}>
        <IncreaseHistory increaseHistory={this.props.increaseHistoryLength.bind(this, (this.props.historySize + 15) )}/>
        <StyledMessageListWrapper>
          <StyledMessageList>
            {this.renderMessages()}
          </StyledMessageList>
        </StyledMessageListWrapper>
      </Container>
    );
  }
}

export default connect(state => ({
  messages: state.messages,
  historySize: state.room.historySize,  
}), { getMessages, increaseHistoryLength })(Chatroom);
