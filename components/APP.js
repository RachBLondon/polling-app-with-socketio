var React = require('react');
var io    = require('socket.io-client');
var Header= require('./parts/Header');

var APP = React.createClass({

  componentWillMount(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  },

  connect(){
    alert('connectioned:' + this.socket.id);
  },

  render(){
    return (
      <div>
          <Header title="New Headers" />
      </div>
    );
  }
});

module.exports = APP;
