var app = app || {};

app.SeatsView = Backbone.View.extend({
  tagName: 'div',

  initialize: function (options) {
    this.row = options.row;
    this.column = options.column;
  },

  render: function () {
    var seatView = Handlebars.compile(app.templates.seatView);

    this.$el.append( seatView({row: this.row, column: this.column}) );
    this.$el.addClass('seat');
    $('#seat-grid').append(this.el);
  }

});
