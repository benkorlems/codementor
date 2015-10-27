var tpl = require('../templates/cats.hbs');
var _ = require('underscore');

var Parse = require('parse').Parse;
var catProfileView = require('./catProfile.js');

module.exports = Backbone.View.extend({
  events: {
    'click .addCat-btn': 'viewCatProfile',
    'click li': 'viewCatProfile'
  },

  render: function (){
    var self = this;

    if (!this.cats) {
      var Cats = Parse.Object.extend('test');
        (new Parse.Query('test'))
        .find()
        .then(function(data){
          self.cats = _.invoke(data, 'toJSON');
          console.log(self.cats);
          self.render();
        });
      return this;
    }

    var data = {
      cats: self.cats
    };

    this.$el.html(
      tpl(data)
    );

    //jQuery stuff goes here
    //SubViews
   
    return this;
  },

  viewCatProfile: function (e) {
    var id = ($(e.target).data('id'));
    var cat =  _.findWhere(this.cats, {
     		objectId: id
     	});
     this.catProfile = new catProfileView({
     	cat: cat,
     	el: this.$('.cats-profile')
    }).render();
  }
});