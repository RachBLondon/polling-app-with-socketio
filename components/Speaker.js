var React       = require('react');
var Display     = require('./parts/Display');
var JoinSpeaker = require('./parts/JoinSpeaker');
var Attendance  = require('./parts/Attendance');
var Questions   = require('./parts/Questions');

var Speaker = React.createClass({
  render(){
    return (
      <div>

        <Display if={this.props.status === 'connected'}>

          <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
              <Questions questions={this.props.questions} />
              <Attendance audience={this.props.audience} />
          </Display>

          <Display if={!this.props.member.name}>
            <h2> Start the presentation </h2>
            <JoinSpeaker emit={this.props.emit} />
          </Display>

        </Display>
      </div>

    );
  }
});

module.exports = Speaker;
