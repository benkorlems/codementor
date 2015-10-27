var tpl = require('../templates/test.hbs');
var _ = require('underscore');

var Parse = require('parse').Parse;
var addCat = require("./addCat.js");


module.exports = Backbone.View.extend({
  events: {
    'click .add-cat': 'onClickAddCat',
    'click li': 'catProfile'
  },

  render: function () {
    var self = this;

    if (!this.test) {
      var test = Parse.Object.extend('test');
        (new Parse.Query('test'))
        .find()
        .then(function(data){
         //console.log(data.toJSON());
          self.test = _.invoke(data, 'toJSON');
         //console.log(self.test);
         self.render();
        });
      return this;
    }
    
    var data = {
      tests: self.test
    };

    this.$el.html(
      tpl(data)
    );
	
	//console.log(addCat); subView


    //jQuery stuff goes here
    
    return this;
  },

  onClickAddCat: function () {
    addCat.render();
  }

});