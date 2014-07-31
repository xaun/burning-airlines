var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#content',

  events: {
    'click button': 'createFlight'
  },

  initialize: function () {

  },

  render: function () {
    var flightView = Handlebars.compile(app.templates.flightView);
    this.$el.html( flightView );
  },

  createFlight: function () {
    var newFlight = new app.Flight({airplane: $('#airplane').val(), origin: $('#origin').val(), destination: $('#destination').val(), origin_date: $('#origin_date').val(), destination_date: $('#destination_date').val()});
    console.log(newFlight);
    newFlight.save();
  }

});
