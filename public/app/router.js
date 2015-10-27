var HomeView = require('./views/home');
var CatsView = require('./views/cats');
var TestView = require('./views/test');


module.exports = Backbone.Router.extend({
	routes: {
		'': function () {
			appendView(new HomeView().render());
		},

		'cats': function () {
			appendView(new CatsView().render());
		},

		'test': function () {
			appendView(new TestView().render());
		}
	}
});

function appendView(view) {
	$('.main')
		.empty()
		.append(view.$el);
}