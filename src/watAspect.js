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
// @flow

/* import modules - begin */
/* import modules - end */

/* define custom object type - begin */
/* define custom object type - end */

/* private methods - begin */
/**
 * Array.prototype.slice method.
 * @static
 * @ignore
 */
var nativeSlice: Function|null = Array.prototype.slice;

/**
 * Array.prototype.bind method.
 * @static
 * @ignore
 */
var nativeBind: Function|null = Function.prototype.bind;

/**
 * Javascript object constructor.
 * @static
 * @ignore
 */
function Ctor (): null {}

/**
 * Same as _.bind.
 * @param  {Function} func
 * @param  {any} context
 * @return {Function=} Bound function.
 * @static
 * @private
 * @ignore
 */
function bind (func: Function, context: any): Function|null {
  var bound: Function|null;

  if (nativeBind && func.bind === nativeBind) {
    return nativeBind.apply(func, nativeSlice.call(arguments, 1));
  }

  var args: Array = nativeSlice.call(arguments, 2);

  return bound = function (): Function|null {
    if (!(this instanceof bound)) {
      return func.apply(context || this, args.concat(nativeSlice.call(arguments)));
    }

    Ctor.prototype = func.prototype;
    var self: Object = new Ctor();
    // TODO : validation of result variable type.
    var result: Function|null = func.apply(self, args.concat(nativeSlice.call(arguments)));

    if (Object(result) === result) {
      return result;
    }

    return self;
  };
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
function beforeAdvice (obj: Object, methodName: string, advice: Function, context: Object|null): Function {
  var originFunc: Function = obj[methodName];

  obj[methodName] = function (): any {
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
function afterReturningAdvice (obj: Object, methodName: string, advice: Function, context: Object|null): Function {
  var originFunc: Function = obj[methodName];

  obj[methodName] = function (): any {
    var result: any;
    var args: Array = nativeSlice.call(arguments);

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
function afterThrowingAdvice (obj: Object, methodName: string, advice: Function, context: Object|null): Function {
  var originFunc: Function = obj[methodName];

  obj[methodName] = function (): any {
    var args: Array = nativeSlice.call(arguments);

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
function afterFinallyAdvice (obj: Object, methodName: string, advice: Function, context: Object|null): Function {
  var originFunc: Function = obj[methodName];

  obj[methodName] = function (): any {
    var result: any;
    var args: Array = nativeSlice.call(arguments);

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
function aroundAdvice (obj: Object, methodName: string, advice: Function, context: Object|null): Function {
  var originFunc: Function = obj[methodName];

  obj[methodName] = function (): any {
    var args: Array = nativeSlice.call(arguments);
    var boundFunc: Function = bind(originFunc, this);

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
