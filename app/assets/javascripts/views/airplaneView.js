var app = app || {};

app.AirplaneView = Backbone.View.extend({
  el: '#content',

  initialize: function () {

  },

  render: function () {
    var airplaneView = Handlebars.compile(app.templates.airplaneView);
    this.$el.html( airplaneView );
  }

});
