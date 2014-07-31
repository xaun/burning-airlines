var app = app || {};

app.ReservationsView = Backbone.View.extend({
  el: '#content',

  initialize: function () {

  },

  render: function () {
    var reservationsView = Handlebars.compile(app.templates.reservationsView);
    this.$el.html( reservationsView );
  }

});
