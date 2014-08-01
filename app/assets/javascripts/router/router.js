var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'users/create': 'createUser',
    'users/list': 'viewUsers',
    'airplanes/create': 'createAirplane',
    'airplanes/list': 'viewAirplanes',
    'flights/create': 'createFlights',
    'flights/list': 'viewFlights',
    'reservations/create': 'createReservations',
    // 'reservations/list': 'viewReservations'
  },

  initialize: function () {
    app.users = new app.Users();
    app.users.fetch();

    app.airplanes = new app.Airplanes();
    app.airplanes.fetch();

    app.flights = new app.Flights();
    app.flights.fetch();

    app.reservations = new app.Reservations();
    app.reservations.fetch();
  },

  index: function () {
    var appView = new app.AppView()
    appView.render();
  },

  createUser: function () {
    var userView = new app.UserView();
    userView.render();
  },

  viewUsers: function () {
    var usersListView = new app.UsersListView();
    usersListView.render();
  },

  createAirplane: function () {
    var airplaneView = new app.AirplaneView();
    airplaneView.render();
  },

  viewAirplanes: function () {
    var airplanesListView = new app.AirplanesListView();
    airplanesListView.render();
  },

  createFlights: function () {
    var flightView = new app.FlightView();
    flightView.render();
  },

  viewFlights: function () {

    var flightsListView = new app.FlightsListView();
    flightsListView.render();
  },

  createReservations: function () {
    var reservationView = new app.ReservationView();
    reservationView.render();
  },

  viewReservations: function () {

  }
});


