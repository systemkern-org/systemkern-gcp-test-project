// const kotlin = require('./kotlin');
// const testModule = require('./systekern-gcp-function-test-project');
const fs = require('fs');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    var dir = "";
    fs.readdir(__dirname, (err, files) => {
        if (err) {
        } else {
            dir = files;
            console.log('Files', files);
            res.sendStatus(200);
        }
    });

    let message = 'Hello Javascript World! Pushed from Github<br>' +
        'Hopefully with Kotlin ;-)<br>' +
        'req.query.message: ' + req.query.message + '<br>' +
        'req.body.message: ' + req.body.message + '<br>' +
        'files: ' + dir + '<br/>';

    res.status(200).send(message);
};

