var React = require('react');

var Questions = React.createClass({

  ask(question){
    this.props.emit('ask', question);
  },
  
  addQuestion(question, i){
    return(
      <div key={i} className="col-xs-12 col-sm-6 col-md-3">
        <button onClick={this.ask.bind(null, question)}> {question.q} </button>
      </div>
    );
  },

  render(){
    return (
      <div id="questions" className="row">
        <h2> Questions </h2>
        {this.props.questions.map(this.addQuestion)}
      </div>
    )
  }
});

module.exports = Questions;
