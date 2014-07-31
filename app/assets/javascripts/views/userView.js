var app = app || {};

app.UserView = Backbone.View.extend({
  el: '#content',

  events: {
    'click button': 'createUser'
  },

  initialize: function () {

  },

  render: function () {
    var userView = Handlebars.compile(app.templates.userView);
    this.$el.html( userView );
  },

  createUser: function () {
    var newUser = new app.User({name: $('#name').val()});
    newUser.save();
  }

});
