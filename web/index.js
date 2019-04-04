// const kotlin = require('./kotlin');
// const testModule = require('./systekern-gcp-function-test-project');
const fs = require('fs');
const sayHi = require('./sayHi.js');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    fs.readdir(__dirname, (err, files) => {
        let message = 'Hello Javascript World! Pushed from Github<br>' +
            'Hopefully with Kotlin ;-)<br>' +
            'req.query.message: ' + req.query.message + '<br>' +
            'req.body.message: ' + req.body.message + '<br>' +
            'files: ' + files + '<br/>' +
            '<br/>';
        res.status(200).send(message);
    });
};

