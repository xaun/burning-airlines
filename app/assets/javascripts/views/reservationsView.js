var app = app || {};

app.ReservationsView = Backbone.View.extend({
  el: '#content',

  events: {
    'click button': 'createReservation'
  },

  initialize: function () {

  },

  render: function () {
    var reservationsView = Handlebars.compile(app.templates.reservationsView);
    this.$el.html( reservationsView );
  },

  createReservation: function () {
    var newReservation = new app.Reservation({})
  }

});
