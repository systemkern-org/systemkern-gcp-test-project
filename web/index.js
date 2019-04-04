const kotlin = require('./systemkern-gcp-test-project.js');
const jsFunc = require('./function.js');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = kotlin.hello() + '<br/>' +
        'Pushed from Github<br>' +
        'req.query.message: ' + req.query.message + '<br>' +
        'req.body.message: ' + req.body.message + '<br>' +
        'jsFunc: ' + jsFunc() + '<br/>';

    res.status(200).send(message);
};

