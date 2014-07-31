$(document).ready(function () {

  app.templates = {
    userView: $('#user-template').html(),
    airplaneView: $('#airplane-template').html(),
    flightView: $('#flight-template').html(),
    reservationsView: $('#reservation-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
});
