var IconItemViewTemplate =
    "<img id='#<%-id%>' src='<%-uri%>' style='width:<%-w%>; height:<%-h%>;left:<%-x%>;top:<%-y%>;'>";

var IconItemView = Backbone.Marionette.ItemView.extend({
    tagName: 'div',
    template: _.template(IconItemViewTemplate),
    className: 'icon',
    initialize: function (args) {
        this.model  = args.model;
        this.width  = args.width;
        this.height = args.height;
    },
    serializeData: function () {
        return {
            x: this.model.get('x'),
            y: this.model.get('y'),
            uri: this.model.get('uri'),
            w: '100%',
            h: '100%',
            id: this.model.get('id')
        };
    }



});