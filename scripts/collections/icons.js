var Icons = Backbone.Collection.extend({
    save: function () {
        _.each(this, function (icon) {
            icon.save();
        })
    }
});