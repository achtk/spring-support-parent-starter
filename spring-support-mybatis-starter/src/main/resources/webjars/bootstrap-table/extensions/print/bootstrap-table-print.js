(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
        typeof define === 'function' && define.amd ? define(['jquery'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$b) {
    'use strict';

    function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
    }

    var $__default = /*#__PURE__*/_interopDefaultLegacy($$b);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        Object.defineProperty(subClass, "prototype", {
            writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            }));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
        }

        return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
        };
    }

    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
        }

        return object;
    }

    function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);

                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.get) {
                    return desc.get.call(arguments.length < 3 ? target : receiver);
                }

                return desc.value;
            };
        }

        return _get.apply(this, arguments);
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
    }

    function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

        if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;

                var F = function () {
                };

                return {
                    s: F,
                    n: function () {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: F
                };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var normalCompletion = true,
            didErr = false,
            err;
        return {
            s: function () {
                it = it.call(o);
            },
            n: function () {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function (e) {
                didErr = true;
                err = e;
            },
            f: function () {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally {
                    if (didErr) throw err;
                }
            }
        };
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var check = function (it) {
        return it && it.Math == Math && it;
    };

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global$s =
        // eslint-disable-next-line es-x/no-global-this -- safe
        check(typeof globalThis == 'object' && globalThis) ||
        check(typeof window == 'object' && window) ||
        // eslint-disable-next-line no-restricted-globals -- safe
        check(typeof self == 'object' && self) ||
        check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
        // eslint-disable-next-line no-new-func -- fallback
        (function () {
            return this;
        })() || Function('return this')();

    var objectGetOwnPropertyDescriptor = {};

    var fails$f = function (exec) {
        try {
            return !!exec();
        } catch (error) {
            return true;
        }
    };

    var fails$e = fails$f;

    // Detect IE8's incomplete defineProperty implementation
    var descriptors = !fails$e(function () {
        // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
        return Object.defineProperty({}, 1, {
            get: function () {
                return 7;
            }
        })[1] != 7;
    });

    var fails$d = fails$f;

    var functionBindNative = !fails$d(function () {
        // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
        var test = (function () { /* empty */
        }).bind();
        // eslint-disable-next-line no-prototype-builtins -- safe
        return typeof test != 'function' || test.hasOwnProperty('prototype');
    });

    var NATIVE_BIND$2 = functionBindNative;

    var call$5 = Function.prototype.call;

    var functionCall = NATIVE_BIND$2 ? call$5.bind(call$5) : function () {
        return call$5.apply(call$5, arguments);
    };

    var objectPropertyIsEnumerable = {};

    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({1: 2}, 1);

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor$1(this, V);
        return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;

    var createPropertyDescriptor$3 = function (bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };

    var NATIVE_BIND$1 = functionBindNative;

    var FunctionPrototype$1 = Function.prototype;
    var bind$3 = FunctionPrototype$1.bind;
    var call$4 = FunctionPrototype$1.call;
    var uncurryThis$h = NATIVE_BIND$1 && bind$3.bind(call$4, call$4);

    var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
        return fn && uncurryThis$h(fn);
    } : function (fn) {
        return fn && function () {
            return call$4.apply(fn, arguments);
        };
    };

    var uncurryThis$g = functionUncurryThis;

    var toString$4 = uncurryThis$g({}.toString);
    var stringSlice = uncurryThis$g(''.slice);

    var classofRaw$1 = function (it) {
        return stringSlice(toString$4(it), 8, -1);
    };

    var global$r = global$s;
    var uncurryThis$f = functionUncurryThis;
    var fails$c = fails$f;
    var classof$5 = classofRaw$1;

    var Object$4 = global$r.Object;
    var split = uncurryThis$f(''.split);

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var indexedObject = fails$c(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins -- safe
        return !Object$4('z').propertyIsEnumerable(0);
    }) ? function (it) {
        return classof$5(it) == 'String' ? split(it, '') : Object$4(it);
    } : Object$4;

    var global$q = global$s;

    var TypeError$9 = global$q.TypeError;

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible$2 = function (it) {
        if (it == undefined) throw TypeError$9("Can't call method on " + it);
        return it;
    };

    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject$3 = indexedObject;
    var requireObjectCoercible$1 = requireObjectCoercible$2;

    var toIndexedObject$6 = function (it) {
        return IndexedObject$3(requireObjectCoercible$1(it));
    };

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    var isCallable$c = function (argument) {
        return typeof argument == 'function';
    };

    var isCallable$b = isCallable$c;

    var isObject$8 = function (it) {
        return typeof it == 'object' ? it !== null : isCallable$b(it);
    };

    var global$p = global$s;
    var isCallable$a = isCallable$c;

    var aFunction = function (argument) {
        return isCallable$a(argument) ? argument : undefined;
    };

    var getBuiltIn$5 = function (namespace, method) {
        return arguments.length < 2 ? aFunction(global$p[namespace]) : global$p[namespace] && global$p[namespace][method];
    };

    var uncurryThis$e = functionUncurryThis;

    var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

    var getBuiltIn$4 = getBuiltIn$5;

    var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

    var global$o = global$s;
    var userAgent$2 = engineUserAgent;

    var process = global$o.process;
    var Deno = global$o.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
        match = v8.split('.');
        // in old Chrome, versions of V8 isn't V8 = Chrome / 10
        // but their correct versions are not interesting for us
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }

    // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0
    if (!version && userAgent$2) {
        match = userAgent$2.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
            match = userAgent$2.match(/Chrome\/(\d+)/);
            if (match) version = +match[1];
        }
    }

    var engineV8Version = version;

    /* eslint-disable es-x/no-symbol -- required for testing */

    var V8_VERSION$2 = engineV8Version;
    var fails$b = fails$f;

    // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$b(function () {
        var symbol = Symbol();
        // Chrome 38 Symbol has incorrect toString conversion
        // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
        return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
            // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
            !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
    });

    /* eslint-disable es-x/no-symbol -- required for testing */

    var NATIVE_SYMBOL$1 = nativeSymbol;

    var useSymbolAsUid = NATIVE_SYMBOL$1
        && !Symbol.sham
        && typeof Symbol.iterator == 'symbol';

    var global$n = global$s;
    var getBuiltIn$3 = getBuiltIn$5;
    var isCallable$9 = isCallable$c;
    var isPrototypeOf = objectIsPrototypeOf;
    var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

    var Object$3 = global$n.Object;

    var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
        return typeof it == 'symbol';
    } : function (it) {
        var $Symbol = getBuiltIn$3('Symbol');
        return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
    };

    var global$m = global$s;

    var String$3 = global$m.String;

    var tryToString$1 = function (argument) {
        try {
            return String$3(argument);
        } catch (error) {
            return 'Object';
        }
    };

    var global$l = global$s;
    var isCallable$8 = isCallable$c;
    var tryToString = tryToString$1;

    var TypeError$8 = global$l.TypeError;

    // `Assert: IsCallable(argument) is true`
    var aCallable$3 = function (argument) {
        if (isCallable$8(argument)) return argument;
        throw TypeError$8(tryToString(argument) + ' is not a function');
    };

    var aCallable$2 = aCallable$3;

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    var getMethod$1 = function (V, P) {
        var func = V[P];
        return func == null ? undefined : aCallable$2(func);
    };

    var global$k = global$s;
    var call$3 = functionCall;
    var isCallable$7 = isCallable$c;
    var isObject$7 = isObject$8;

    var TypeError$7 = global$k.TypeError;

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    var ordinaryToPrimitive$1 = function (input, pref) {
        var fn, val;
        if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$3(fn, input))) return val;
        if (isCallable$7(fn = input.valueOf) && !isObject$7(val = call$3(fn, input))) return val;
        if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$3(fn, input))) return val;
        throw TypeError$7("Can't convert object to primitive value");
    };

    var shared$3 = {exports: {}};

    var global$j = global$s;

    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var defineProperty$2 = Object.defineProperty;

    var setGlobal$3 = function (key, value) {
        try {
            defineProperty$2(global$j, key, {value: value, configurable: true, writable: true});
        } catch (error) {
            global$j[key] = value;
        }
        return value;
    };

    var global$i = global$s;
    var setGlobal$2 = setGlobal$3;

    var SHARED = '__core-js_shared__';
    var store$3 = global$i[SHARED] || setGlobal$2(SHARED, {});

    var sharedStore = store$3;

    var store$2 = sharedStore;

    (shared$3.exports = function (key, value) {
        return store$2[key] || (store$2[key] = value !== undefined ? value : {});
    })('versions', []).push({
        version: '3.22.5',
        mode: 'global',
        copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE',
        source: 'https://github.com/zloirock/core-js'
    });

    var global$h = global$s;
    var requireObjectCoercible = requireObjectCoercible$2;

    var Object$2 = global$h.Object;

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    var toObject$6 = function (argument) {
        return Object$2(requireObjectCoercible(argument));
    };

    var uncurryThis$d = functionUncurryThis;
    var toObject$5 = toObject$6;

    var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es-x/no-object-hasown -- safe
    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject$5(it), key);
    };

    var uncurryThis$c = functionUncurryThis;

    var id = 0;
    var postfix = Math.random();
    var toString$3 = uncurryThis$c(1.0.toString);

    var uid$2 = function (key) {
        return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
    };

    var global$g = global$s;
    var shared$2 = shared$3.exports;
    var hasOwn$6 = hasOwnProperty_1;
    var uid$1 = uid$2;
    var NATIVE_SYMBOL = nativeSymbol;
    var USE_SYMBOL_AS_UID = useSymbolAsUid;

    var WellKnownSymbolsStore = shared$2('wks');
    var Symbol$1 = global$g.Symbol;
    var symbolFor = Symbol$1 && Symbol$1['for'];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

    var wellKnownSymbol$8 = function (name) {
        if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
            var description = 'Symbol.' + name;
            if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
                WellKnownSymbolsStore[name] = Symbol$1[name];
            } else if (USE_SYMBOL_AS_UID && symbolFor) {
                WellKnownSymbolsStore[name] = symbolFor(description);
            } else {
                WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
            }
        }
        return WellKnownSymbolsStore[name];
    };

    var global$f = global$s;
    var call$2 = functionCall;
    var isObject$6 = isObject$8;
    var isSymbol$1 = isSymbol$2;
    var getMethod = getMethod$1;
    var ordinaryToPrimitive = ordinaryToPrimitive$1;
    var wellKnownSymbol$7 = wellKnownSymbol$8;

    var TypeError$6 = global$f.TypeError;
    var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    var toPrimitive$1 = function (input, pref) {
        if (!isObject$6(input) || isSymbol$1(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call$2(exoticToPrim, input, pref);
            if (!isObject$6(result) || isSymbol$1(result)) return result;
            throw TypeError$6("Can't convert object to primitive value");
        }
        if (pref === undefined) pref = 'number';
        return ordinaryToPrimitive(input, pref);
    };

    var toPrimitive = toPrimitive$1;
    var isSymbol = isSymbol$2;

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    var toPropertyKey$3 = function (argument) {
        var key = toPrimitive(argument, 'string');
        return isSymbol(key) ? key : key + '';
    };

    var global$e = global$s;
    var isObject$5 = isObject$8;

    var document$1 = global$e.document;
    // typeof document.createElement is 'object' in old IE
    var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

    var documentCreateElement$1 = function (it) {
        return EXISTS$1 ? document$1.createElement(it) : {};
    };

    var DESCRIPTORS$8 = descriptors;
    var fails$a = fails$f;
    var createElement = documentCreateElement$1;

    // Thanks to IE8 for its funny defineProperty
    var ie8DomDefine = !DESCRIPTORS$8 && !fails$a(function () {
        // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
        return Object.defineProperty(createElement('div'), 'a', {
            get: function () {
                return 7;
            }
        }).a != 7;
    });

    var DESCRIPTORS$7 = descriptors;
    var call$1 = functionCall;
    var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
    var createPropertyDescriptor$2 = createPropertyDescriptor$3;
    var toIndexedObject$5 = toIndexedObject$6;
    var toPropertyKey$2 = toPropertyKey$3;
    var hasOwn$5 = hasOwnProperty_1;
    var IE8_DOM_DEFINE$1 = ie8DomDefine;

    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject$5(O);
        P = toPropertyKey$2(P);
        if (IE8_DOM_DEFINE$1) try {
            return $getOwnPropertyDescriptor$1(O, P);
        } catch (error) { /* empty */
        }
        if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
    };

    var objectDefineProperty = {};

    var DESCRIPTORS$6 = descriptors;
    var fails$9 = fails$f;

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$9(function () {
        // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
        return Object.defineProperty(function () { /* empty */
        }, 'prototype', {
            value: 42,
            writable: false
        }).prototype != 42;
    });

    var global$d = global$s;
    var isObject$4 = isObject$8;

    var String$2 = global$d.String;
    var TypeError$5 = global$d.TypeError;

    // `Assert: Type(argument) is Object`
    var anObject$4 = function (argument) {
        if (isObject$4(argument)) return argument;
        throw TypeError$5(String$2(argument) + ' is not an object');
    };

    var global$c = global$s;
    var DESCRIPTORS$5 = descriptors;
    var IE8_DOM_DEFINE = ie8DomDefine;
    var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
    var anObject$3 = anObject$4;
    var toPropertyKey$1 = toPropertyKey$3;

    var TypeError$4 = global$c.TypeError;
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var $defineProperty = Object.defineProperty;
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = 'enumerable';
    var CONFIGURABLE$1 = 'configurable';
    var WRITABLE = 'writable';

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
        anObject$3(O);
        P = toPropertyKey$1(P);
        anObject$3(Attributes);
        if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
            var current = $getOwnPropertyDescriptor(O, P);
            if (current && current[WRITABLE]) {
                O[P] = Attributes.value;
                Attributes = {
                    configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
                    enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                    writable: false
                };
            }
        }
        return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
        anObject$3(O);
        P = toPropertyKey$1(P);
        anObject$3(Attributes);
        if (IE8_DOM_DEFINE) try {
            return $defineProperty(O, P, Attributes);
        } catch (error) { /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError$4('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
    };

    var DESCRIPTORS$4 = descriptors;
    var definePropertyModule$4 = objectDefineProperty;
    var createPropertyDescriptor$1 = createPropertyDescriptor$3;

    var createNonEnumerableProperty$3 = DESCRIPTORS$4 ? function (object, key, value) {
        return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
    } : function (object, key, value) {
        object[key] = value;
        return object;
    };

    var makeBuiltIn$2 = {exports: {}};

    var DESCRIPTORS$3 = descriptors;
    var hasOwn$4 = hasOwnProperty_1;

    var FunctionPrototype = Function.prototype;
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

    var EXISTS = hasOwn$4(FunctionPrototype, 'name');
    // additional protection from minified / mangled / dropped function names
    var PROPER = EXISTS && (function something() { /* empty */
    }).name === 'something';
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype, 'name').configurable));

    var functionName = {
        EXISTS: EXISTS,
        PROPER: PROPER,
        CONFIGURABLE: CONFIGURABLE
    };

    var uncurryThis$b = functionUncurryThis;
    var isCallable$6 = isCallable$c;
    var store$1 = sharedStore;

    var functionToString = uncurryThis$b(Function.toString);

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable$6(store$1.inspectSource)) {
        store$1.inspectSource = function (it) {
            return functionToString(it);
        };
    }

    var inspectSource$3 = store$1.inspectSource;

    var global$b = global$s;
    var isCallable$5 = isCallable$c;
    var inspectSource$2 = inspectSource$3;

    var WeakMap$1 = global$b.WeakMap;

    var nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

    var shared$1 = shared$3.exports;
    var uid = uid$2;

    var keys = shared$1('keys');

    var sharedKey$2 = function (key) {
        return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys$4 = {};

    var NATIVE_WEAK_MAP = nativeWeakMap;
    var global$a = global$s;
    var uncurryThis$a = functionUncurryThis;
    var isObject$3 = isObject$8;
    var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
    var hasOwn$3 = hasOwnProperty_1;
    var shared = sharedStore;
    var sharedKey$1 = sharedKey$2;
    var hiddenKeys$3 = hiddenKeys$4;

    var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
    var TypeError$3 = global$a.TypeError;
    var WeakMap = global$a.WeakMap;
    var set, get, has;

    var enforce = function (it) {
        return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function (TYPE) {
        return function (it) {
            var state;
            if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
                throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
            }
            return state;
        };
    };

    if (NATIVE_WEAK_MAP || shared.state) {
        var store = shared.state || (shared.state = new WeakMap());
        var wmget = uncurryThis$a(store.get);
        var wmhas = uncurryThis$a(store.has);
        var wmset = uncurryThis$a(store.set);
        set = function (it, metadata) {
            if (wmhas(store, it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            wmset(store, it, metadata);
            return metadata;
        };
        get = function (it) {
            return wmget(store, it) || {};
        };
        has = function (it) {
            return wmhas(store, it);
        };
    } else {
        var STATE = sharedKey$1('state');
        hiddenKeys$3[STATE] = true;
        set = function (it, metadata) {
            if (hasOwn$3(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty$2(it, STATE, metadata);
            return metadata;
        };
        get = function (it) {
            return hasOwn$3(it, STATE) ? it[STATE] : {};
        };
        has = function (it) {
            return hasOwn$3(it, STATE);
        };
    }

    var internalState = {
        set: set,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor
    };

    var fails$8 = fails$f;
    var isCallable$4 = isCallable$c;
    var hasOwn$2 = hasOwnProperty_1;
    var DESCRIPTORS$2 = descriptors;
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
    var inspectSource$1 = inspectSource$3;
    var InternalStateModule = internalState;

    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var defineProperty$1 = Object.defineProperty;

    var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$8(function () {
        return defineProperty$1(function () { /* empty */
        }, 'length', {value: 8}).length !== 8;
    });

    var TEMPLATE = String(String).split('String');

    var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
        if (String(name).slice(0, 7) === 'Symbol(') {
            name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
        }
        if (options && options.getter) name = 'get ' + name;
        if (options && options.setter) name = 'set ' + name;
        if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
            defineProperty$1(value, 'name', {value: name, configurable: true});
        }
        if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
            defineProperty$1(value, 'length', {value: options.arity});
        }
        if (options && hasOwn$2(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS$2) try {
                defineProperty$1(value, 'prototype', {writable: false});
            } catch (error) { /* empty */
            }
        } else value.prototype = undefined;
        var state = enforceInternalState(value);
        if (!hasOwn$2(state, 'source')) {
            state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
        }
        return value;
    };

    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    // eslint-disable-next-line no-extend-native -- required
    Function.prototype.toString = makeBuiltIn$1(function toString() {
        return isCallable$4(this) && getInternalState(this).source || inspectSource$1(this);
    }, 'toString');

    var global$9 = global$s;
    var isCallable$3 = isCallable$c;
    var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
    var makeBuiltIn = makeBuiltIn$2.exports;
    var setGlobal$1 = setGlobal$3;

    var defineBuiltIn$2 = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== undefined ? options.name : key;
        if (isCallable$3(value)) makeBuiltIn(value, name, options);
        if (O === global$9) {
            if (simple) O[key] = value;
            else setGlobal$1(key, value);
            return O;
        } else if (!unsafe) {
            delete O[key];
        } else if (!noTargetGet && O[key]) {
            simple = true;
        }
        if (simple) O[key] = value;
        else createNonEnumerableProperty$1(O, key, value);
        return O;
    };

    var objectGetOwnPropertyNames = {};

    var ceil = Math.ceil;
    var floor$1 = Math.floor;

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    var toIntegerOrInfinity$3 = function (argument) {
        var number = +argument;
        // eslint-disable-next-line no-self-compare -- safe
        return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
    };

    var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

    var max$2 = Math.max;
    var min$1 = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    var toAbsoluteIndex$3 = function (index, length) {
        var integer = toIntegerOrInfinity$2(index);
        return integer < 0 ? max$2(integer + length, 0) : min$1(integer, length);
    };

    var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

    var min = Math.min;

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    var toLength$1 = function (argument) {
        return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    var toLength = toLength$1;

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    var lengthOfArrayLike$8 = function (obj) {
        return toLength(obj.length);
    };

    var toIndexedObject$4 = toIndexedObject$6;
    var toAbsoluteIndex$2 = toAbsoluteIndex$3;
    var lengthOfArrayLike$7 = lengthOfArrayLike$8;

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod$1 = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
            var O = toIndexedObject$4($this);
            var length = lengthOfArrayLike$7(O);
            var index = toAbsoluteIndex$2(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare -- NaN check
            if (IS_INCLUDES && el != el) while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare -- NaN check
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
        };
    };

    var arrayIncludes = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod$1(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod$1(false)
    };

    var uncurryThis$9 = functionUncurryThis;
    var hasOwn$1 = hasOwnProperty_1;
    var toIndexedObject$3 = toIndexedObject$6;
    var indexOf = arrayIncludes.indexOf;
    var hiddenKeys$2 = hiddenKeys$4;

    var push$2 = uncurryThis$9([].push);

    var objectKeysInternal = function (object, names) {
        var O = toIndexedObject$3(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$2(result, key);
        // Don't enum bug & hidden keys
        while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
            ~indexOf(result, key) || push$2(result, key);
        }
        return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys$3 = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
    ];

    var internalObjectKeys$1 = objectKeysInternal;
    var enumBugKeys$2 = enumBugKeys$3;

    var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
    objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys$1(O, hiddenKeys$1);
    };

    var objectGetOwnPropertySymbols = {};

    // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
    objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

    var getBuiltIn$2 = getBuiltIn$5;
    var uncurryThis$8 = functionUncurryThis;
    var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
    var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
    var anObject$2 = anObject$4;

    var concat$1 = uncurryThis$8([].concat);

    // all object keys, includes non-enumerable and symbols
    var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject$2(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
        return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
    };

    var hasOwn = hasOwnProperty_1;
    var ownKeys = ownKeys$1;
    var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
    var definePropertyModule$3 = objectDefineProperty;

    var copyConstructorProperties$1 = function (target, source, exceptions) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule$3.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
                defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        }
    };

    var fails$7 = fails$f;
    var isCallable$2 = isCallable$c;

    var replacement = /#|\.prototype\./;

    var isForced$1 = function (feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true
            : value == NATIVE ? false
                : isCallable$2(detection) ? fails$7(detection)
                    : !!detection;
    };

    var normalize = isForced$1.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced$1.data = {};
    var NATIVE = isForced$1.NATIVE = 'N';
    var POLYFILL = isForced$1.POLYFILL = 'P';

    var isForced_1 = isForced$1;

    var global$8 = global$s;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var createNonEnumerableProperty = createNonEnumerableProperty$3;
    var defineBuiltIn$1 = defineBuiltIn$2;
    var setGlobal = setGlobal$3;
    var copyConstructorProperties = copyConstructorProperties$1;
    var isForced = isForced_1;

    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
      options.name        - the .name of the function if it does not match the key
    */
    var _export = function (options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
            target = global$8;
        } else if (STATIC) {
            target = global$8[TARGET] || setGlobal(TARGET, {});
        } else {
            target = (global$8[TARGET] || {}).prototype;
        }
        if (target) for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
            // contained in target
            if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty == typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
            }
            // add a flag to not completely full polyfills
            if (options.sham || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(sourceProperty, 'sham', true);
            }
            defineBuiltIn$1(target, key, sourceProperty, options);
        }
    };

    var classof$4 = classofRaw$1;

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es-x/no-array-isarray -- safe
    var isArray$4 = Array.isArray || function isArray(argument) {
        return classof$4(argument) == 'Array';
    };

    var toPropertyKey = toPropertyKey$3;
    var definePropertyModule$2 = objectDefineProperty;
    var createPropertyDescriptor = createPropertyDescriptor$3;

    var createProperty$3 = function (object, key, value) {
        var propertyKey = toPropertyKey(key);
        if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor(0, value));
        else object[propertyKey] = value;
    };

    var wellKnownSymbol$6 = wellKnownSymbol$8;

    var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
    var test$1 = {};

    test$1[TO_STRING_TAG$1] = 'z';

    var toStringTagSupport = String(test$1) === '[object z]';

    var global$7 = global$s;
    var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
    var isCallable$1 = isCallable$c;
    var classofRaw = classofRaw$1;
    var wellKnownSymbol$5 = wellKnownSymbol$8;

    var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
    var Object$1 = global$7.Object;

    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function () {
        return arguments;
    }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
        try {
            return it[key];
        } catch (error) { /* empty */
        }
    };

    // getting tag from ES6+ `Object.prototype.toString`
    var classof$3 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
            // @@toStringTag case
            : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag
                // builtinTag case
                : CORRECT_ARGUMENTS ? classofRaw(O)
                    // ES3 arguments fallback
                    : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
    };

    var uncurryThis$7 = functionUncurryThis;
    var fails$6 = fails$f;
    var isCallable = isCallable$c;
    var classof$2 = classof$3;
    var getBuiltIn$1 = getBuiltIn$5;
    var inspectSource = inspectSource$3;

    var noop = function () { /* empty */
    };
    var empty = [];
    var construct = getBuiltIn$1('Reflect', 'construct');
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis$7(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

    var isConstructorModern = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        try {
            construct(noop, empty, argument);
            return true;
        } catch (error) {
            return false;
        }
    };

    var isConstructorLegacy = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        switch (classof$2(argument)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return false;
        }
        try {
            // we can't check .prototype since constructors produced by .bind haven't it
            // `Function#toString` throws on some built-it function in some legacy engines
            // (for example, `DOMQuad` and similar in FF41-)
            return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
        } catch (error) {
            return true;
        }
    };

    isConstructorLegacy.sham = true;

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    var isConstructor$2 = !construct || fails$6(function () {
        var called;
        return isConstructorModern(isConstructorModern.call)
            || !isConstructorModern(Object)
            || !isConstructorModern(function () {
                called = true;
            })
            || called;
    }) ? isConstructorLegacy : isConstructorModern;

    var global$6 = global$s;
    var isArray$3 = isArray$4;
    var isConstructor$1 = isConstructor$2;
    var isObject$2 = isObject$8;
    var wellKnownSymbol$4 = wellKnownSymbol$8;

    var SPECIES$2 = wellKnownSymbol$4('species');
    var Array$3 = global$6.Array;

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesConstructor$1 = function (originalArray) {
        var C;
        if (isArray$3(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (isConstructor$1(C) && (C === Array$3 || isArray$3(C.prototype))) C = undefined;
            else if (isObject$2(C)) {
                C = C[SPECIES$2];
                if (C === null) C = undefined;
            }
        }
        return C === undefined ? Array$3 : C;
    };

    var arraySpeciesConstructor = arraySpeciesConstructor$1;

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesCreate$3 = function (originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };

    var fails$5 = fails$f;
    var wellKnownSymbol$3 = wellKnownSymbol$8;
    var V8_VERSION$1 = engineV8Version;

    var SPECIES$1 = wellKnownSymbol$3('species');

    var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return V8_VERSION$1 >= 51 || !fails$5(function () {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES$1] = function () {
                return {foo: 1};
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
        });
    };

    var $$a = _export;
    var global$5 = global$s;
    var fails$4 = fails$f;
    var isArray$2 = isArray$4;
    var isObject$1 = isObject$8;
    var toObject$4 = toObject$6;
    var lengthOfArrayLike$6 = lengthOfArrayLike$8;
    var createProperty$2 = createProperty$3;
    var arraySpeciesCreate$2 = arraySpeciesCreate$3;
    var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
    var wellKnownSymbol$2 = wellKnownSymbol$8;
    var V8_VERSION = engineV8Version;

    var IS_CONCAT_SPREADABLE = wellKnownSymbol$2('isConcatSpreadable');
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
    var TypeError$2 = global$5.TypeError;

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$4(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
    });

    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$3('concat');

    var isConcatSpreadable = function (O) {
        if (!isObject$1(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray$2(O);
    };

    var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $$a({target: 'Array', proto: true, arity: 1, forced: FORCED$1}, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat(arg) {
            var O = toObject$4(this);
            var A = arraySpeciesCreate$2(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];
                if (isConcatSpreadable(E)) {
                    len = lengthOfArrayLike$6(E);
                    if (n + len > MAX_SAFE_INTEGER) throw TypeError$2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
                } else {
                    if (n >= MAX_SAFE_INTEGER) throw TypeError$2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty$2(A, n++, E);
                }
            }
            A.length = n;
            return A;
        }
    });

    var internalObjectKeys = objectKeysInternal;
    var enumBugKeys$1 = enumBugKeys$3;

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es-x/no-object-keys -- safe
    var objectKeys$2 = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys$1);
    };

    var DESCRIPTORS$1 = descriptors;
    var uncurryThis$6 = functionUncurryThis;
    var call = functionCall;
    var fails$3 = fails$f;
    var objectKeys$1 = objectKeys$2;
    var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
    var propertyIsEnumerableModule = objectPropertyIsEnumerable;
    var toObject$3 = toObject$6;
    var IndexedObject$2 = indexedObject;

    // eslint-disable-next-line es-x/no-object-assign -- safe
    var $assign = Object.assign;
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    var defineProperty = Object.defineProperty;
    var concat = uncurryThis$6([].concat);

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    var objectAssign = !$assign || fails$3(function () {
        // should have correct order of operations (Edge bug)
        if (DESCRIPTORS$1 && $assign({b: 1}, $assign(defineProperty({}, 'a', {
            enumerable: true,
            get: function () {
                defineProperty(this, 'b', {
                    value: 3,
                    enumerable: false
                });
            }
        }), {b: 2})).b !== 1) return true;
        // should work with symbols and should have deterministic property order (V8 bug)
        var A = {};
        var B = {};
        // eslint-disable-next-line es-x/no-symbol -- safe
        var symbol = Symbol();
        var alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach(function (chr) {
            B[chr] = chr;
        });
        return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
        var T = toObject$3(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;
        while (argumentsLength > index) {
            var S = IndexedObject$2(arguments[index++]);
            var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j) {
                key = keys[j++];
                if (!DESCRIPTORS$1 || call(propertyIsEnumerable, S, key)) T[key] = S[key];
            }
        }
        return T;
    } : $assign;

    var $$9 = _export;
    var assign = objectAssign;

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    // eslint-disable-next-line es-x/no-object-assign -- required for testing
    $$9({target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign}, {
        assign: assign
    });

    var uncurryThis$5 = functionUncurryThis;

    var arraySlice$1 = uncurryThis$5([].slice);

    var $$8 = _export;
    var global$4 = global$s;
    var isArray$1 = isArray$4;
    var isConstructor = isConstructor$2;
    var isObject = isObject$8;
    var toAbsoluteIndex$1 = toAbsoluteIndex$3;
    var lengthOfArrayLike$5 = lengthOfArrayLike$8;
    var toIndexedObject$2 = toIndexedObject$6;
    var createProperty$1 = createProperty$3;
    var wellKnownSymbol$1 = wellKnownSymbol$8;
    var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
    var un$Slice = arraySlice$1;

    var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');

    var SPECIES = wellKnownSymbol$1('species');
    var Array$2 = global$4.Array;
    var max$1 = Math.max;

    // `Array.prototype.slice` method
    // https://tc39.es/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects
    $$8({target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2}, {
        slice: function slice(start, end) {
            var O = toIndexedObject$2(this);
            var length = lengthOfArrayLike$5(O);
            var k = toAbsoluteIndex$1(start, length);
            var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
            // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
            var Constructor, result, n;
            if (isArray$1(O)) {
                Constructor = O.constructor;
                // cross-realm fallback
                if (isConstructor(Constructor) && (Constructor === Array$2 || isArray$1(Constructor.prototype))) {
                    Constructor = undefined;
                } else if (isObject(Constructor)) {
                    Constructor = Constructor[SPECIES];
                    if (Constructor === null) Constructor = undefined;
                }
                if (Constructor === Array$2 || Constructor === undefined) {
                    return un$Slice(O, k, fin);
                }
            }
            result = new (Constructor === undefined ? Array$2 : Constructor)(max$1(fin - k, 0));
            for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
            result.length = n;
            return result;
        }
    });

    var fails$2 = fails$f;

    var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails$2(function () {
            // eslint-disable-next-line no-useless-call -- required for testing
            method.call(null, argument || function () {
                return 1;
            }, 1);
        });
    };

    /* eslint-disable es-x/no-array-prototype-indexof -- required for testing */
    var $$7 = _export;
    var uncurryThis$4 = functionUncurryThis;
    var $IndexOf = arrayIncludes.indexOf;
    var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;

    var un$IndexOf = uncurryThis$4([].indexOf);

    var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
    var STRICT_METHOD$2 = arrayMethodIsStrict$2('indexOf');

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    $$7({target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$2}, {
        indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
            var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
            return NEGATIVE_ZERO
                // convert -0 to +0
                ? un$IndexOf(this, searchElement, fromIndex) || 0
                : $IndexOf(this, searchElement, fromIndex);
        }
    });

    var uncurryThis$3 = functionUncurryThis;
    var aCallable$1 = aCallable$3;
    var NATIVE_BIND = functionBindNative;

    var bind$2 = uncurryThis$3(uncurryThis$3.bind);

    // optional / simple context binding
    var functionBindContext = function (fn, that) {
        aCallable$1(fn);
        return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function (/* ...args */) {
            return fn.apply(that, arguments);
        };
    };

    var global$3 = global$s;
    var isArray = isArray$4;
    var lengthOfArrayLike$4 = lengthOfArrayLike$8;
    var bind$1 = functionBindContext;

    var TypeError$1 = global$3.TypeError;

    // `FlattenIntoArray` abstract operation
    // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
    var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bind$1(mapper, thisArg) : false;
        var element, elementLen;

        while (sourceIndex < sourceLen) {
            if (sourceIndex in source) {
                element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

                if (depth > 0 && isArray(element)) {
                    elementLen = lengthOfArrayLike$4(element);
                    targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
                } else {
                    if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError$1('Exceed the acceptable array length');
                    target[targetIndex] = element;
                }

                targetIndex++;
            }
            sourceIndex++;
        }
        return targetIndex;
    };

    var flattenIntoArray_1 = flattenIntoArray$1;

    var $$6 = _export;
    var flattenIntoArray = flattenIntoArray_1;
    var toObject$2 = toObject$6;
    var lengthOfArrayLike$3 = lengthOfArrayLike$8;
    var toIntegerOrInfinity = toIntegerOrInfinity$3;
    var arraySpeciesCreate$1 = arraySpeciesCreate$3;

    // `Array.prototype.flat` method
    // https://tc39.es/ecma262/#sec-array.prototype.flat
    $$6({target: 'Array', proto: true}, {
        flat: function flat(/* depthArg = 1 */) {
            var depthArg = arguments.length ? arguments[0] : undefined;
            var O = toObject$2(this);
            var sourceLen = lengthOfArrayLike$3(O);
            var A = arraySpeciesCreate$1(O, 0);
            A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
            return A;
        }
    });

    var objectDefineProperties = {};

    var DESCRIPTORS = descriptors;
    var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
    var definePropertyModule$1 = objectDefineProperty;
    var anObject$1 = anObject$4;
    var toIndexedObject$1 = toIndexedObject$6;
    var objectKeys = objectKeys$2;

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es-x/no-object-defineproperties -- safe
    objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject$1(O);
        var props = toIndexedObject$1(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
        return O;
    };

    var getBuiltIn = getBuiltIn$5;

    var html$1 = getBuiltIn('document', 'documentElement');

    /* global ActiveXObject -- old IE, WSH */

    var anObject = anObject$4;
    var definePropertiesModule = objectDefineProperties;
    var enumBugKeys = enumBugKeys$3;
    var hiddenKeys = hiddenKeys$4;
    var html = html$1;
    var documentCreateElement = documentCreateElement$1;
    var sharedKey = sharedKey$2;

    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');

    var EmptyConstructor = function () { /* empty */
    };

    var scriptTag = function (content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    };

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak
        return temp;
    };

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        // https://github.com/zloirock/core-js/issues/475
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
    };

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    var activeXDocument;
    var NullProtoObject = function () {
        try {
            activeXDocument = new ActiveXObject('htmlfile');
        } catch (error) { /* ignore */
        }
        NullProtoObject = typeof document != 'undefined'
            ? document.domain && activeXDocument
                ? NullProtoObjectViaActiveX(activeXDocument) // old IE
                : NullProtoObjectViaIFrame()
            : NullProtoObjectViaActiveX(activeXDocument); // WSH
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
    };

    hiddenKeys[IE_PROTO] = true;

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    // eslint-disable-next-line es-x/no-object-create -- safe
    var objectCreate = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
    };

    var wellKnownSymbol = wellKnownSymbol$8;
    var create = objectCreate;
    var definePropertyModule = objectDefineProperty;

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype = Array.prototype;

    // Array.prototype[@@unscopables]
    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype[UNSCOPABLES] == undefined) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
        });
    }

    // add a key to Array.prototype[@@unscopables]
    var addToUnscopables$3 = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
    };

    // this method was added to unscopables after implementation
    // in popular engines, so it's moved to a separate module
    var addToUnscopables$2 = addToUnscopables$3;

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables$2('flat');

    var global$2 = global$s;
    var classof$1 = classof$3;

    var String$1 = global$2.String;

    var toString$2 = function (argument) {
        if (classof$1(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
        return String$1(argument);
    };

    var global$1 = global$s;
    var toAbsoluteIndex = toAbsoluteIndex$3;
    var lengthOfArrayLike$2 = lengthOfArrayLike$8;
    var createProperty = createProperty$3;

    var Array$1 = global$1.Array;
    var max = Math.max;

    var arraySliceSimple = function (O, start, end) {
        var length = lengthOfArrayLike$2(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        var result = Array$1(max(fin - k, 0));
        for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
        result.length = n;
        return result;
    };

    var arraySlice = arraySliceSimple;

    var floor = Math.floor;

    var mergeSort = function (array, comparefn) {
        var length = array.length;
        var middle = floor(length / 2);
        return length < 8 ? insertionSort(array, comparefn) : merge(
            array,
            mergeSort(arraySlice(array, 0, middle), comparefn),
            mergeSort(arraySlice(array, middle), comparefn),
            comparefn
        );
    };

    var insertionSort = function (array, comparefn) {
        var length = array.length;
        var i = 1;
        var element, j;

        while (i < length) {
            j = i;
            element = array[i];
            while (j && comparefn(array[j - 1], element) > 0) {
                array[j] = array[--j];
            }
            if (j !== i++) array[j] = element;
        }
        return array;
    };

    var merge = function (array, left, right, comparefn) {
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;

        while (lindex < llength || rindex < rlength) {
            array[lindex + rindex] = (lindex < llength && rindex < rlength)
                ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
                : lindex < llength ? left[lindex++] : right[rindex++];
        }
        return array;
    };

    var arraySort = mergeSort;

    var userAgent$1 = engineUserAgent;

    var firefox = userAgent$1.match(/firefox\/(\d+)/i);

    var engineFfVersion = !!firefox && +firefox[1];

    var UA = engineUserAgent;

    var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

    var userAgent = engineUserAgent;

    var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

    var engineWebkitVersion = !!webkit && +webkit[1];

    var $$5 = _export;
    var uncurryThis$2 = functionUncurryThis;
    var aCallable = aCallable$3;
    var toObject$1 = toObject$6;
    var lengthOfArrayLike$1 = lengthOfArrayLike$8;
    var toString$1 = toString$2;
    var fails$1 = fails$f;
    var internalSort = arraySort;
    var arrayMethodIsStrict$1 = arrayMethodIsStrict$3;
    var FF = engineFfVersion;
    var IE_OR_EDGE = engineIsIeOrEdge;
    var V8 = engineV8Version;
    var WEBKIT = engineWebkitVersion;

    var test = [];
    var un$Sort = uncurryThis$2(test.sort);
    var push$1 = uncurryThis$2(test.push);

    // IE8-
    var FAILS_ON_UNDEFINED = fails$1(function () {
        test.sort(undefined);
    });
    // V8 bug
    var FAILS_ON_NULL = fails$1(function () {
        test.sort(null);
    });
    // Old WebKit
    var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');

    var STABLE_SORT = !fails$1(function () {
        // feature detection can be too slow, so check engines versions
        if (V8) return V8 < 70;
        if (FF && FF > 3) return;
        if (IE_OR_EDGE) return true;
        if (WEBKIT) return WEBKIT < 603;

        var result = '';
        var code, chr, value, index;

        // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
        for (code = 65; code < 76; code++) {
            chr = String.fromCharCode(code);

            switch (code) {
                case 66:
                case 69:
                case 70:
                case 72:
                    value = 3;
                    break;
                case 68:
                case 71:
                    value = 4;
                    break;
                default:
                    value = 2;
            }

            for (index = 0; index < 47; index++) {
                test.push({k: chr + index, v: value});
            }
        }

        test.sort(function (a, b) {
            return b.v - a.v;
        });

        for (index = 0; index < test.length; index++) {
            chr = test[index].k.charAt(0);
            if (result.charAt(result.length - 1) !== chr) result += chr;
        }

        return result !== 'DGBEFHACIJK';
    });

    var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT;

    var getSortCompare = function (comparefn) {
        return function (x, y) {
            if (y === undefined) return -1;
            if (x === undefined) return 1;
            if (comparefn !== undefined) return +comparefn(x, y) || 0;
            return toString$1(x) > toString$1(y) ? 1 : -1;
        };
    };

    // `Array.prototype.sort` method
    // https://tc39.es/ecma262/#sec-array.prototype.sort
    $$5({target: 'Array', proto: true, forced: FORCED}, {
        sort: function sort(comparefn) {
            if (comparefn !== undefined) aCallable(comparefn);

            var array = toObject$1(this);

            if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

            var items = [];
            var arrayLength = lengthOfArrayLike$1(array);
            var itemsLength, index;

            for (index = 0; index < arrayLength; index++) {
                if (index in array) push$1(items, array[index]);
            }

            internalSort(items, getSortCompare(comparefn));

            itemsLength = items.length;
            index = 0;

            while (index < itemsLength) array[index] = items[index++];
            while (index < arrayLength) delete array[index++];

            return array;
        }
    });

    var $$4 = _export;
    var $includes = arrayIncludes.includes;
    var fails = fails$f;
    var addToUnscopables$1 = addToUnscopables$3;

    // FF99+ bug
    var BROKEN_ON_SPARSE = fails(function () {
        return !Array(1).includes();
    });

    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    $$4({target: 'Array', proto: true, forced: BROKEN_ON_SPARSE}, {
        includes: function includes(el /* , fromIndex = 0 */) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables$1('includes');

    var bind = functionBindContext;
    var uncurryThis$1 = functionUncurryThis;
    var IndexedObject$1 = indexedObject;
    var toObject = toObject$6;
    var lengthOfArrayLike = lengthOfArrayLike$8;
    var arraySpeciesCreate = arraySpeciesCreate$3;

    var push = uncurryThis$1([].push);

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    var createMethod = function (TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_REJECT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject$1(O);
            var boundFunction = bind(callbackfn, that);
            var length = lengthOfArrayLike(self);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
            var value, result;
            for (; length > index; index++) if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                    if (IS_MAP) target[index] = result; // map
                    else if (result) switch (TYPE) {
                        case 3:
                            return true;              // some
                        case 5:
                            return value;             // find
                        case 6:
                            return index;             // findIndex
                        case 2:
                            push(target, value);      // filter
                    } else switch (TYPE) {
                        case 4:
                            return false;             // every
                        case 7:
                            push(target, value);      // filterReject
                    }
                }
            }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
    };

    var arrayIteration = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod(7)
    };

    var $$3 = _export;
    var $find = arrayIteration.find;
    var addToUnscopables = addToUnscopables$3;

    var FIND = 'find';
    var SKIPS_HOLES = true;

    // Shouldn't skip holes
    if (FIND in []) Array(1)[FIND](function () {
        SKIPS_HOLES = false;
    });

    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    $$3({target: 'Array', proto: true, forced: SKIPS_HOLES}, {
        find: function find(callbackfn /* , that = undefined */) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables(FIND);

    var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
    var classof = classof$3;

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
        return '[object ' + classof(this) + ']';
    };

    var TO_STRING_TAG_SUPPORT = toStringTagSupport;
    var defineBuiltIn = defineBuiltIn$2;
    var toString = objectToString;

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
        defineBuiltIn(Object.prototype, 'toString', toString, {unsafe: true});
    }

    var $$2 = _export;
    var uncurryThis = functionUncurryThis;
    var IndexedObject = indexedObject;
    var toIndexedObject = toIndexedObject$6;
    var arrayMethodIsStrict = arrayMethodIsStrict$3;

    var un$Join = uncurryThis([].join);

    var ES3_STRINGS = IndexedObject != Object;
    var STRICT_METHOD = arrayMethodIsStrict('join', ',');

    // `Array.prototype.join` method
    // https://tc39.es/ecma262/#sec-array.prototype.join
    $$2({target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD}, {
        join: function join(separator) {
            return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
        }
    });

    var $$1 = _export;
    var $filter = arrayIteration.filter;
    var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

    var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    // with adding support of @@species
    $$1({target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1}, {
        filter: function filter(callbackfn /* , thisArg */) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var $ = _export;
    var $map = arrayIteration.map;
    var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $({target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT}, {
        map: function map(callbackfn /* , thisArg */) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    /**
     * @update zhixin wen <wenzhixin2010@gmail.com>
     */

    var Utils = $__default["default"].fn.bootstrapTable.utils;

    function printPageBuilderDefault(table) {
        return "\n  <html>\n  <head>\n  <style type=\"text/css\" media=\"print\">\n  @page {\n    size: auto;\n    margin: 25px 0 25px 0;\n  }\n  </style>\n  <style type=\"text/css\" media=\"all\">\n  table {\n    border-collapse: collapse;\n    font-size: 12px;\n  }\n  table, th, td {\n    border: 1px solid grey;\n  }\n  th, td {\n    text-align: center;\n    vertical-align: middle;\n  }\n  p {\n    font-weight: bold;\n    margin-left:20px;\n  }\n  table {\n    width:94%;\n    margin-left:3%;\n    margin-right:3%;\n  }\n  div.bs-table-print {\n    text-align:center;\n  }\n  </style>\n  </head>\n  <title>Print Table</title>\n  <body>\n  <p>Printed on: ".concat(new Date(), " </p>\n  <div class=\"bs-table-print\">").concat(table, "</div>\n  </body>\n  </html>");
    }

    $__default["default"].extend($__default["default"].fn.bootstrapTable.locales, {
        formatPrint: function formatPrint() {
            return 'Print';
        }
    });
    $__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales);
    $__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, {
        showPrint: false,
        printAsFilteredAndSortedOnUI: true,
        printSortColumn: undefined,
        printSortOrder: 'asc',
        printPageBuilder: function printPageBuilder(table) {
            return printPageBuilderDefault(table);
        }
    });
    $__default["default"].extend($__default["default"].fn.bootstrapTable.COLUMN_DEFAULTS, {
        printFilter: undefined,
        printIgnore: false,
        printFormatter: undefined
    });
    $__default["default"].extend($__default["default"].fn.bootstrapTable.defaults.icons, {
        print: {
            bootstrap3: 'glyphicon-print icon-share',
            bootstrap5: 'bi-printer',
            'bootstrap-table': 'icon-printer'
        }[$__default["default"].fn.bootstrapTable.theme] || 'fa-print'
    });

    $__default["default"].BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
        _inherits(_class, _$$BootstrapTable);

        var _super = _createSuper(_class);

        function _class() {
            _classCallCheck(this, _class);

            return _super.apply(this, arguments);
        }

        _createClass(_class, [{
            key: "init",
            value: function init() {
                var _get2;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));

                if (!this.options.showPrint) {
                    return;
                }

                this.mergedCells = [];
            }
        }, {
            key: "initToolbar",
            value: function initToolbar() {
                var _this = this,
                    _get3;

                this.showToolbar = this.showToolbar || this.options.showPrint;

                if (this.options.showPrint) {
                    this.buttons = Object.assign(this.buttons, {
                        print: {
                            text: this.options.formatPrint(),
                            icon: this.options.icons.print,
                            event: function event() {
                                _this.doPrint(_this.options.printAsFilteredAndSortedOnUI ? _this.getData() : _this.options.data.slice(0));
                            },
                            attributes: {
                                'aria-label': this.options.formatPrint(),
                                title: this.options.formatPrint()
                            }
                        }
                    });
                }

                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                (_get3 = _get(_getPrototypeOf(_class.prototype), "initToolbar", this)).call.apply(_get3, [this].concat(args));
            }
        }, {
            key: "mergeCells",
            value: function mergeCells(options) {
                _get(_getPrototypeOf(_class.prototype), "mergeCells", this).call(this, options);

                if (!this.options.showPrint) {
                    return;
                }

                var col = this.getVisibleFields().indexOf(options.field);

                if (Utils.hasDetailViewIcon(this.options)) {
                    col += 1;
                }

                this.mergedCells.push({
                    row: options.index,
                    col: col,
                    rowspan: options.rowspan || 1,
                    colspan: options.colspan || 1
                });
            }
        }, {
            key: "doPrint",
            value: function doPrint(data) {
                var _this2 = this;

                var formatValue = function formatValue(row, i, column) {
                    var value = Utils.calculateObjectValue(column, column.printFormatter || column.formatter, [row[column.field], row, i], row[column.field]);
                    return typeof value === 'undefined' || value === null ? _this2.options.undefinedText : value;
                };

                var buildTable = function buildTable(data, columnsArray) {
                    var dir = _this2.$el.attr('dir') || 'ltr';
                    var html = ["<table dir=\"".concat(dir, "\"><thead>")];

                    var _iterator = _createForOfIteratorHelper(columnsArray),
                        _step;

                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var _columns2 = _step.value;
                            html.push('<tr>');

                            for (var _h = 0; _h < _columns2.length; _h++) {
                                if (!_columns2[_h].printIgnore) {
                                    html.push("<th\n              ".concat(Utils.sprintf(' rowspan="%s"', _columns2[_h].rowspan), "\n              ").concat(Utils.sprintf(' colspan="%s"', _columns2[_h].colspan), "\n              >").concat(_columns2[_h].title, "</th>"));
                                }
                            }

                            html.push('</tr>');
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }

                    html.push('</thead><tbody>');
                    var dontRender = [];

                    if (_this2.mergedCells) {
                        for (var mc = 0; mc < _this2.mergedCells.length; mc++) {
                            var currentMergedCell = _this2.mergedCells[mc];

                            for (var rs = 0; rs < currentMergedCell.rowspan; rs++) {
                                var row = currentMergedCell.row + rs;

                                for (var cs = 0; cs < currentMergedCell.colspan; cs++) {
                                    var col = currentMergedCell.col + cs;
                                    dontRender.push("".concat(row, ",").concat(col));
                                }
                            }
                        }
                    }

                    for (var i = 0; i < data.length; i++) {
                        html.push('<tr>');
                        var columns = columnsArray.flat(1);
                        columns.sort(function (c1, c2) {
                            return c1.colspanIndex - c2.colspanIndex;
                        });

                        for (var j = 0; j < columns.length; j++) {
                            if (columns[j].colspanGroup > 0) continue;
                            var rowspan = 0;
                            var colspan = 0;

                            if (_this2.mergedCells) {
                                for (var _mc = 0; _mc < _this2.mergedCells.length; _mc++) {
                                    var _currentMergedCell = _this2.mergedCells[_mc];

                                    if (_currentMergedCell.col === j && _currentMergedCell.row === i) {
                                        rowspan = _currentMergedCell.rowspan;
                                        colspan = _currentMergedCell.colspan;
                                    }
                                }
                            }

                            if (!columns[j].printIgnore && columns[j].field && (!dontRender.includes("".concat(i, ",").concat(j)) || rowspan > 0 && colspan > 0)) {
                                if (rowspan > 0 && colspan > 0) {
                                    html.push("<td ".concat(Utils.sprintf(' rowspan="%s"', rowspan), " ").concat(Utils.sprintf(' colspan="%s"', colspan), ">"), formatValue(data[i], i, columns[j]), '</td>');
                                } else {
                                    html.push('<td>', formatValue(data[i], i, columns[j]), '</td>');
                                }
                            }
                        }

                        html.push('</tr>');
                    }

                    html.push('</tbody>');

                    if (_this2.options.showFooter) {
                        html.push('<footer><tr>');

                        var _iterator2 = _createForOfIteratorHelper(columnsArray),
                            _step2;

                        try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var _columns = _step2.value;

                                for (var h = 0; h < _columns.length; h++) {
                                    if (!_columns[h].printIgnore) {
                                        var footerData = Utils.trToData(_columns, _this2.$el.find('>tfoot>tr'));
                                        var footerValue = Utils.calculateObjectValue(_columns[h], _columns[h].footerFormatter, [data], footerData[0] && footerData[0][_columns[h].field] || '');
                                        html.push("<th>".concat(footerValue, "</th>"));
                                    }
                                }
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally {
                            _iterator2.f();
                        }

                        html.push('</tr></footer>');
                    }

                    html.push('</table>');
                    return html.join('');
                };

                var sortRows = function sortRows(data, colName, sortOrder) {
                    if (!colName) {
                        return data;
                    }

                    var reverse = sortOrder !== 'asc';
                    reverse = -(+reverse || -1);
                    return data.sort(function (a, b) {
                        return reverse * a[colName].localeCompare(b[colName]);
                    });
                };

                var filterRow = function filterRow(row, filters) {
                    for (var index = 0; index < filters.length; ++index) {
                        if (row[filters[index].colName] !== filters[index].value) {
                            return false;
                        }
                    }

                    return true;
                };

                var filterRows = function filterRows(data, filters) {
                    return data.filter(function (row) {
                        return filterRow(row, filters);
                    });
                };

                var getColumnFilters = function getColumnFilters(columns) {
                    return !columns || !columns[0] ? [] : columns[0].filter(function (col) {
                        return col.printFilter;
                    }).map(function (col) {
                        return {
                            colName: col.field,
                            value: col.printFilter
                        };
                    });
                };

                data = filterRows(data, getColumnFilters(this.options.columns));
                data = sortRows(data, this.options.printSortColumn, this.options.printSortOrder);
                var table = buildTable(data, this.options.columns);
                var newWin = window.open('');
                var calculatedPrintPage = Utils.calculateObjectValue(this, this.options.printPageBuilder, [table], printPageBuilderDefault(table));
                newWin.document.write(calculatedPrintPage);
                newWin.document.close();
                newWin.focus();
                newWin.print();
                newWin.close();
            }
        }]);

        return _class;
    }($__default["default"].BootstrapTable);

}));
