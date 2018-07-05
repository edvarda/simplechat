import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { login, logout, fetchUser } from './actions/authActions';
import { Container, ButtonOutline, Box} from 'rebass';

const StyledStatusbar = styled(Container)`
  width: 100% !important;
  height: 6rem !important;
  font-size: larger;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledUserInfo = styled(Box)`
  align-self: stretch;
  display: grid;
  column-gap 1rem;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 1rem;
  & > img {

  }
`;

const StyledButton = styled(ButtonOutline)`
  margin: 1rem;
  align-self: stretch;
  &:hover {
    color: ${props => props.theme.colors.englishgreen};
  }
`;


class Statusbar extends Component {

  //Lifecycle method
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return(
      <StyledStatusbar color="bubbles" bg="darkspring">
      {this.props.loggedIn ? <UserInfo avatar={this.props.photoURL} name={this.props.displayName} /> : ""}
      <AuthButton 
        onClick={this.props.loggedIn ? this.props.logout.bind(this) : this.props.login.bind(this)}
        prompt={this.props.loggedIn ? 'Logout' : 'Login'}
      />
      </StyledStatusbar>
    );
  }
}

function UserInfo(props) {
  return(
    <StyledUserInfo>
      <img src={props.avatar}/>
      <span>{props.name}</span>
    </StyledUserInfo>
  );
}

function AuthButton(props) {
  return (
    <StyledButton onClick={props.onClick} children={props.prompt}/>
  );
}

function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps,{ login, logout, fetchUser })(Statusbar);