var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function () {
    console.log('index reached');
  }
});


