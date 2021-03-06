var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click .seat': 'createReservation',
    'change #flight-selection': 'createSeats'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var reservationView = Handlebars.compile(app.templates.reservationView);
    this.$el.html( reservationView({users: app.users.toJSON(), flights: app.flights.toJSON(), airplanes: app.airplanes.toJSON()}) );
    this.$el.attr('id', 'reservation-view');
    $('#content').html(this.el);

     // var airplanes = reservationView( this.model );
  },

  createReservation: function (event) {
    console.log(event.target);
      $(event.target).addClass('booked');
      console.log('NO REFUNDS!');
      var string = $(event.target).text();
      var row = string[4];
      var column = string[0];
      var newReservation = new app.Reservation({user_id: $('#user-selection').val(), flight_id: $('#flight-selection').val(), row: row, column: column});
      newReservation.save();
      app.reservations.add(newReservation);
  },

  createSeats: function () {
    var id_of_flight = $('#flight-selection').val();
    var airplane_id = app.flights.findWhere({id: parseInt(id_of_flight)}).get('airplane_id');
    var current_airplane = app.airplanes.findWhere({id: parseInt(airplane_id)});
    var rows = current_airplane.get('rows');
    var columns = current_airplane.get('columns');
    console.log(rows);
    console.log(columns);
    $('#seat-grid').empty();
    for (var i = 1; i <= rows; i++) {
      for (var j = 1; j <= columns; j++) {
        var seat = new app.SeatsView({row: i, column: j});
        seat.render();
      }
    }
  }
});
