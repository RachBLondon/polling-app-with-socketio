var React   = require('react');
var Router  = require('react-router');
var Route   = Router.Route;
var DefaultRoute = Router.DefaultRoute;


var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');

var routes = (
  <Route handler={APP}>
    <DefaultRoute handler={Audience} />
    <Route name="speaker" path="speaker" handler={Speaker}> </Route>
    <Route name="board" path="board" handler={Board}> </Route>
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler />, document.getElementById('react-container'));
});
