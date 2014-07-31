var app = app || {};

app.UserView = Backbone.View.extend({
  el: '#content',

  initialize: function () {

  },

  render: function () {
    var userView = Handlebars.compile(app.templates.userView);
    this.$el.html( userView );
  }

});
