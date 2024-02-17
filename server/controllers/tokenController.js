const tokenController = {};

tokenController.createToken = (req, res, next) => {
    return next();
}

tokenController.authenticateToken = (req, res, next) => {
    return next();
}

// Export tokenController
module.exports = tokenController;