//set up the routes
var Router = Backbone.Marionette.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        '' :             'showMap',
        'home':          'showMap'
    }
});