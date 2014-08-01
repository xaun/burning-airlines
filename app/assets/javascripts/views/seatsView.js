var app = app || {};

app.SeatsView = Backbone.View.extend({
  tagName: 'div',

  initialize: function () {
    if (app.currentSeatsView) {
      app.currentSeatsView.remove();
    }
    app.currentSeatsView = this;
  },

  render: function () {
    var seatView = Handlebars.compile(app.templates.seatView);
    this.$el.html( seatView({flights: app.flights.toJSON(), airplanes: app.airplanes.toJSON()}) );
    this.$el.attr('id', 'seats-view');
    $('#seat-grid').html(this.el);
  }

});
