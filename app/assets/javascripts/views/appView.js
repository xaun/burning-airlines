var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',

  events: {
    'click #create-user': 'createUser'
  },

  initialize: function () {
    console.log('initialize.appView');
  },

  render: function () {
    console.log('render.appView');
    // this.$el.html( app.templates.addView );
  },

  createUser: function () {
    var userView = new app.UserView();
    userView.render();

  }

});

