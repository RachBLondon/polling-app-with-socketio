var React = require('react');
var io    = require('socket.io-client');
var Header= require('./parts/Header');

var APP = React.createClass({

  getInitialState(){
    return {
      status : 'disconnected'
    }
  },

  componentWillMount(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  },

  connect(){
    this.setState({ status: 'connected'});
  },

  render(){
    return (
      <div>
          <Header title="New Headers" status={this.state.status} />
      </div>
    );
  }
});

module.exports = APP;
