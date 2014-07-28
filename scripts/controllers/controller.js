//page load methods below
var Controller = Backbone.Marionette.Controller.extend({
   initialize : function () {
   },
   showMap : function () {
       Batchat.menu.show(new MenuIconsCompositeView({
           icons: Batchat.icons
       }));
       var map = new Icon({
           id    : map,
           x: 0,
           y: 0,
           uri: '/img/hochwald_gap.jpg'
       });
       Batchat.map.show(new IconItemView({
           model : map,
           width : '100%',
           height: '100%'
       }));

       /*icon.save();*/
   }
});