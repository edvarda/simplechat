import React, { Component } from 'react';
import './App.css';

class Statusbar extends Component {

  renderLoggedIn() {
    return "Logged in";
  }

  renderLoggedOut() {
    return "Logged out";
  }

  render() {
    return(
      <div className="statusbar">
      {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
      </div>
    );
  }
}

export default Statusbar;