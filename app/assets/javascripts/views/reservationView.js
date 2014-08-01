var app = app || {};

app.ReservationsView = Backbone.View.extend({
  tagName: 'div',

  events: {
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var reservationsView = Handlebars.compile(app.templates.reservationsView);
    this.$el.html( reservationsView );
  },

  createReservation: function () {
  }

});
