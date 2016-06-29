
<a name="module_watAspect"></a>

## watAspect
A library for Aspect Oriented Programming (AOP) in javascript.

**See**: [watAspect](http://git.web-uhee.com/lib/watAspect)  
**Version**: 0.0.1  
**Author:** Jae-Yeop Kim <kseo05com@gmail.com>  
**License**: MIT  
**Copyright**: (c) web-uhee.com 2016  

* [watAspect](#module_watAspect)
    * [.beforeAdvice(obj, methodName, advice, [context])](#module_watAspect.beforeAdvice) ⇒ <code>function</code>
    * [.afterReturningAdvice(obj, methodName, advice, [context])](#module_watAspect.afterReturningAdvice) ⇒ <code>function</code>
    * [.afterThrowingAdvice(obj, methodName, advice, [context])](#module_watAspect.afterThrowingAdvice) ⇒ <code>function</code>
    * [.afterFinallyAdvice(obj, methodName, advice, [context])](#module_watAspect.afterFinallyAdvice) ⇒ <code>function</code>
    * [.aroundAdvice(obj, methodName, advice, [context])](#module_watAspect.aroundAdvice) ⇒ <code>function</code>

<a name="module_watAspect.beforeAdvice"></a>

### watAspect.beforeAdvice(obj, methodName, advice, [context]) ⇒ <code>function</code>
An implementation of `before` advice in AOP.

**Kind**: static method of <code>[watAspect](#module_watAspect)</code>  
**Returns**: <code>function</code> - Target function.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Target object. |
| methodName | <code>string</code> | Target method. |
| advice | <code>function</code> | Advice function. |
| [context] | <code>Object</code> | Advice function will be bound to this parameter. |

<a name="module_watAspect.afterReturningAdvice"></a>

### watAspect.afterReturningAdvice(obj, methodName, advice, [context]) ⇒ <code>function</code>
An implementation of `after returning` advice in AOP.

**Kind**: static method of <code>[watAspect](#module_watAspect)</code>  
**Returns**: <code>function</code> - Target function.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Target object. |
| methodName | <code>string</code> | Target method. |
| advice | <code>function</code> | Advice function. |
| [context] | <code>Object</code> | Advice function will be bound to this parameter. |

<a name="module_watAspect.afterThrowingAdvice"></a>

### watAspect.afterThrowingAdvice(obj, methodName, advice, [context]) ⇒ <code>function</code>
An implementation of `after throwing` advice in AOP.

**Kind**: static method of <code>[watAspect](#module_watAspect)</code>  
**Returns**: <code>function</code> - Target function.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Target object. |
| methodName | <code>string</code> | Target method. |
| advice | <code>function</code> | Advice function. |
| [context] | <code>Object</code> | Advice function will be bound to this parameter. |

<a name="module_watAspect.afterFinallyAdvice"></a>

### watAspect.afterFinallyAdvice(obj, methodName, advice, [context]) ⇒ <code>function</code>
An implementation of `after finally` advice in AOP.

**Kind**: static method of <code>[watAspect](#module_watAspect)</code>  
**Returns**: <code>function</code> - Target function.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Target object. |
| methodName | <code>string</code> | Target method. |
| advice | <code>function</code> | Advice function. |
| [context] | <code>Object</code> | Advice function will be bound to this parameter. |

<a name="module_watAspect.aroundAdvice"></a>

### watAspect.aroundAdvice(obj, methodName, advice, [context]) ⇒ <code>function</code>
An implementation of `around` advice in AOP.

**Kind**: static method of <code>[watAspect](#module_watAspect)</code>  
**Returns**: <code>function</code> - Target function.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Target object. |
| methodName | <code>string</code> | Target method. |
| advice | <code>function</code> | Advice function. |
| [context] | <code>Object</code> | Advice function will be bound to this parameter. `Proceed` function won't. |


## Install

## Examples

## License

The MIT License (MIT)

Copyright (c) 2016 web-uhee.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
