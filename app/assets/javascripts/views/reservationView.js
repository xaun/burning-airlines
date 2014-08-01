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
    var flight_id = $('#flight-selection').val();
    debugger;
    var airplane_id = app.flights.models[flight_id].get('airplane_id');
    var current_airplane = app.airplanes.models[airplane_id];
    var rows = current_airplane.get('rows');
    var columns = current_airplane.get('columns');
    console.log(rows)
    console.log(columns)


  }



});
