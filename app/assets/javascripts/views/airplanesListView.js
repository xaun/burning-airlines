var app = app || {};

app.AirplanesListView = Backbone.View.extend({
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
    var airplanesListView = Handlebars.compile(app.templates.airplanesListView);
    this.$el.html( airplanesListView({airplanes: app.airplanes.toJSON()}) );
    this.$el.attr('id', 'airplanes-list-view');
    $('#content').append( this.el );
  }
})
