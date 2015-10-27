var tpl = require('../templates/catProfile.hbs');
var _ = require('underscore');

var Parse = require('parse').Parse;

module.exports = Backbone.View.extend({

	initialize: function(opts){
		this.cat = opts.cat;
		//console.log(opts)
	},

	render: function(){
		console.log(this.$el);
		this.$el.html(tpl(this.cat));
	   	 	
	}
})