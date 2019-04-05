const kotlin = require('./kotlin.js');
const serial = require('./kotlinx-serialization-runtime-js.js');
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'systemkern-gcp-test-project'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'systemkern-gcp-test-project'.");
}
module.exports = this['systemkern-gcp-test-project'] = function (_, Kotlin) {
  'use strict';
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function processRequest(req, res) {
    var str = req.body.message;
    var message = trimMargin('\n' + '        |Kotlin Response:                       <br>' + '\\' + 'n' + '\n' + '        |req:               ' + req.toString() + '                <br>' + '\\' + 'n' + '\n' + '        |req.query:         ' + req.query.toString() + '        <br>' + '\\' + 'n' + '\n' + '        |req.body:          ' + req.body.toString() + '         <br>' + '\\' + 'n' + '\n' + '        |req.body.message:  ' + req.body.message.toString() + ' <br>' + '\\' + 'n' + '\n' + '        |kotlin String:     ' + str + '                <br>' + '\\' + 'n' + '\n' + '    ');
    res.status(200).send(message);
  }
  function processBody(body) {
    var tmp$;
    try {
      tmp$ = JSON.parse(body);
    }
     catch (e) {
      return new Response(trimMargin('\n' + '            |body:  ' + body + '       <br>' + '\\' + 'n' + '\n' + '            |error: ' + e.toString() + '          <br>' + '\\' + 'n' + '\n' + '        '));
    }
    var tmp = tmp$;
    return new Response(trimMargin('\n' + '        |Kotlin Response:   <br>' + '\\' + 'n' + '\n' + '        |data: ' + body + '        <br>' + '\\' + 'n' + '\n' + '        '));
  }
  function Response(message, code) {
    if (message === void 0)
      message = '';
    if (code === void 0)
      code = 200;
    this.message = message;
    this.code = code;
  }
  Response.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Response',
    interfaces: []
  };
  Response.prototype.component1 = function () {
    return this.message;
  };
  Response.prototype.component2 = function () {
    return this.code;
  };
  Response.prototype.copy_bm4lxs$ = function (message, code) {
    return new Response(message === void 0 ? this.message : message, code === void 0 ? this.code : code);
  };
  Response.prototype.toString = function () {
    return 'Response(message=' + Kotlin.toString(this.message) + (', code=' + Kotlin.toString(this.code)) + ')';
  };
  Response.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  Response.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.message, other.message) && Kotlin.equals(this.code, other.code)))));
  };
  function TestBody(message) {
    this.message = message;
  }
  TestBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestBody',
    interfaces: []
  };
  TestBody.prototype.component1 = function () {
    return this.message;
  };
  TestBody.prototype.copy_61zpoe$ = function (message) {
    return new TestBody(message === void 0 ? this.message : message);
  };
  TestBody.prototype.toString = function () {
    return 'TestBody(message=' + Kotlin.toString(this.message) + ')';
  };
  TestBody.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  TestBody.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  _.processRequest = processRequest;
  _.processBody = processBody;
  _.Response = Response;
  _.TestBody = TestBody;
  Kotlin.defineModule('systemkern-gcp-test-project', _);
  return _;
}(typeof this['systemkern-gcp-test-project'] === 'undefined' ? {} : this['systemkern-gcp-test-project'], kotlin);
