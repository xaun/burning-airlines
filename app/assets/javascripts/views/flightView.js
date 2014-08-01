var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button': 'createFlight'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var flightView = Handlebars.compile(app.templates.flightView);
    this.$el.html( flightView({airplanes: app.airplanes.toJSON()}) );
    this.$el.attr('id', 'flight-view');
    $('#content').html(this.el);
  },

  createFlight: function () {
    event.preventDefault();
    var newFlight = new app.Flight({name: $('#name').val(), airplane_id: $('#airplane-selection').val(), origin: $('#origin').val(), destination: $('#destination').val(), origin_date: $('#origin_date').val(), destination_date: $('#destination_date').val()});
    console.log(newFlight);
    newFlight.save();
    app.flights.add(newFlight);
  }

});
