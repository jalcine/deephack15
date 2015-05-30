module.exports = {
	create: function(args, callback) {
		var myUser = { email: args.email, pwhash: args.pwhash };
		callback(null,myUser);
	}
};

