const kotlin = require('./kotlin.js');
const custom = require('./systemkern-gcp-test-project.js');
const jsFunc = require('./function.js');

//endpoint this has to be correlated with cloudbuild.yml
exports.procRequest = (req, res) => {
    custom.processRequest(req, res);
};
exports.procBody = (req, res) => {
    let message = custom.processBody(req.body);
    res.status(200).send(message)
};

