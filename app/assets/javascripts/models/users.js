var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: '/users',
  defaults: {
    name: 'Noname'
  }
});

// newUser = new app.User({name: $('#name').val()});

