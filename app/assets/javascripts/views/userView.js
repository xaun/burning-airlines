var app = app || {};

app.UserView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button': 'createUser'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var userView = Handlebars.compile(app.templates.userView);
    this.$el.html( userView );
    this.$el.attr('id', 'user-view');
    $('#content').html(this.el);
  },

  createUser: function () {
    // stops the form from submitting params with the button.
    event.preventDefault();
    // saves to the rails database
    var newUser = new app.User({name: $('#name').val()});
    newUser.save();
    // adds to the backbone memory (browser)
    app.users.add(newUser);
    // Send view to a users list
    // app.navigate("users/list", true);
  }

});
