var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  defaults: {
    name: 'Unnamed',
    rows: 1,
    columns: 1
  }
});
