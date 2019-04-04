// const kotlin = require('./kotlin');
// const testModule = require('./systekern-gcp-function-test-project');
const jsfunc = require('./additionalJSFunctions.js');
const kotlin = require('./kotlin.js');
const custom = require('./systemkern-gcp-test-project.js');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = 'Hello Javascript World!<br>Pushed from Github<br>' +
        'Not yet with Kotlin :-(<br>' +
        'But added the Includes:-)<br>' +
        'req.query.message: ' + req.query.message + '<br>' +
        'req.body.message: ' + req.body.message + '<br>' +
        'sayHi: ' + sayHi() + '<br/>' +
        'kotlin Hello: ' + hello() + '<br/>';

    res.status(200).send(message);
};

