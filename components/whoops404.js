var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

var Whoops404 = React.createClass({
  render(){
    return (
      <div id="not-found">
        <h1> Whoops... </h1>
        <p> We cannot find the page that you have requested.
            Were upi looking for one of these?</p>
        <Link to="/"> Join as Audience </Link>
        <Link to="/speaker"> Start the presentation </Link>
        <Link to="/board"> View the Board </Link>
      </div>
    )
  }
});

module.exports = Whoops404;
