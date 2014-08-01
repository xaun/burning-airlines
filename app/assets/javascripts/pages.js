$(document).ready(function () {

  app.templates = {
    userView: $('#user-template').html(),
    usersListView: $('#users-list-template').html(),
    airplaneView: $('#airplane-template').html(),
    airplanesListView: $('#airplanes-list-template').html(),
    flightView: $('#flight-template').html(),
    flightsListView: $('#flights-list-template').html(),
    reservationView: $('#reservation-template').html(),
    seatView: $('#seats-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
});
