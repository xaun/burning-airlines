var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#content',

  events: {
    'click button': 'createFlight'
  },

  initialize: function () {
    // Trying to fetch from database when initializing flightView.
    // console.log('flightView initialized');
    // app.airplanes = new app.Airplanes();
    // app.airplanes.fetch().done(function () {
    //   Backbone.history.start();
    // });
  },

  render: function () {
    var flightView = Handlebars.compile(app.templates.flightView);
    this.$el.html( flightView );
  },

  createFlight: function () {
    var newFlight = new app.Flight({airplane_id: $('#airplane').val(), origin: $('#origin').val(), destination: $('#destination').val(), origin_date: $('#origin_date').val(), destination_date: $('#destination_date').val()});
    newFlight.save();
  }

});
