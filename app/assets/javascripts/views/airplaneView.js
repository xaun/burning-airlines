var app = app || {};

app.AirplaneView = Backbone.View.extend({
  el: '#content',

  events: {
    'click button': 'createAirplane'
  },

  initialize: function () {

  },

  render: function () {
    var airplaneView = Handlebars.compile(app.templates.airplaneView);
    this.$el.html( airplaneView );
  },

  createAirplane: function () {
    var newPlane = new app.Airplane( {name: $('#name').val(), row: $('#row').val(), column: $('#column').val()} );
    newPlane.save();
  }

});
