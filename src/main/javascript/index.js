const kotlin = require('./kotlin.js');
const custom = require('./systemkern-gcp-test-project.js');
const jsFunc = require('./function.js');

//endpoint this has to be correlated with cloudbuild.yml
exports.procRequest = (req, res) => {
    custom.processRequest(req, res);
};

exports.procBody = (req, res) => {
    let response = custom.processBody(req.body);
    res.status(response.code).send(response.message)
};

