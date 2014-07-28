
var Icon = Backbone.Model.extend({
    defaults : {
        x   : '0',
        y   : '0',
        uri : '/img/hochwald_gap.jpg'
    },
    urlRoot: '/icon-positions/',
    move: function (pt) {
        this.x = pt.x;
        this.y = pt.y;
    }

});