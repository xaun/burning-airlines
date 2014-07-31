var app = app || {};

app.FlightView = Backbone.View.extend({

  el: '#main',

  events: {
    'click #bookFlight-button': 'render'
  },

  render: function () {
    console.log('render')
    this.$el.html( app.templates.flightView );
  }


});
