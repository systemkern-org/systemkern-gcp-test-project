const kotlin = require('./kotlin.js');
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'systemkern-gcp-test-project'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'systemkern-gcp-test-project'.");
}
module.exports = this['systemkern-gcp-test-project'] = function (_, Kotlin) {
  'use strict';
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
    var Kind_CLASS = Kotlin.Kind.CLASS;
  function processRequest(req, res) {
      var message = trimMargin('\n' + '        |Pushed from Github<br>' + '\n' + '        |req:               ' + req.toString() + '<br>' + '\n' + '        |req.query:         ' + req.query.toString() + '<br>' + '\n' + '        |req.body:          ' + req.body.toString() + '<br>' + '\n' + '    ');
    res.status(200).send(message);
  }

    function processBody(body) {
        return new Response(200, trimMargin('\n' + '        |Pushed from Github<br>' + '\n' + '        |body: ' + body + '\n' + '        '));
    }

    function Response(code, message) {
        if (code === void 0)
            code = 0;
        if (message === void 0)
            message = '';
        this.code = code;
        this.message = message;
    }

    Response.$metadata$ = {
        kind: Kind_CLASS,
        simpleName: 'Response',
        interfaces: []
    };
    Response.prototype.component1 = function () {
        return this.code;
    };
    Response.prototype.component2 = function () {
        return this.message;
    };
    Response.prototype.copy_19mbxw$ = function (code, message) {
        return new Response(code === void 0 ? this.code : code, message === void 0 ? this.message : message);
    };
    Response.prototype.toString = function () {
        return 'Response(code=' + Kotlin.toString(this.code) + (', message=' + Kotlin.toString(this.message)) + ')';
    };
    Response.prototype.hashCode = function () {
        var result = 0;
        result = result * 31 + Kotlin.hashCode(this.code) | 0;
        result = result * 31 + Kotlin.hashCode(this.message) | 0;
        return result;
    };
    Response.prototype.equals = function (other) {
        return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.message, other.message)))));
    };
  _.processRequest = processRequest;
    _.processBody = processBody;
    _.Response = Response;
  Kotlin.defineModule('systemkern-gcp-test-project', _);
  return _;
}(typeof this['systemkern-gcp-test-project'] === 'undefined' ? {} : this['systemkern-gcp-test-project'], kotlin);
