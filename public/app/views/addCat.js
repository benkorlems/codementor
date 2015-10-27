var tpl = require('../templates/addCat.hbs');
var _ = require('underscore');

var Parse = require('parse').Parse;

module.exports = Backbone.View.extend({

	render: function(){
		var self = this;
			this.$el.html(
	     	 	tpl(data)
	   	 	);
	}
})