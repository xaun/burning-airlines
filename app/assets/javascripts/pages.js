$(document).ready(function () {

  app.templates = {
    userView: $('#user-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
});
