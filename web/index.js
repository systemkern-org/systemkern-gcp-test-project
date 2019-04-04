// const kotlin = require('./kotlin');
// const testModule = require('./systekern-gcp-function-test-project');
const fs = require('fs');
const kotlin = require('./kotlin.js');
//const custom = require('./systemkern-gcp-test-project.js');
const sayHi = require('./sayHi.js');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    fs.readdir(__dirname, (err, files) => {
        var kot = "";
        try {
            //       kot = hello()
        } catch (e) {
            kot = "Error"
        }

        let message = 'Hello Javascript World!<br>Pushed from Github<br>' +
            'Hopefully with Kotlin ;-)<br>' +
            'req.query.message: ' + req.query.message + '<br>' +
            'req.body.message: ' + req.body.message + '<br>' +
            'files: ' + files + '<br/>' +
            'sayHi: ' + sayHi() + '<br/> +' +
            //            'Kotlin: ' + kot + '<br/>';
            //            'kotlin Hello: ' + _.hello() + '<br/>';

        res.status(200).send(message);
    });
};

