var authController = require('../controllers/authcontroller.js');
var db = require("../models");

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);

    app.get('/signin', passport.authenticate("local"), authController.signin);

    app.post('/signup', function (req, res) {
        db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        })
            .then(function () {
                res.redirect(307, "/signin");
            })
            .catch(function (err) {
                res.status(401).json(err);
            })
    });

    // app.get('/dashboard',isLoggedIn, authController.dashboard);

    // function isLoggedIn(req, res, next) {
    //     if (req.isAuthenticated())

    //         return next();

    //     res.redirect('/signin');
    // }

}