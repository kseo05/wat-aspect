'use strict';

describe('watAspect.beforeAdvice(obj, methodName, advice, context)', () => {
  it('Target method 를 호출할 때, advice function 실행 후에 해당 method 가 동작해야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function () {
          this.a += 1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function () {
        this.c += 1; // c = 11
      };

      return new Clazz();
    }());

    watAspect.beforeAdvice(obj, 'memberFunc', function () {
      this.b += this.a; // b = 2
    });

    obj.memberFunc();
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(2);

    watAspect.beforeAdvice(obj, 'protoFunc', function () {
      this.d += this.c; // d = 20
    });

    obj.protoFunc();
    expect(obj.c).toEqual(11);
    expect(obj.d).toEqual(20);
  });
  it('Target method 를 호출할 때, advice function 과 해당 method 에 parameter 가 잘 전달되어야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function (delta1, delta10) {
          this.a += delta1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function (delta1, delta10) {
        this.c += delta10; // c = 20
      };

      return new Clazz();
    }());

    watAspect.beforeAdvice(obj, 'memberFunc', function (delta1, delta10) {
      this.b += delta10; // b = 11
    });

    obj.memberFunc(1, 10);
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(11);

    watAspect.beforeAdvice(obj, 'protoFunc', function (delta1, delta10) {
      this.d += delta1; // d = 11
    });

    obj.protoFunc(1, 10);
    expect(obj.c).toEqual(20);
    expect(obj.d).toEqual(11);
  });
});

describe('watAspect.afterReturningAdvice(obj, methodName, advice, context)', () => {
  it('Target method 를 호출할 때, advice function 실행 전에 해당 method 가 동작해야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function () {
          this.a += 1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function () {
        this.c += 1;  // c = 11
      };

      return new Clazz();
    }());

    watAspect.afterReturningAdvice(obj, 'memberFunc', function () {
      this.b += this.a; // b = 3
    });

    obj.memberFunc();
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(3);

    watAspect.afterReturningAdvice(obj, 'protoFunc', function () {
      this.d += this.c; // d = 21
    });

    obj.protoFunc();
    expect(obj.c).toEqual(11);
    expect(obj.d).toEqual(21);
  });
  it('Target method 를 호출할 때, 해당 method 동작 중에 예외가 발생하면 advice function 을 실행하지 말아야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.memberFunc1 = function () {
          throw new Error();
        };
        this.memberFunc2 = function () {
        };
      };

      return new Clazz();
    }());

    watAspect.afterReturningAdvice(obj, 'memberFunc1', function () {
      this.a += 1;
    }, obj);
    watAspect.afterReturningAdvice(obj, 'memberFunc2', function () {
      this.a += 1;
    }, obj);

    expect(obj.memberFunc1).toThrowError(Error);
    expect(obj.a).toEqual(1);
    obj.memberFunc2();
    expect(obj.a).toEqual(2);
  });
  it('Target method 를 호출할 때, advice function 과 해당 method 에 parameter 가 잘 전달되어야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function (delta1, delta10) {
          this.a += delta1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function (delta1, delta10) {
        this.c += delta10; // c = 20
      };

      return new Clazz();
    }());

    watAspect.afterReturningAdvice(obj, 'memberFunc', function (delta1, delta10) {
      this.b += delta10; // b = 11
    });

    obj.memberFunc(1, 10);
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(11);

    watAspect.afterReturningAdvice(obj, 'protoFunc', function (delta1, delta10) {
      this.d += delta1; // d = 11
    });

    obj.protoFunc(1, 10);
    expect(obj.c).toEqual(20);
    expect(obj.d).toEqual(11);
  });
});

describe('watAspect.afterThrowingAdvice(obj, methodName, advice, context)', () => {
  it('Target method 를 호출할 때, 해당 method 동작 중에 예외가 발생하면 advice function 을 실행해야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.memberFunc1 = function () {
          throw new Error();
        };
        this.memberFunc2 = function () {
        };
      };

      return new Clazz();
    }());

    watAspect.afterThrowingAdvice(obj, 'memberFunc1', function () {
      this.a += 1;
    }, obj);
    watAspect.afterThrowingAdvice(obj, 'memberFunc2', function () {
      this.a += 1;
    }, obj);

    expect(obj.memberFunc1).toThrowError(Error);
    expect(obj.a).toEqual(2);
    obj.memberFunc2();
    expect(obj.a).toEqual(2);
  });
  it('Target method 를 호출할 때, 해당 method 동작 중에 예외가 발생하지 않으면 advice function 을 실행하지 말아야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.memberFunc = function () {
          this.a += 10;
        };
      };

      return new Clazz();
    }());

    watAspect.afterThrowingAdvice(obj, 'memberFunc', function () {
      this.a += 1;  // a = 11
    });

    obj.memberFunc();
    expect(obj.a).toBe(11);
  });
  it('Target method 를 호출할 때, advice function 과 해당 method 에 parameter 가 잘 전달되어야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function (delta1, delta10) {
          this.a += delta1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function (delta1, delta10) {
        this.c += delta10; // c = 20
      };

      return new Clazz();
    }());

    watAspect.afterThrowingAdvice(obj, 'memberFunc', function (delta1, delta10) {
      this.b += delta10;
    });

    obj.memberFunc(1, 10);
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(1);

    watAspect.afterThrowingAdvice(obj, 'protoFunc', function (delta1, delta10) {
      this.d += delta1;
    });

    obj.protoFunc(1, 10);
    expect(obj.c).toEqual(20);
    expect(obj.d).toEqual(10);
  });
});

