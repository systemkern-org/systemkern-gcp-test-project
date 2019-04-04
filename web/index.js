const functions = require('./kotlin');
const functions = require('./systekern-gcp-function-test-project');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = req.query.message
        || req.body.message
        || 'Hello Javascript World! Pushed from Github';
    res.status(200).send(message);
};
