var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#content',

  initialize: function () {

  },

  render: function () {
    var flightView = Handlebars.compile(app.templates.flightView);
    this.$el.html( flightView );
  }

});