describe('watAspect.afterFinallyAdvice(obj, methodName, advice, context)', () => {
  it('Target method 를 호출할 때, advice function 실행 전에 해당 method 가 동작해야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function () {
          this.a += 1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function () {
        this.c += 1;  // c = 11
      };

      return new Clazz();
    }());

    watAspect.afterFinallyAdvice(obj, 'memberFunc', function () {
      this.b += this.a; // b = 3
    });

    obj.memberFunc();
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(3);

    watAspect.afterFinallyAdvice(obj, 'protoFunc', function () {
      this.d += this.c; // d = 21
    });

    obj.protoFunc();
    expect(obj.c).toEqual(11);
    expect(obj.d).toEqual(21);
  });
  it('Target method 를 호출할 때, 해당 method 동작 중에 예외가 발생하면 advice function 을 실행해야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.memberFunc1 = function () {
          throw new Error();
        };
        this.memberFunc2 = function () {
        };
      };

      return new Clazz();
    }());

    watAspect.afterFinallyAdvice(obj, 'memberFunc1', function () {
      this.a += 1;  // a = 2
    }, obj);
    watAspect.afterFinallyAdvice(obj, 'memberFunc2', function () {
      this.a += 1;  // a = 2
    }, obj);

    expect(obj.memberFunc1).toThrowError(Error);
    expect(obj.a).toEqual(2);
    obj.memberFunc2();
    expect(obj.a).toEqual(3);
  });
  it('Target method 를 호출할 때, advice function 과 해당 method 에 parameter 가 잘 전달되어야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function (delta1, delta10) {
          this.a += delta1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function (delta1, delta10) {
        this.c += delta10; // c = 20
      };

      return new Clazz();
    }());

    watAspect.afterFinallyAdvice(obj, 'memberFunc', function (delta1, delta10) {
      this.b += delta10; // b = 11
    });

    obj.memberFunc(1, 10);
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(11);

    watAspect.afterFinallyAdvice(obj, 'protoFunc', function (delta1, delta10) {
      this.d += delta1; // d = 11
    });

    obj.protoFunc(1, 10);
    expect(obj.c).toEqual(20);
    expect(obj.d).toEqual(11);
  });
});

describe('watAspect.aroundAdvice(obj, methodName, advice, context)', () => {
  it('Target method 를 호출할 때, advice function 및 proceed function 이 잘 동작해야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function () {
          this.a += 1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function () {
        this.c += 1;  // c = 11
      };

      return new Clazz();
    }());

    watAspect.aroundAdvice(obj, 'memberFunc', function (proceed) {
      this.b += this.a; // b = 2
      proceed();
      this.b *= this.a; // b = 4
    });

    obj.memberFunc();
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(4);

    watAspect.aroundAdvice(obj, 'protoFunc', function (proceed) {
      this.d += this.c; // d = 20
      proceed();
      this.d *= this.c; // d = 220
    });

    obj.protoFunc();
    expect(obj.c).toEqual(11);
    expect(obj.d).toEqual(220);
  });
  it('Target method 를 호출할 때, advice function 과 해당 method 에 parameter 가 잘 전달되어야 한다.', () => {
    const watAspect = require('../watAspect');

    var obj = (function () {
      var Clazz = function () {
        this.a = 1;
        this.b = 1;
        this.c = 10;
        this.d = 10;
        this.memberFunc = function (delta1, delta10) {
          this.a += delta1;  // a = 2
        };
      };

      Clazz.prototype.protoFunc = function (delta1, delta10) {
        this.c += delta10; // c = 20
      };

      return new Clazz();
    }());

    watAspect.aroundAdvice(obj, 'memberFunc', function (delta1, delta10, proceed) {
      this.b += delta10; // b = 11
      proceed(delta1, delta10);
      this.b += delta1; // b = 12
    });

    obj.memberFunc(1, 10);
    expect(obj.a).toEqual(2);
    expect(obj.b).toEqual(12);

    watAspect.aroundAdvice(obj, 'protoFunc', function (delta1, delta10, proceed) {
      this.d += delta1; // d = 11
      proceed(delta1, delta10);
      this.d += delta10; // d = 21
    });

    obj.protoFunc(1, 10);
    expect(obj.c).toEqual(20);
    expect(obj.d).toEqual(21);
  });
});

// describe('watAspect.restore(obj, methodName)', () => {
//   it('restore 를 호출한 후에, 해당 메서드를 호출 시 advice 를 정의하기 전으로 동작해야 한다.', () => {
//     const watAspect = require('../watAspect');
//
//     var obj = (function () {
//       var Clazz = function () {
//         this.a = 1;
//         this.b = 1;
//         this.c = 10;
//         this.d = 10;
//         this.memberFunc = function () {
//           this.a += 1;
//         };
//       };
//
//       Clazz.prototype.protoFunc = function () {
//         this.c += 1;
//       };
//
//       return new Clazz();
//     }());
//
//     watAspect.beforeAdvice(obj, 'memberFunc', function () {
//       this.b += this.a;
//     });
//     watAspect.restore(obj, 'memberFunc');
//
//     obj.memberFunc();
//     expect(obj.a).toEqual(2);
//     expect(obj.b).toEqual(1);
//
//     watAspect.beforeAdvice(obj, 'protoFunc', function () {
//       this.d += this.c;
//     });
//     watAspect.restore(obj, 'protoFunc');
//
//     obj.protoFunc();
//     expect(obj.c).toEqual(11);
//     expect(obj.d).toEqual(10);
//   });
// });
