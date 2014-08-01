var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button': 'createReservation'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    debugger;
    var reservationView = Handlebars.compile(app.templates.reservationView);
    this.$el.html( reservationView({users: app.users.toJSON(), flights: app.flights.toJSON()}) );

    this.$el.attr('id', 'reservation-view');
    $('#content').html(this.el);
  },

  createReservation: function () {
  }

});
