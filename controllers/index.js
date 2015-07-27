var Person = require('../models/person.js');

var indexController = {
	index: function(req, res) {
		Person.find({}, function(err, documents){
			res.render('index', {characters : documents});
		});
		// console.log('hello');
		// ...
	},

	createHero : function(req, res){

		// Access form data from body
		// req.body

		var hero = {
			name : req.body.name,
			costume : req.body.costume,
			catchPhrase : req.body.catchPhrase,
			powers : req.body.powers.split(', ')
		}
		// Create new Person
		var newHero = new Person(hero);

		// Save that Person
		newHero.save(function(err, doc){
			res.redirect('/');
		});
	}
};

module.exports = indexController;