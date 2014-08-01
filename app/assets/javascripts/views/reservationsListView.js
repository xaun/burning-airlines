//// This view is intended for the Itinerary view
//// There is no template at this point.

// var app = app || {};

// app.ReservationsListView = Backbone.View.extend({
//   tagName: 'div',

//   events: {

//   },

//   initialize: function () {
//     if (app.currentView) {
//       app.currentView.remove();
//     }
//     app.currentView = this;
//   },

//   render: function () {
//     var reservationsListView = Handlebars.compile(app.templates.reservationsListView);

//     // Trying to build a custom object to make available to the reservations-list-template.
//     var parameters = {
//       origin:
//       destination:
//       seat:
//       flight_name:
//     }

//     this.$el.html( reservationsListView( parameters ) );
//     this.$el.attr('id', 'reservations-list-view');
//     $('#content').append( this.el );
//   }
// });

