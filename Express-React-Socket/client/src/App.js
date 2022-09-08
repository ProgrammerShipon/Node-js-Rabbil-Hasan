
import React, { Component } from 'react';
import io from 'socket.io-client'

class App extends Component {

  constructor () {
    super();
    this.state = {
      msg : ""
    }
  }

  componentDidMount () {
    const socket = io.connect('/');
      socket.on('msg', (data) => {
        this.setState({msg:data})
      })
  }

  render () {
    return (
      <div>
        <h1> Assalamualaikum </h1>
        <p>{this.state.msg}</p>
      </div>
    );
  };
};

export default App;
