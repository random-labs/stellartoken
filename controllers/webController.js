var Transaction = require('../models/transaction');
var accountController = require('../controllers/accountController')
exports.register = function(req, res, next) {
    res.render('register', {title: 'Wpay tokens', email: req.params.email});
}

exports.register_post = function(req, res, next) {
    var transaction = new Transaction({
        email: req.body.email,
        xlm: req.body.xlm,
        secret_key: req.body.secret_key
    });
    transaction.save(function(err) {
        if (err) {return next(err);}
        res.redirect(transaction.url);
    });
}

exports.detail = function(req, res, next) {
    Transaction.findById(req.params.id)
    .exec(function(err, transaction){
        res.render('detail', {title: "Transaction detail", transaction: transaction});
    });   
}