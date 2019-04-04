const functions = require('./kotlin');
const functions = require('./systekern-gcp-function-test-project');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = 'Hello Javascript World! Pushed from Github<br>' +
        'Hopefully with Kotlin ;-)<br>' +
        'req.query.message: ' + req.query.message + '<br>' +
        'req.body.message:' + req.body.message + '<br>';
    res.status(200).send(message);
};

