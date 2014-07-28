//this collection view shows the icons in the menu of the web app
var MenuIconsCollectionTemplate =
    "<a id='exit-btn'>=</a><a id='orders-btn'>Give Orders</a>" +
    "<div id='menu-icon-region'>" +
        "</div>" +
        "<a>Get Orders</a>";

var MenuIconsCompositeView = Backbone.Marionette.CompositeView.extend({
    template : _.template(MenuIconsCollectionTemplate),
    childViewContainer: '#menu-icon-region',
    childView: IconItemView,
    initialize: function (args) {
        this.collection = args.icons || new Icons();
    },
    childViewOptions: {
        className : 'menu-icon'
    }

});