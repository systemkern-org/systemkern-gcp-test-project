const kotlin = require('./kotlin.js');
const custom = require('./systemkern-gcp-test-project.js');
const jsFunc = require('./function.js');

//hello world endpoint this has to be correlated with cloudbuild.yml
exports.helloWorld = (req, res) => {
    custom.processRequest(req, res);
};

