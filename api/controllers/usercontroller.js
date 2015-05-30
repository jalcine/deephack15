var user = require("../models/user");
var bcrypt = require("bcrypt-nodejs");

module.exports = {
	register: function(req, res) {
		user.create({
			email: req.param("email"),
			pwhash: bcrypt.hashSync(req.param("password"))
		}, function(err, user) {
			return err ? res.negotiate(err) : res.ok("hooray");
		});
	}
}

console.log(JSON.stringify(module.exports.register({req: {email: "test@t.com", password: "password"}})));
