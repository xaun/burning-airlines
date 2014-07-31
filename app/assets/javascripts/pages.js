$(document).ready(function () {

  app.templates = {
    flightView: $('#flightsTemplate').html()
  }

  app.router = new app.Router();
  Backbone.history.start();


});
