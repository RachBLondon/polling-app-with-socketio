var React     = require('react');
var Display   = require('./parts/Display');
var Join      = require('./parts/Join');

var Audience = React.createClass({
  render(){
    return (
      <div>
          <Display if={this.props.status === 'connected'}>

             <Display if={this.props.member.name}>
                 <h2> Welcome {this.props.member.name} </h2>
                 <p> Questions will appear here </p>
             </Display>
             
             <Display if={!this.props.member.name}>
                 <h1> Join the session </h1>
                 <Join emit={this.props.emit} />
             </Display>
          </Display>
      </div>
    );
  }
});

module.exports = Audience;
