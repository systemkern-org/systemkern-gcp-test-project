if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'systemkern-gcp-test-project'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'systemkern-gcp-test-project'.");
}
this['systemkern-gcp-test-project'] = function (_, Kotlin) {
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
}(typeof this['systemkern-gcp-test-project'] === 'undefined' ? {} : this['systemkern-gcp-test-project'], kotlin);
