var $ = require('jquery');
var _ = require('underscore');
var Parse = require('parse').Parse; 

require('backbone');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/clean-blog.css');

//var config = require('./config');
var Router = require('./router');

var containerTpl = require('./templates/container.hbs');

var app = {
	init: function () {

		Parse.initialize(
			//app ID
			'IRBLZAHv1xbYSmYxRHtUBvqJNKwzMQyyV1g7csiD',
			// JS Key
			'qs5zS5o45UFwV3iTG8ayjpmA8gjr7IoTNDtajktH'
		);

		$('body').append(containerTpl({
			site_name: 'This is the site name',
			routes: [{
				url: '/',
				name: 'Home'
			},
			{
				url: '/cats',
				name: 'Cats'
			},
			{
				url: '/test',
				name: 'Test'
			}],
			footer: '(c) 2015 Your name'
		}));

		this.router = new Router();
		
		Backbone.history.start({
			pushState: true
		});

		
	}

};

$(function () {
	app.init();
});