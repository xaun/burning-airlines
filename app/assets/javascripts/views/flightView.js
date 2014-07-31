var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',

  events: {
    'click button[id=bookFlight-button]': 'render'
  },

  render: function () {
    this.$el.html( app.templates.flightView );

  }

});