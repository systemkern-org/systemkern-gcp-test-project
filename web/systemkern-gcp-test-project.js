const kotlin = require('./kotlin.js');
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'systemkern-gcp-test-project'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'systemkern-gcp-test-project'.");
}
module.exports = this['systemkern-gcp-test-project'] = function (_, Kotlin) {
  'use strict';
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  function hello() {
    return 'Hello Kotlin World';
  }
  function processRequest(req, res) {
    var message = trimMargin('\n' + '        |Pushed from Github<br>' + '\n' + '        |req.query.message: ' + req.query.message.toString() + '<br>' + '\n' + '        |req.body.message: ' + req.body.message.toString() + '<br>' + '\n' + '    ');
    res.status(200).send(message);

  }
  _.hello = hello;
  _.processRequest_wn2jw4$ = processRequest;
  Kotlin.defineModule('systemkern-gcp-test-project', _);
  return _;
}(typeof this['systemkern-gcp-test-project'] === 'undefined' ? {} : this['systemkern-gcp-test-project'], kotlin);
