var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {
    user_id: '0',
    airplane_id: '0',
    row: '1',
    column: '1'
    }
});