var app = app || {};

app.FlightsListView = Backbone.View.extend({
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
    var flightsListView = Handlebars.compile(app.templates.flightsListView);
    this.$el.html( flightsListView({flights: app.flights.toJSON()}) );
    this.$el.attr('id', 'flights-list-view');
    $('#content').append( this.el );
  }
})
