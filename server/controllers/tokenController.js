const tokenController = {};

// Create a token
tokenController.createToken = (req, res, next) => {
    return next();
}

// Verify the token
tokenController.authenticateToken = (req, res, next) => {
    return next();
}

// Export tokenController
module.exports = tokenController;