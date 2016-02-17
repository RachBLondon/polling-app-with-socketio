var React = require('react');

var Audience = React.createClass({
  render(){
    return (<h1> Audience  : {this.props.title}</h1>);
  }
});

module.exports = Audience;
