var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#content',

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
  }

});
