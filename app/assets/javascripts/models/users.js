var app = app || {};

app.User = Backbone.Model.extend({
  // url: '/users'
  defaults: {
    id: 0,
    name: 'Name?'
  }
});

// newUser = new app.User({name: $('#name').val()});