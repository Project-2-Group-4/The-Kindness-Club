var exports = module.exports = {};
 
exports.register = function(req, res) {
    res.render('register');
}
exports.signin = function(req, res) {
    res.render('signin');
}
exports.home = function(req, res) {
    res.render('home');
}
exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}