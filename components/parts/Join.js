var React = require('react');

var Join = React.createClass({

  join(){
    var memberName = React.findDOMNode(this.refs.name).value;
    alert("TODO: JOIN member" + memberName);
  },

  render (){
    return (
      <form action="javascript:void(0)" onSubmit={this.join}>

        <label> Full Name </label>
        <input ref="name"
              className="form-control"
               placeholder="enter your full name...."
               required />
        <button className="btn btn-primary"> Join </button>
      </form>
    );
  }
});

module.exports = Join;
