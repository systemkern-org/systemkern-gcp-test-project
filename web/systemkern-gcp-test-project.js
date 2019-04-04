const kotlin = require('./kotlin.js');

(function (_, Kotlin) {
  'use strict';
  function hello() {
    return 'Hello Kotlin World';
  }
  function hello2(req, res) {
  }
  _.hello = hello;
  _.hello2_wn2jw4$ = hello2;
  Kotlin.defineModule('systemkern-gcp-test-project', _);
  return _;
}(module.exports, require('kotlin')));
