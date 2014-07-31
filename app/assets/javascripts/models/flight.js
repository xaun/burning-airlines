var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    name: 'Noname',
    origin_date: '1996-12-19T16:39:57-08:00',
    destination_date: '1996-12-19T16:39:57-08:00',
    origin: 'default',
    destination: 'default',
    airplane_id: '0'
    }
});

// newUser = new app.User({name: $('#name').val()});
