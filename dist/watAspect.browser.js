var watAspect =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*** IMPORTS FROM imports-loader ***/
	(function () {

	  /**
	   * A library for Aspect Oriented Programming (AOP) in javascript.
	   * @file
	   * @module watAspect
	   * @version 0.0.1
	   * @author Jae-Yeop Kim <kseo05com@gmail.com>
	   * @license MIT
	   * @copyright (c) web-uhee.com 2016
	   * @see {@link http://git.web-uhee.com/lib/watAspect|watAspect}
	   */


	  /* import modules - begin */
	  /* import modules - end */

	  /* define custom object type - begin */
	  /* define custom object type - end */

	  /* private methods - begin */
	  var nativeSlice = Array.prototype.slice;

	  /**
	   * Array.prototype.bind method.
	   * @static
	   * @ignore
	   */

	  if (!(typeof nativeSlice === 'function' || nativeSlice == null)) {
	    throw new TypeError("Value of variable \"nativeSlice\" violates contract.\n\nExpected:\nFunction | null\n\nGot:\n" + _inspect(nativeSlice));
	  }

	  var nativeBind = Function.prototype.bind;

	  /**
	   * Javascript Object constructor.
	   * @static
	   * @ignore
	   */

	  if (!(typeof nativeBind === 'function' || nativeBind == null)) {
	    throw new TypeError("Value of variable \"nativeBind\" violates contract.\n\nExpected:\nFunction | null\n\nGot:\n" + _inspect(nativeBind));
	  }

	  function Ctor() {}

	  /**
	   * Same as _.bind.
	   * @param  {Function} func
	   * @param  {any} context
	   * @return {Function=} Bound function.
	   * @static
	   * @private
	   * @ignore
	   */
	  function bind(func, context) {
	    function _ref2(_id2) {
	      if (!(typeof _id2 === 'function' || _id2 == null)) {
	        throw new TypeError("Function \"bind\" return value violates contract.\n\nExpected:\nFunction | null\n\nGot:\n" + _inspect(_id2));
	      }

	      return _id2;
	    }

	    if (!(typeof func === 'function')) {
	      throw new TypeError("Value of argument \"func\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(func));
	    }

	    var _bound;

	    if (!(typeof _bound === 'function' || _bound == null)) {
	      throw new TypeError("Value of variable \"bound\" violates contract.\n\nExpected:\nFunction | null\n\nGot:\n" + _inspect(_bound));
	    }

	    if (nativeBind && func.bind === nativeBind) {
	      return _ref2(nativeBind.apply(func, nativeSlice.call(arguments, 1)));
	    }
	    var args = nativeSlice.call(arguments, 2);

	    if (!Array.isArray(args)) {
	      throw new TypeError("Value of variable \"args\" violates contract.\n\nExpected:\nArray\n\nGot:\n" + _inspect(args));
	    }

	    return _ref2(_bound = function bound() {
	      function _ref3(_id3) {
	        if (!(typeof _id3 === 'function' || _id3 == null)) {
	          throw new TypeError("Function return value violates contract.\n\nExpected:\nFunction | null\n\nGot:\n" + _inspect(_id3));
	        }

	        return _id3;
	      }

	      if (!(this instanceof _bound)) {
	        return _ref3(func.apply(context || this, args.concat(nativeSlice.call(arguments))));
	      }
	      Ctor.prototype = func.prototype;
	      var self = new Ctor();
	      // TODO result type 검증 필요.

	      if (!(self instanceof Object)) {
	        throw new TypeError("Value of variable \"self\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(self));
	      }

	      var result = func.apply(self, args.concat(nativeSlice.call(arguments)));

	      if (!(typeof result === 'function' || result == null)) {
	        throw new TypeError("Value of variable \"result\" violates contract.\n\nExpected:\nFunction | null\n\nGot:\n" + _inspect(result));
	      }

	      if (Object(result) === result) {
	        return _ref3(result);
	      }
	      return _ref3(self);
	    });

	    if (!(typeof _bound === 'function' || _bound == null)) {
	      throw new TypeError("Value of variable \"bound\" violates contract.\n\nExpected:\nFunction | null\n\nGot:\n" + _inspect(_bound));
	    }
	  }

	  /* private methods - end */

	  /* public methods - begin */
	  /**
	   * An implementation of `before` advice in AOP.
	   * @param {Object} obj Target object.
	   * @param {string} methodName Target method.
	   * @param {Function} advice Advice function.
	   * @param {Object=} context Advice function will be bound to this parameter.
	   * @return {Function} Target function.
	   * @static
	   */
	  function beforeAdvice(obj, methodName, advice, context) {
	    if (!(obj instanceof Object)) {
	      throw new TypeError("Value of argument \"obj\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(obj));
	    }

	    if (!(typeof methodName === 'string')) {
	      throw new TypeError("Value of argument \"methodName\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(methodName));
	    }

	    if (!(typeof advice === 'function')) {
	      throw new TypeError("Value of argument \"advice\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(advice));
	    }

	    if (!(context instanceof Object || context == null)) {
	      throw new TypeError("Value of argument \"context\" violates contract.\n\nExpected:\nObject | null\n\nGot:\n" + _inspect(context));
	    }

	    var originFunc = obj[methodName];

	    if (!(typeof originFunc === 'function')) {
	      throw new TypeError("Value of variable \"originFunc\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(originFunc));
	    }

	    obj[methodName] = function () {
	      advice.apply(context || this, arguments);
	      return originFunc.apply(this, arguments);
	    };

	    return originFunc;
	  }

	  /**
	   * An implementation of `after returning` advice in AOP.
	   * @param {Object} obj Target object.
	   * @param {string} methodName Target method.
	   * @param {Function} advice Advice function.
	   * @param {Object=} context Advice function will be bound to this parameter.
	   * @return {Function} Target function.
	   * @static
	   */
	  function afterReturningAdvice(obj, methodName, advice, context) {
	    if (!(obj instanceof Object)) {
	      throw new TypeError("Value of argument \"obj\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(obj));
	    }

	    if (!(typeof methodName === 'string')) {
	      throw new TypeError("Value of argument \"methodName\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(methodName));
	    }

	    if (!(typeof advice === 'function')) {
	      throw new TypeError("Value of argument \"advice\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(advice));
	    }

	    if (!(context instanceof Object || context == null)) {
	      throw new TypeError("Value of argument \"context\" violates contract.\n\nExpected:\nObject | null\n\nGot:\n" + _inspect(context));
	    }

	    var originFunc = obj[methodName];

	    if (!(typeof originFunc === 'function')) {
	      throw new TypeError("Value of variable \"originFunc\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(originFunc));
	    }

	    obj[methodName] = function () {
	      var result;
	      var args = nativeSlice.call(arguments);

	      if (!Array.isArray(args)) {
	        throw new TypeError("Value of variable \"args\" violates contract.\n\nExpected:\nArray\n\nGot:\n" + _inspect(args));
	      }

	      result = originFunc.apply(this, arguments);
	      args[args.length] = result;
	      advice.apply(context || this, args);
	      return result;
	    };

	    return originFunc;
	  }

	  /**
	   * An implementation of `after throwing` advice in AOP.
	   * @param {Object} obj Target object.
	   * @param {string} methodName Target method.
	   * @param {Function} advice Advice function.
	   * @param {Object=} context Advice function will be bound to this parameter.
	   * @return {Function} Target function.
	   * @static
	   */
	  function afterThrowingAdvice(obj, methodName, advice, context) {
	    if (!(obj instanceof Object)) {
	      throw new TypeError("Value of argument \"obj\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(obj));
	    }

	    if (!(typeof methodName === 'string')) {
	      throw new TypeError("Value of argument \"methodName\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(methodName));
	    }

	    if (!(typeof advice === 'function')) {
	      throw new TypeError("Value of argument \"advice\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(advice));
	    }

	    if (!(context instanceof Object || context == null)) {
	      throw new TypeError("Value of argument \"context\" violates contract.\n\nExpected:\nObject | null\n\nGot:\n" + _inspect(context));
	    }

	    var originFunc = obj[methodName];

	    if (!(typeof originFunc === 'function')) {
	      throw new TypeError("Value of variable \"originFunc\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(originFunc));
	    }

	    obj[methodName] = function () {
	      var args = nativeSlice.call(arguments);

	      if (!Array.isArray(args)) {
	        throw new TypeError("Value of variable \"args\" violates contract.\n\nExpected:\nArray\n\nGot:\n" + _inspect(args));
	      }

	      try {
	        return originFunc.apply(this, arguments);
	      } catch (e) {
	        args[args.length] = e;
	        advice.apply(context || this, args);
	        throw e;
	      }
	    };

	    return originFunc;
	  }

	  /**
	   * An implementation of `after finally` advice in AOP.
	   * @param {Object} obj Target object.
	   * @param {string} methodName Target method.
	   * @param {Function} advice Advice function.
	   * @param {Object=} context Advice function will be bound to this parameter.
	   * @return {Function} Target function.
	   * @static
	   */
	  function afterFinallyAdvice(obj, methodName, advice, context) {
	    if (!(obj instanceof Object)) {
	      throw new TypeError("Value of argument \"obj\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(obj));
	    }

	    if (!(typeof methodName === 'string')) {
	      throw new TypeError("Value of argument \"methodName\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(methodName));
	    }

	    if (!(typeof advice === 'function')) {
	      throw new TypeError("Value of argument \"advice\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(advice));
	    }

	    if (!(context instanceof Object || context == null)) {
	      throw new TypeError("Value of argument \"context\" violates contract.\n\nExpected:\nObject | null\n\nGot:\n" + _inspect(context));
	    }

	    var originFunc = obj[methodName];

	    if (!(typeof originFunc === 'function')) {
	      throw new TypeError("Value of variable \"originFunc\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(originFunc));
	    }

	    obj[methodName] = function () {
	      var result;
	      var args = nativeSlice.call(arguments);

	      if (!Array.isArray(args)) {
	        throw new TypeError("Value of variable \"args\" violates contract.\n\nExpected:\nArray\n\nGot:\n" + _inspect(args));
	      }

	      try {
	        result = originFunc.apply(this, arguments);
	        args[args.length] = result;
	        advice.apply(context || this, args);
	        return result;
	      } catch (e) {
	        args[args.length] = e;
	        advice.apply(context || this, args);
	        throw e;
	      }
	    };

	    return originFunc;
	  }

	  /**
	   * An implementation of `around` advice in AOP.
	   * @param {Object} obj Target object.
	   * @param {string} methodName Target method.
	   * @param {Function} advice Advice function.
	   * @param {Object=} context Advice function will be bound to this parameter. `Proceed` function won't.
	   * @return {Function} Target function.
	   * @static
	   */
	  function aroundAdvice(obj, methodName, advice, context) {
	    if (!(obj instanceof Object)) {
	      throw new TypeError("Value of argument \"obj\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(obj));
	    }

	    if (!(typeof methodName === 'string')) {
	      throw new TypeError("Value of argument \"methodName\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(methodName));
	    }

	    if (!(typeof advice === 'function')) {
	      throw new TypeError("Value of argument \"advice\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(advice));
	    }

	    if (!(context instanceof Object || context == null)) {
	      throw new TypeError("Value of argument \"context\" violates contract.\n\nExpected:\nObject | null\n\nGot:\n" + _inspect(context));
	    }

	    var originFunc = obj[methodName];

	    if (!(typeof originFunc === 'function')) {
	      throw new TypeError("Value of variable \"originFunc\" violates contract.\n\nExpected:\nFunction\n\nGot:\n" + _inspect(originFunc));
	    }

	    obj[methodName] = function () {
	      var args = nativeSlice.call(arguments);

	      if (!Array.isArray(args)) {
	        throw new TypeError("Value of variable \"args\" violates contract.\n\nExpected:\nArray\n\nGot:\n" + _inspect(args));
	      }

	      var boundFunc = bind(originFunc, this);
	      args[args.length] = boundFunc;
	      return advice.apply(context || this, args);
	    };

	    return originFunc;
	  }
	  /* public methods - end */

	  /* export module - begin */
	  module.exports.beforeAdvice = beforeAdvice;
	  module.exports.afterReturningAdvice = afterReturningAdvice;
	  module.exports.afterThrowingAdvice = afterThrowingAdvice;
	  module.exports.afterFinallyAdvice = afterFinallyAdvice;
	  module.exports.aroundAdvice = aroundAdvice;
	  /* export module - end */
	}).call(window);

	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === "undefined" ? "undefined" : _typeof(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = Object.keys(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=watAspect.browser.js.map