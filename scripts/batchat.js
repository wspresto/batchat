
var Batchat = new Backbone.Marionette.Application();

//regions
Batchat.map = new Backbone.Marionette.Region({el : '#mapRegion'});
Batchat.menu = new Backbone.Marionette.Region({el : '#menuRegion'});

//idk
Batchat.addInitializer( function () {
    this.router = new Router();
    Backbone.history.start();
});

//fetch server models if any
Batchat.icons = new Icons();

//TODO: fetch all the models and set the collection
var models = [];
models.push(new Icon({
    uri: '/img/arty.png',
    id: 'static-arty'
}));
models.push(new Icon({
    uri: '/img/infantry.png',
    id: 'static-infantry'

}));
models.push(new Icon({
    uri: '/img/mg.png',
    id: 'static-mg'
}));
models.push(new Icon({
    uri: '/img/tank.png',
    id: 'static-tank'
}));
Batchat.icons.set(models);

//begin
$(document).ready( function () {
    Batchat.start();
});
