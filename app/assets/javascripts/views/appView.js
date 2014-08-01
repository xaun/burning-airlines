var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',

  events: {
  },

  initialize: function () {

  },

  render: function () {

  },

  //
  createUser: function () {
    app.router.navigate("users/create", true);
  },

  createAirplane: function () {
    app.router.navigate("airplanes/create", true);
  },

  createFlight: function () {
    app.router.navigate("flights/create", true);
  },

  createReservation: function () {
    app.router.navigate("reservations/create", true)
  }

});

