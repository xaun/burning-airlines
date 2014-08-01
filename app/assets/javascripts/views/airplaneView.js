var app = app || {};

app.AirplaneView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button': 'createAirplane'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var airplaneView = Handlebars.compile(app.templates.airplaneView);
    this.$el.html( airplaneView );
    this.$el.attr('id', 'airplane-view');
    $('#content').html(this.el);
  },

  createAirplane: function () {
    event.preventDefault();
    var newPlane = new app.Airplane( {name: $('#name').val(), row: $('#row').val(), column: $('#column').val()} );
    newPlane.save();
    app.airplanes.add(newPlane);
    app.router.navigate('airplanes/list', true);
  }

});
