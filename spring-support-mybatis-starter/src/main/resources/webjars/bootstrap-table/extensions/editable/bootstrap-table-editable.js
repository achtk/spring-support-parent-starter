(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
        typeof define === 'function' && define.amd ? define(['jquery'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$6) {
    'use strict';

    function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
    }

    var $__default = /*#__PURE__*/_interopDefaultLegacy($$6);

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

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;

        var _s, _e;

        try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
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

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    var global$t =
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

    var fails$h = function (exec) {
        try {
            return !!exec();
        } catch (error) {
            return true;
        }
    };

    var fails$g = fails$h;

    // Detect IE8's incomplete defineProperty implementation
    var descriptors = !fails$g(function () {
        // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
        return Object.defineProperty({}, 1, {
            get: function () {
                return 7;
            }
        })[1] != 7;
    });

    var fails$f = fails$h;

    var functionBindNative = !fails$f(function () {
        // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
        var test = (function () { /* empty */
        }).bind();
        // eslint-disable-next-line no-prototype-builtins -- safe
        return typeof test != 'function' || test.hasOwnProperty('prototype');
    });

    var NATIVE_BIND$3 = functionBindNative;

    var call$8 = Function.prototype.call;

    var functionCall = NATIVE_BIND$3 ? call$8.bind(call$8) : function () {
        return call$8.apply(call$8, arguments);
    };

    var objectPropertyIsEnumerable = {};

    var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({1: 2}, 1);

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor$1(this, V);
        return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable$1;

    var createPropertyDescriptor$3 = function (bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };

    var NATIVE_BIND$2 = functionBindNative;

    var FunctionPrototype$2 = Function.prototype;
    var bind$2 = FunctionPrototype$2.bind;
    var call$7 = FunctionPrototype$2.call;
    var uncurryThis$k = NATIVE_BIND$2 && bind$2.bind(call$7, call$7);

    var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
        return fn && uncurryThis$k(fn);
    } : function (fn) {
        return fn && function () {
            return call$7.apply(fn, arguments);
        };
    };

    var uncurryThis$j = functionUncurryThis;

    var toString$6 = uncurryThis$j({}.toString);
    var stringSlice$4 = uncurryThis$j(''.slice);

    var classofRaw$1 = function (it) {
        return stringSlice$4(toString$6(it), 8, -1);
    };

    var global$s = global$t;
    var uncurryThis$i = functionUncurryThis;
    var fails$e = fails$h;
    var classof$6 = classofRaw$1;

    var Object$4 = global$s.Object;
    var split = uncurryThis$i(''.split);

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var indexedObject = fails$e(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins -- safe
        return !Object$4('z').propertyIsEnumerable(0);
    }) ? function (it) {
        return classof$6(it) == 'String' ? split(it, '') : Object$4(it);
    } : Object$4;

    var global$r = global$t;

    var TypeError$9 = global$r.TypeError;

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible$4 = function (it) {
        if (it == undefined) throw TypeError$9("Can't call method on " + it);
        return it;
    };

    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject$2 = indexedObject;
    var requireObjectCoercible$3 = requireObjectCoercible$4;

    var toIndexedObject$6 = function (it) {
        return IndexedObject$2(requireObjectCoercible$3(it));
    };

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    var isCallable$e = function (argument) {
        return typeof argument == 'function';
    };

    var isCallable$d = isCallable$e;

    var isObject$7 = function (it) {
        return typeof it == 'object' ? it !== null : isCallable$d(it);
    };

    var global$q = global$t;
    var isCallable$c = isCallable$e;

    var aFunction = function (argument) {
        return isCallable$c(argument) ? argument : undefined;
    };

    var getBuiltIn$5 = function (namespace, method) {
        return arguments.length < 2 ? aFunction(global$q[namespace]) : global$q[namespace] && global$q[namespace][method];
    };

    var uncurryThis$h = functionUncurryThis;

    var objectIsPrototypeOf = uncurryThis$h({}.isPrototypeOf);

    var getBuiltIn$4 = getBuiltIn$5;

    var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

    var global$p = global$t;
    var userAgent = engineUserAgent;

    var process = global$p.process;
    var Deno = global$p.Deno;
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
    if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = +match[1];
        }
    }

    var engineV8Version = version;

    /* eslint-disable es-x/no-symbol -- required for testing */

    var V8_VERSION$2 = engineV8Version;
    var fails$d = fails$h;

    // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$d(function () {
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

    var global$o = global$t;
    var getBuiltIn$3 = getBuiltIn$5;
    var isCallable$b = isCallable$e;
    var isPrototypeOf = objectIsPrototypeOf;
    var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

    var Object$3 = global$o.Object;

    var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
        return typeof it == 'symbol';
    } : function (it) {
        var $Symbol = getBuiltIn$3('Symbol');
        return isCallable$b($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
    };

    var global$n = global$t;

    var String$3 = global$n.String;

    var tryToString$1 = function (argument) {
        try {
            return String$3(argument);
        } catch (error) {
            return 'Object';
        }
    };

    var global$m = global$t;
    var isCallable$a = isCallable$e;
    var tryToString = tryToString$1;

    var TypeError$8 = global$m.TypeError;

    // `Assert: IsCallable(argument) is true`
    var aCallable$2 = function (argument) {
        if (isCallable$a(argument)) return argument;
        throw TypeError$8(tryToString(argument) + ' is not a function');
    };

    var aCallable$1 = aCallable$2;

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    var getMethod$2 = function (V, P) {
        var func = V[P];
        return func == null ? undefined : aCallable$1(func);
    };

    var global$l = global$t;
    var call$6 = functionCall;
    var isCallable$9 = isCallable$e;
    var isObject$6 = isObject$7;

    var TypeError$7 = global$l.TypeError;

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    var ordinaryToPrimitive$1 = function (input, pref) {
        var fn, val;
        if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$6(val = call$6(fn, input))) return val;
        if (isCallable$9(fn = input.valueOf) && !isObject$6(val = call$6(fn, input))) return val;
        if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$6(val = call$6(fn, input))) return val;
        throw TypeError$7("Can't convert object to primitive value");
    };

    var shared$4 = {exports: {}};

    var global$k = global$t;

    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var defineProperty$1 = Object.defineProperty;

    var setGlobal$3 = function (key, value) {
        try {
            defineProperty$1(global$k, key, {value: value, configurable: true, writable: true});
        } catch (error) {
            global$k[key] = value;
        }
        return value;
    };

    var global$j = global$t;
    var setGlobal$2 = setGlobal$3;

    var SHARED = '__core-js_shared__';
    var store$3 = global$j[SHARED] || setGlobal$2(SHARED, {});

    var sharedStore = store$3;

    var store$2 = sharedStore;

    (shared$4.exports = function (key, value) {
        return store$2[key] || (store$2[key] = value !== undefined ? value : {});
    })('versions', []).push({
        version: '3.22.5',
        mode: 'global',
        copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE',
        source: 'https://github.com/zloirock/core-js'
    });

    var global$i = global$t;
    var requireObjectCoercible$2 = requireObjectCoercible$4;

    var Object$2 = global$i.Object;

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    var toObject$4 = function (argument) {
        return Object$2(requireObjectCoercible$2(argument));
    };

    var uncurryThis$g = functionUncurryThis;
    var toObject$3 = toObject$4;

    var hasOwnProperty = uncurryThis$g({}.hasOwnProperty);

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es-x/no-object-hasown -- safe
    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject$3(it), key);
    };

    var uncurryThis$f = functionUncurryThis;

    var id = 0;
    var postfix = Math.random();
    var toString$5 = uncurryThis$f(1.0.toString);

    var uid$2 = function (key) {
        return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
    };

    var global$h = global$t;
    var shared$3 = shared$4.exports;
    var hasOwn$6 = hasOwnProperty_1;
    var uid$1 = uid$2;
    var NATIVE_SYMBOL = nativeSymbol;
    var USE_SYMBOL_AS_UID = useSymbolAsUid;

    var WellKnownSymbolsStore = shared$3('wks');
    var Symbol$1 = global$h.Symbol;
    var symbolFor = Symbol$1 && Symbol$1['for'];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

    var wellKnownSymbol$9 = function (name) {
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

    var global$g = global$t;
    var call$5 = functionCall;
    var isObject$5 = isObject$7;
    var isSymbol$1 = isSymbol$2;
    var getMethod$1 = getMethod$2;
    var ordinaryToPrimitive = ordinaryToPrimitive$1;
    var wellKnownSymbol$8 = wellKnownSymbol$9;

    var TypeError$6 = global$g.TypeError;
    var TO_PRIMITIVE = wellKnownSymbol$8('toPrimitive');

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    var toPrimitive$1 = function (input, pref) {
        if (!isObject$5(input) || isSymbol$1(input)) return input;
        var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call$5(exoticToPrim, input, pref);
            if (!isObject$5(result) || isSymbol$1(result)) return result;
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

    var global$f = global$t;
    var isObject$4 = isObject$7;

    var document$1 = global$f.document;
    // typeof document.createElement is 'object' in old IE
    var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

    var documentCreateElement$1 = function (it) {
        return EXISTS$1 ? document$1.createElement(it) : {};
    };

    var DESCRIPTORS$8 = descriptors;
    var fails$c = fails$h;
    var createElement = documentCreateElement$1;

    // Thanks to IE8 for its funny defineProperty
    var ie8DomDefine = !DESCRIPTORS$8 && !fails$c(function () {
        // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
        return Object.defineProperty(createElement('div'), 'a', {
            get: function () {
                return 7;
            }
        }).a != 7;
    });

    var DESCRIPTORS$7 = descriptors;
    var call$4 = functionCall;
    var propertyIsEnumerableModule = objectPropertyIsEnumerable;
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
        if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
    };

    var objectDefineProperty = {};

    var DESCRIPTORS$6 = descriptors;
    var fails$b = fails$h;

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$b(function () {
        // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
        return Object.defineProperty(function () { /* empty */
        }, 'prototype', {
            value: 42,
            writable: false
        }).prototype != 42;
    });

    var global$e = global$t;
    var isObject$3 = isObject$7;

    var String$2 = global$e.String;
    var TypeError$5 = global$e.TypeError;

    // `Assert: Type(argument) is Object`
    var anObject$7 = function (argument) {
        if (isObject$3(argument)) return argument;
        throw TypeError$5(String$2(argument) + ' is not an object');
    };

    var global$d = global$t;
    var DESCRIPTORS$5 = descriptors;
    var IE8_DOM_DEFINE = ie8DomDefine;
    var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
    var anObject$6 = anObject$7;
    var toPropertyKey$1 = toPropertyKey$3;

    var TypeError$4 = global$d.TypeError;
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
        anObject$6(O);
        P = toPropertyKey$1(P);
        anObject$6(Attributes);
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
        anObject$6(O);
        P = toPropertyKey$1(P);
        anObject$6(Attributes);
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

    var createNonEnumerableProperty$4 = DESCRIPTORS$4 ? function (object, key, value) {
        return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
    } : function (object, key, value) {
        object[key] = value;
        return object;
    };

    var makeBuiltIn$2 = {exports: {}};

    var DESCRIPTORS$3 = descriptors;
    var hasOwn$4 = hasOwnProperty_1;

    var FunctionPrototype$1 = Function.prototype;
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

    var EXISTS = hasOwn$4(FunctionPrototype$1, 'name');
    // additional protection from minified / mangled / dropped function names
    var PROPER = EXISTS && (function something() { /* empty */
    }).name === 'something';
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

    var functionName = {
        EXISTS: EXISTS,
        PROPER: PROPER,
        CONFIGURABLE: CONFIGURABLE
    };

    var uncurryThis$e = functionUncurryThis;
    var isCallable$8 = isCallable$e;
    var store$1 = sharedStore;

    var functionToString = uncurryThis$e(Function.toString);

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable$8(store$1.inspectSource)) {
        store$1.inspectSource = function (it) {
            return functionToString(it);
        };
    }

    var inspectSource$3 = store$1.inspectSource;

    var global$c = global$t;
    var isCallable$7 = isCallable$e;
    var inspectSource$2 = inspectSource$3;

    var WeakMap$1 = global$c.WeakMap;

    var nativeWeakMap = isCallable$7(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

    var shared$2 = shared$4.exports;
    var uid = uid$2;

    var keys = shared$2('keys');

    var sharedKey$2 = function (key) {
        return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys$4 = {};

    var NATIVE_WEAK_MAP = nativeWeakMap;
    var global$b = global$t;
    var uncurryThis$d = functionUncurryThis;
    var isObject$2 = isObject$7;
    var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
    var hasOwn$3 = hasOwnProperty_1;
    var shared$1 = sharedStore;
    var sharedKey$1 = sharedKey$2;
    var hiddenKeys$3 = hiddenKeys$4;

    var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
    var TypeError$3 = global$b.TypeError;
    var WeakMap = global$b.WeakMap;
    var set, get, has;

    var enforce = function (it) {
        return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function (TYPE) {
        return function (it) {
            var state;
            if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
                throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
            }
            return state;
        };
    };

    if (NATIVE_WEAK_MAP || shared$1.state) {
        var store = shared$1.state || (shared$1.state = new WeakMap());
        var wmget = uncurryThis$d(store.get);
        var wmhas = uncurryThis$d(store.has);
        var wmset = uncurryThis$d(store.set);
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
            createNonEnumerableProperty$3(it, STATE, metadata);
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

    var fails$a = fails$h;
    var isCallable$6 = isCallable$e;
    var hasOwn$2 = hasOwnProperty_1;
    var DESCRIPTORS$2 = descriptors;
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
    var inspectSource$1 = inspectSource$3;
    var InternalStateModule = internalState;

    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState$1 = InternalStateModule.get;
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var defineProperty = Object.defineProperty;

    var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$a(function () {
        return defineProperty(function () { /* empty */
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
            defineProperty(value, 'name', {value: name, configurable: true});
        }
        if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
            defineProperty(value, 'length', {value: options.arity});
        }
        if (options && hasOwn$2(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS$2) try {
                defineProperty(value, 'prototype', {writable: false});
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
        return isCallable$6(this) && getInternalState$1(this).source || inspectSource$1(this);
    }, 'toString');

    var global$a = global$t;
    var isCallable$5 = isCallable$e;
    var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
    var makeBuiltIn = makeBuiltIn$2.exports;
    var setGlobal$1 = setGlobal$3;

    var defineBuiltIn$3 = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== undefined ? options.name : key;
        if (isCallable$5(value)) makeBuiltIn(value, name, options);
        if (O === global$a) {
            if (simple) O[key] = value;
            else setGlobal$1(key, value);
            return O;
        } else if (!unsafe) {
            delete O[key];
        } else if (!noTargetGet && O[key]) {
            simple = true;
        }
        if (simple) O[key] = value;
        else createNonEnumerableProperty$2(O, key, value);
        return O;
    };

    var objectGetOwnPropertyNames = {};

    var ceil = Math.ceil;
    var floor$1 = Math.floor;

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    var toIntegerOrInfinity$4 = function (argument) {
        var number = +argument;
        // eslint-disable-next-line no-self-compare -- safe
        return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
    };

    var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

    var max$1 = Math.max;
    var min$2 = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    var toAbsoluteIndex$1 = function (index, length) {
        var integer = toIntegerOrInfinity$3(index);
        return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
    };

    var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

    var min$1 = Math.min;

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    var toLength$2 = function (argument) {
        return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    var toLength$1 = toLength$2;

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    var lengthOfArrayLike$3 = function (obj) {
        return toLength$1(obj.length);
    };

    var toIndexedObject$4 = toIndexedObject$6;
    var toAbsoluteIndex = toAbsoluteIndex$1;
    var lengthOfArrayLike$2 = lengthOfArrayLike$3;

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod$3 = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
            var O = toIndexedObject$4($this);
            var length = lengthOfArrayLike$2(O);
            var index = toAbsoluteIndex(fromIndex, length);
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
        includes: createMethod$3(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod$3(false)
    };

    var uncurryThis$c = functionUncurryThis;
    var hasOwn$1 = hasOwnProperty_1;
    var toIndexedObject$3 = toIndexedObject$6;
    var indexOf$1 = arrayIncludes.indexOf;
    var hiddenKeys$2 = hiddenKeys$4;

    var push$3 = uncurryThis$c([].push);

    var objectKeysInternal = function (object, names) {
        var O = toIndexedObject$3(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$3(result, key);
        // Don't enum bug & hidden keys
        while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
            ~indexOf$1(result, key) || push$3(result, key);
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
    var uncurryThis$b = functionUncurryThis;
    var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
    var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
    var anObject$5 = anObject$7;

    var concat$1 = uncurryThis$b([].concat);

    // all object keys, includes non-enumerable and symbols
    var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject$5(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
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

    var fails$9 = fails$h;
    var isCallable$4 = isCallable$e;

    var replacement = /#|\.prototype\./;

    var isForced$1 = function (feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true
            : value == NATIVE ? false
                : isCallable$4(detection) ? fails$9(detection)
                    : !!detection;
    };

    var normalize = isForced$1.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced$1.data = {};
    var NATIVE = isForced$1.NATIVE = 'N';
    var POLYFILL = isForced$1.POLYFILL = 'P';

    var isForced_1 = isForced$1;

    var global$9 = global$t;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
    var defineBuiltIn$2 = defineBuiltIn$3;
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
            target = global$9;
        } else if (STATIC) {
            target = global$9[TARGET] || setGlobal(TARGET, {});
        } else {
            target = (global$9[TARGET] || {}).prototype;
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
                createNonEnumerableProperty$1(sourceProperty, 'sham', true);
            }
            defineBuiltIn$2(target, key, sourceProperty, options);
        }
    };

    var wellKnownSymbol$7 = wellKnownSymbol$9;

    var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');
    var test = {};

    test[TO_STRING_TAG$1] = 'z';

    var toStringTagSupport = String(test) === '[object z]';

    var global$8 = global$t;
    var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
    var isCallable$3 = isCallable$e;
    var classofRaw = classofRaw$1;
    var wellKnownSymbol$6 = wellKnownSymbol$9;

    var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
    var Object$1 = global$8.Object;

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
    var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
            // @@toStringTag case
            : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag
                // builtinTag case
                : CORRECT_ARGUMENTS ? classofRaw(O)
                    // ES3 arguments fallback
                    : (result = classofRaw(O)) == 'Object' && isCallable$3(O.callee) ? 'Arguments' : result;
    };

    var global$7 = global$t;
    var classof$4 = classof$5;

    var String$1 = global$7.String;

    var toString$4 = function (argument) {
        if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
        return String$1(argument);
    };

    var anObject$4 = anObject$7;

    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    var regexpFlags$1 = function () {
        var that = anObject$4(this);
        var result = '';
        if (that.hasIndices) result += 'd';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.dotAll) result += 's';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
    };

    var fails$8 = fails$h;
    var global$6 = global$t;

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var $RegExp$2 = global$6.RegExp;

    var UNSUPPORTED_Y$1 = fails$8(function () {
        var re = $RegExp$2('a', 'y');
        re.lastIndex = 2;
        return re.exec('abcd') != null;
    });

    // UC Browser bug
    // https://github.com/zloirock/core-js/issues/1008
    var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$8(function () {
        return !$RegExp$2('a', 'y').sticky;
    });

    var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$8(function () {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
        var re = $RegExp$2('^r', 'gy');
        re.lastIndex = 2;
        return re.exec('str') != null;
    });

    var regexpStickyHelpers = {
        BROKEN_CARET: BROKEN_CARET,
        MISSED_STICKY: MISSED_STICKY,
        UNSUPPORTED_Y: UNSUPPORTED_Y$1
    };

    var objectDefineProperties = {};

    var internalObjectKeys = objectKeysInternal;
    var enumBugKeys$1 = enumBugKeys$3;

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es-x/no-object-keys -- safe
    var objectKeys$2 = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys$1);
    };

    var DESCRIPTORS$1 = descriptors;
    var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
    var definePropertyModule$2 = objectDefineProperty;
    var anObject$3 = anObject$7;
    var toIndexedObject$2 = toIndexedObject$6;
    var objectKeys$1 = objectKeys$2;

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es-x/no-object-defineproperties -- safe
    objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject$3(O);
        var props = toIndexedObject$2(Properties);
        var keys = objectKeys$1(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
        return O;
    };

    var getBuiltIn$1 = getBuiltIn$5;

    var html$1 = getBuiltIn$1('document', 'documentElement');

    /* global ActiveXObject -- old IE, WSH */

    var anObject$2 = anObject$7;
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
            EmptyConstructor[PROTOTYPE] = anObject$2(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
    };

    var fails$7 = fails$h;
    var global$5 = global$t;

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var $RegExp$1 = global$5.RegExp;

    var regexpUnsupportedDotAll = fails$7(function () {
        var re = $RegExp$1('.', 's');
        return !(re.dotAll && re.exec('\n') && re.flags === 's');
    });

    var fails$6 = fails$h;
    var global$4 = global$t;

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
    var $RegExp = global$4.RegExp;

    var regexpUnsupportedNcg = fails$6(function () {
        var re = $RegExp('(?<a>b)', 'g');
        return re.exec('b').groups.a !== 'b' ||
            'b'.replace(re, '$<a>c') !== 'bc';
    });

    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
    /* eslint-disable regexp/no-useless-quantifier -- testing */
    var call$3 = functionCall;
    var uncurryThis$a = functionUncurryThis;
    var toString$3 = toString$4;
    var regexpFlags = regexpFlags$1;
    var stickyHelpers = regexpStickyHelpers;
    var shared = shared$4.exports;
    var create$1 = objectCreate;
    var getInternalState = internalState.get;
    var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
    var UNSUPPORTED_NCG = regexpUnsupportedNcg;

    var nativeReplace = shared('native-string-replace', String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt$3 = uncurryThis$a(''.charAt);
    var indexOf = uncurryThis$a(''.indexOf);
    var replace$1 = uncurryThis$a(''.replace);
    var stringSlice$3 = uncurryThis$a(''.slice);

    var UPDATES_LAST_INDEX_WRONG = (function () {
        var re1 = /a/;
        var re2 = /b*/g;
        call$3(nativeExec, re1, 'a');
        call$3(nativeExec, re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    })();

    var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

    if (PATCH) {
        patchedExec = function exec(string) {
            var re = this;
            var state = getInternalState(re);
            var str = toString$3(string);
            var raw = state.raw;
            var result, reCopy, lastIndex, match, i, object, group;

            if (raw) {
                raw.lastIndex = re.lastIndex;
                result = call$3(patchedExec, raw, str);
                re.lastIndex = raw.lastIndex;
                return result;
            }

            var groups = state.groups;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = call$3(regexpFlags, re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;

            if (sticky) {
                flags = replace$1(flags, 'y', '');
                if (indexOf(flags, 'g') === -1) {
                    flags += 'g';
                }

                strCopy = stringSlice$3(str, re.lastIndex);
                // Support anchored sticky behavior.
                if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
                    source = '(?: ' + source + ')';
                    strCopy = ' ' + strCopy;
                    charsAdded++;
                }
                // ^(? + rx + ) is needed, in combination with some str slicing, to
                // simulate the 'y' flag.
                reCopy = new RegExp('^(?:' + source + ')', flags);
            }

            if (NPCG_INCLUDED) {
                reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
            }
            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

            match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

            if (sticky) {
                if (match) {
                    match.input = stringSlice$3(match.input, charsAdded);
                    match[0] = stringSlice$3(match[0], charsAdded);
                    match.index = re.lastIndex;
                    re.lastIndex += match[0].length;
                } else re.lastIndex = 0;
            } else if (UPDATES_LAST_INDEX_WRONG && match) {
                re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
                // Fix browsers whose `exec` methods don't consistently return `undefined`
                // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                call$3(nativeReplace, match[0], reCopy, function () {
                    for (i = 1; i < arguments.length - 2; i++) {
                        if (arguments[i] === undefined) match[i] = undefined;
                    }
                });
            }

            if (match && groups) {
                match.groups = object = create$1(null);
                for (i = 0; i < groups.length; i++) {
                    group = groups[i];
                    object[group[0]] = match[group[1]];
                }
            }

            return match;
        };
    }

    var regexpExec$2 = patchedExec;

    var $$5 = _export;
    var exec$1 = regexpExec$2;

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    $$5({target: 'RegExp', proto: true, forced: /./.exec !== exec$1}, {
        exec: exec$1
    });

    var NATIVE_BIND$1 = functionBindNative;

    var FunctionPrototype = Function.prototype;
    var apply$1 = FunctionPrototype.apply;
    var call$2 = FunctionPrototype.call;

    // eslint-disable-next-line es-x/no-reflect -- safe
    var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$2.bind(apply$1) : function () {
        return call$2.apply(apply$1, arguments);
    });

    // TODO: Remove from `core-js@4` since it's moved to entry points

    var uncurryThis$9 = functionUncurryThis;
    var defineBuiltIn$1 = defineBuiltIn$3;
    var regexpExec$1 = regexpExec$2;
    var fails$5 = fails$h;
    var wellKnownSymbol$5 = wellKnownSymbol$9;
    var createNonEnumerableProperty = createNonEnumerableProperty$4;

    var SPECIES$2 = wellKnownSymbol$5('species');
    var RegExpPrototype = RegExp.prototype;

    var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
        var SYMBOL = wellKnownSymbol$5(KEY);

        var DELEGATES_TO_SYMBOL = !fails$5(function () {
            // String methods call symbol-named RegEp methods
            var O = {};
            O[SYMBOL] = function () {
                return 7;
            };
            return ''[KEY](O) != 7;
        });

        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
            // Symbol-named RegExp methods call .exec
            var execCalled = false;
            var re = /a/;

            if (KEY === 'split') {
                // We can't use real regex here since it causes deoptimization
                // and serious performance degradation in V8
                // https://github.com/zloirock/core-js/issues/306
                re = {};
                // RegExp[@@split] doesn't call the regex's exec method, but first creates
                // a new one. We need to return the patched regex when creating the new one.
                re.constructor = {};
                re.constructor[SPECIES$2] = function () {
                    return re;
                };
                re.flags = '';
                re[SYMBOL] = /./[SYMBOL];
            }

            re.exec = function () {
                execCalled = true;
                return null;
            };

            re[SYMBOL]('');
            return !execCalled;
        });

        if (
            !DELEGATES_TO_SYMBOL ||
            !DELEGATES_TO_EXEC ||
            FORCED
        ) {
            var uncurriedNativeRegExpMethod = uncurryThis$9(/./[SYMBOL]);
            var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
                var uncurriedNativeMethod = uncurryThis$9(nativeMethod);
                var $exec = regexp.exec;
                if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
                    if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                        // The native String method already delegates to @@method (this
                        // polyfilled function), leasing to infinite recursion.
                        // We avoid it by directly calling the native @@method method.
                        return {done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2)};
                    }
                    return {done: true, value: uncurriedNativeMethod(str, regexp, arg2)};
                }
                return {done: false};
            });

            defineBuiltIn$1(String.prototype, KEY, methods[0]);
            defineBuiltIn$1(RegExpPrototype, SYMBOL, methods[1]);
        }

        if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
    };

    var uncurryThis$8 = functionUncurryThis;
    var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
    var toString$2 = toString$4;
    var requireObjectCoercible$1 = requireObjectCoercible$4;

    var charAt$2 = uncurryThis$8(''.charAt);
    var charCodeAt = uncurryThis$8(''.charCodeAt);
    var stringSlice$2 = uncurryThis$8(''.slice);

    var createMethod$2 = function (CONVERT_TO_STRING) {
        return function ($this, pos) {
            var S = toString$2(requireObjectCoercible$1($this));
            var position = toIntegerOrInfinity$1(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
            first = charCodeAt(S, position);
            return first < 0xD800 || first > 0xDBFF || position + 1 === size
            || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
                ? CONVERT_TO_STRING
                    ? charAt$2(S, position)
                    : first
                : CONVERT_TO_STRING
                    ? stringSlice$2(S, position, position + 2)
                    : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
        };
    };

    var stringMultibyte = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod$2(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod$2(true)
    };

    var charAt$1 = stringMultibyte.charAt;

    // `AdvanceStringIndex` abstract operation
    // https://tc39.es/ecma262/#sec-advancestringindex
    var advanceStringIndex$1 = function (S, index, unicode) {
        return index + (unicode ? charAt$1(S, index).length : 1);
    };

    var uncurryThis$7 = functionUncurryThis;
    var toObject$2 = toObject$4;

    var floor = Math.floor;
    var charAt = uncurryThis$7(''.charAt);
    var replace = uncurryThis$7(''.replace);
    var stringSlice$1 = uncurryThis$7(''.slice);
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

    // `GetSubstitution` abstract operation
    // https://tc39.es/ecma262/#sec-getsubstitution
    var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
            namedCaptures = toObject$2(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
        }
        return replace(replacement, symbols, function (match, ch) {
            var capture;
            switch (charAt(ch, 0)) {
                case '$':
                    return '$';
                case '&':
                    return matched;
                case '`':
                    return stringSlice$1(str, 0, position);
                case "'":
                    return stringSlice$1(str, tailPos);
                case '<':
                    capture = namedCaptures[stringSlice$1(ch, 1, -1)];
                    break;
                default: // \d\d?
                    var n = +ch;
                    if (n === 0) return match;
                    if (n > m) {
                        var f = floor(n / 10);
                        if (f === 0) return match;
                        if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                        return match;
                    }
                    capture = captures[n - 1];
            }
            return capture === undefined ? '' : capture;
        });
    };

    var global$3 = global$t;
    var call$1 = functionCall;
    var anObject$1 = anObject$7;
    var isCallable$2 = isCallable$e;
    var classof$3 = classofRaw$1;
    var regexpExec = regexpExec$2;

    var TypeError$2 = global$3.TypeError;

    // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec
    var regexpExecAbstract = function (R, S) {
        var exec = R.exec;
        if (isCallable$2(exec)) {
            var result = call$1(exec, R, S);
            if (result !== null) anObject$1(result);
            return result;
        }
        if (classof$3(R) === 'RegExp') return call$1(regexpExec, R, S);
        throw TypeError$2('RegExp#exec called on incompatible receiver');
    };

    var apply = functionApply;
    var call = functionCall;
    var uncurryThis$6 = functionUncurryThis;
    var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
    var fails$4 = fails$h;
    var anObject = anObject$7;
    var isCallable$1 = isCallable$e;
    var toIntegerOrInfinity = toIntegerOrInfinity$4;
    var toLength = toLength$2;
    var toString$1 = toString$4;
    var requireObjectCoercible = requireObjectCoercible$4;
    var advanceStringIndex = advanceStringIndex$1;
    var getMethod = getMethod$2;
    var getSubstitution = getSubstitution$1;
    var regExpExec = regexpExecAbstract;
    var wellKnownSymbol$4 = wellKnownSymbol$9;

    var REPLACE = wellKnownSymbol$4('replace');
    var max = Math.max;
    var min = Math.min;
    var concat = uncurryThis$6([].concat);
    var push$2 = uncurryThis$6([].push);
    var stringIndexOf = uncurryThis$6(''.indexOf);
    var stringSlice = uncurryThis$6(''.slice);

    var maybeToString = function (it) {
        return it === undefined ? it : String(it);
    };

    // IE <= 11 replaces $0 with the whole match, as if it was $&
    // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
    var REPLACE_KEEPS_$0 = (function () {
        // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
        return 'a'.replace(/./, '$0') === '$0';
    })();

    // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
        if (/./[REPLACE]) {
            return /./[REPLACE]('a', '$0') === '';
        }
        return false;
    })();

    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function () {
        var re = /./;
        re.exec = function () {
            var result = [];
            result.groups = {a: '7'};
            return result;
        };
        // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
        return ''.replace(re, '$<a>') !== '7';
    });

    // @@replace logic
    fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
        var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

        return [
            // `String.prototype.replace` method
            // https://tc39.es/ecma262/#sec-string.prototype.replace
            function replace(searchValue, replaceValue) {
                var O = requireObjectCoercible(this);
                var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
                return replacer
                    ? call(replacer, searchValue, O, replaceValue)
                    : call(nativeReplace, toString$1(O), searchValue, replaceValue);
            },
            // `RegExp.prototype[@@replace]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
            function (string, replaceValue) {
                var rx = anObject(this);
                var S = toString$1(string);

                if (
                    typeof replaceValue == 'string' &&
                    stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
                    stringIndexOf(replaceValue, '$<') === -1
                ) {
                    var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
                    if (res.done) return res.value;
                }

                var functionalReplace = isCallable$1(replaceValue);
                if (!functionalReplace) replaceValue = toString$1(replaceValue);

                var global = rx.global;
                if (global) {
                    var fullUnicode = rx.unicode;
                    rx.lastIndex = 0;
                }
                var results = [];
                while (true) {
                    var result = regExpExec(rx, S);
                    if (result === null) break;

                    push$2(results, result);
                    if (!global) break;

                    var matchStr = toString$1(result[0]);
                    if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                }

                var accumulatedResult = '';
                var nextSourcePosition = 0;
                for (var i = 0; i < results.length; i++) {
                    result = results[i];

                    var matched = toString$1(result[0]);
                    var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
                    var captures = [];
                    // NOTE: This is equivalent to
                    //   captures = result.slice(1).map(maybeToString)
                    // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                    // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                    // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                    for (var j = 1; j < result.length; j++) push$2(captures, maybeToString(result[j]));
                    var namedCaptures = result.groups;
                    if (functionalReplace) {
                        var replacerArgs = concat([matched], captures, position, S);
                        if (namedCaptures !== undefined) push$2(replacerArgs, namedCaptures);
                        var replacement = toString$1(apply(replaceValue, undefined, replacerArgs));
                    } else {
                        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                    }
                    if (position >= nextSourcePosition) {
                        accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                        nextSourcePosition = position + matched.length;
                    }
                }
                return accumulatedResult + stringSlice(S, nextSourcePosition);
            }
        ];
    }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

    var fails$3 = fails$h;

    var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails$3(function () {
            // eslint-disable-next-line no-useless-call -- required for testing
            method.call(null, argument || function () {
                return 1;
            }, 1);
        });
    };

    /* eslint-disable es-x/no-array-prototype-indexof -- required for testing */
    var $$4 = _export;
    var uncurryThis$5 = functionUncurryThis;
    var $IndexOf = arrayIncludes.indexOf;
    var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

    var un$IndexOf = uncurryThis$5([].indexOf);

    var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
    var STRICT_METHOD$1 = arrayMethodIsStrict$1('indexOf');

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    $$4({target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$1}, {
        indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
            var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
            return NEGATIVE_ZERO
                // convert -0 to +0
                ? un$IndexOf(this, searchElement, fromIndex) || 0
                : $IndexOf(this, searchElement, fromIndex);
        }
    });

    var classof$2 = classofRaw$1;

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es-x/no-array-isarray -- safe
    var isArray$2 = Array.isArray || function isArray(argument) {
        return classof$2(argument) == 'Array';
    };

    var toPropertyKey = toPropertyKey$3;
    var definePropertyModule$1 = objectDefineProperty;
    var createPropertyDescriptor = createPropertyDescriptor$3;

    var createProperty$1 = function (object, key, value) {
        var propertyKey = toPropertyKey(key);
        if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));
        else object[propertyKey] = value;
    };

    var uncurryThis$4 = functionUncurryThis;
    var fails$2 = fails$h;
    var isCallable = isCallable$e;
    var classof$1 = classof$5;
    var getBuiltIn = getBuiltIn$5;
    var inspectSource = inspectSource$3;

    var noop = function () { /* empty */
    };
    var empty = [];
    var construct = getBuiltIn('Reflect', 'construct');
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis$4(constructorRegExp.exec);
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
        switch (classof$1(argument)) {
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
    var isConstructor$1 = !construct || fails$2(function () {
        var called;
        return isConstructorModern(isConstructorModern.call)
            || !isConstructorModern(Object)
            || !isConstructorModern(function () {
                called = true;
            })
            || called;
    }) ? isConstructorLegacy : isConstructorModern;

    var global$2 = global$t;
    var isArray$1 = isArray$2;
    var isConstructor = isConstructor$1;
    var isObject$1 = isObject$7;
    var wellKnownSymbol$3 = wellKnownSymbol$9;

    var SPECIES$1 = wellKnownSymbol$3('species');
    var Array$1 = global$2.Array;

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesConstructor$1 = function (originalArray) {
        var C;
        if (isArray$1(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (isConstructor(C) && (C === Array$1 || isArray$1(C.prototype))) C = undefined;
            else if (isObject$1(C)) {
                C = C[SPECIES$1];
                if (C === null) C = undefined;
            }
        }
        return C === undefined ? Array$1 : C;
    };

    var arraySpeciesConstructor = arraySpeciesConstructor$1;

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesCreate$2 = function (originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };

    var fails$1 = fails$h;
    var wellKnownSymbol$2 = wellKnownSymbol$9;
    var V8_VERSION$1 = engineV8Version;

    var SPECIES = wellKnownSymbol$2('species');

    var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return V8_VERSION$1 >= 51 || !fails$1(function () {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES] = function () {
                return {foo: 1};
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
        });
    };

    var $$3 = _export;
    var global$1 = global$t;
    var fails = fails$h;
    var isArray = isArray$2;
    var isObject = isObject$7;
    var toObject$1 = toObject$4;
    var lengthOfArrayLike$1 = lengthOfArrayLike$3;
    var createProperty = createProperty$1;
    var arraySpeciesCreate$1 = arraySpeciesCreate$2;
    var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
    var wellKnownSymbol$1 = wellKnownSymbol$9;
    var V8_VERSION = engineV8Version;

    var IS_CONCAT_SPREADABLE = wellKnownSymbol$1('isConcatSpreadable');
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
    var TypeError$1 = global$1.TypeError;

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
    });

    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

    var isConcatSpreadable = function (O) {
        if (!isObject(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
    };

    var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $$3({target: 'Array', proto: true, arity: 1, forced: FORCED}, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat(arg) {
            var O = toObject$1(this);
            var A = arraySpeciesCreate$1(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];
                if (isConcatSpreadable(E)) {
                    len = lengthOfArrayLike$1(E);
                    if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
                } else {
                    if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty(A, n++, E);
                }
            }
            A.length = n;
            return A;
        }
    });

    var $$2 = _export;
    var uncurryThis$3 = functionUncurryThis;
    var IndexedObject$1 = indexedObject;
    var toIndexedObject$1 = toIndexedObject$6;
    var arrayMethodIsStrict = arrayMethodIsStrict$2;

    var un$Join = uncurryThis$3([].join);

    var ES3_STRINGS = IndexedObject$1 != Object;
    var STRICT_METHOD = arrayMethodIsStrict('join', ',');

    // `Array.prototype.join` method
    // https://tc39.es/ecma262/#sec-array.prototype.join
    $$2({target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD}, {
        join: function join(separator) {
            return un$Join(toIndexedObject$1(this), separator === undefined ? ',' : separator);
        }
    });

    var uncurryThis$2 = functionUncurryThis;
    var aCallable = aCallable$2;
    var NATIVE_BIND = functionBindNative;

    var bind$1 = uncurryThis$2(uncurryThis$2.bind);

    // optional / simple context binding
    var functionBindContext = function (fn, that) {
        aCallable(fn);
        return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
            return fn.apply(that, arguments);
        };
    };

    var bind = functionBindContext;
    var uncurryThis$1 = functionUncurryThis;
    var IndexedObject = indexedObject;
    var toObject = toObject$4;
    var lengthOfArrayLike = lengthOfArrayLike$3;
    var arraySpeciesCreate = arraySpeciesCreate$2;

    var push$1 = uncurryThis$1([].push);

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    var createMethod$1 = function (TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_REJECT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject(O);
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
                            push$1(target, value);      // filter
                    } else switch (TYPE) {
                        case 4:
                            return false;             // every
                        case 7:
                            push$1(target, value);      // filterReject
                    }
                }
            }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
    };

    var arrayIteration = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod$1(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod$1(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod$1(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod$1(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod$1(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod$1(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod$1(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod$1(7)
    };

    var wellKnownSymbol = wellKnownSymbol$9;
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
    var addToUnscopables$1 = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
    };

    var $$1 = _export;
    var $find = arrayIteration.find;
    var addToUnscopables = addToUnscopables$1;

    var FIND = 'find';
    var SKIPS_HOLES = true;

    // Shouldn't skip holes
    if (FIND in []) Array(1)[FIND](function () {
        SKIPS_HOLES = false;
    });

    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    $$1({target: 'Array', proto: true, forced: SKIPS_HOLES}, {
        find: function find(callbackfn /* , that = undefined */) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables(FIND);

    var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
    var classof = classof$5;

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
        return '[object ' + classof(this) + ']';
    };

    var TO_STRING_TAG_SUPPORT = toStringTagSupport;
    var defineBuiltIn = defineBuiltIn$3;
    var toString = objectToString;

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
        defineBuiltIn(Object.prototype, 'toString', toString, {unsafe: true});
    }

    var DESCRIPTORS = descriptors;
    var uncurryThis = functionUncurryThis;
    var objectKeys = objectKeys$2;
    var toIndexedObject = toIndexedObject$6;
    var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

    var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
    var push = uncurryThis([].push);

    // `Object.{ entries, values }` methods implementation
    var createMethod = function (TO_ENTRIES) {
        return function (it) {
            var O = toIndexedObject(it);
            var keys = objectKeys(O);
            var length = keys.length;
            var i = 0;
            var result = [];
            var key;
            while (length > i) {
                key = keys[i++];
                if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
                    push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
                }
            }
            return result;
        };
    };

    var objectToArray = {
        // `Object.entries` method
        // https://tc39.es/ecma262/#sec-object.entries
        entries: createMethod(true),
        // `Object.values` method
        // https://tc39.es/ecma262/#sec-object.values
        values: createMethod(false)
    };

    var $ = _export;
    var $entries = objectToArray.entries;

    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    $({target: 'Object', stat: true}, {
        entries: function entries(O) {
            return $entries(O);
        }
    });

    /* eslint-disable no-unused-vars */

    /**
     * @author zhixin wen <wenzhixin2010@gmail.com>
     * extensions: https://github.com/vitalets/x-editable
     */

    var Utils = $__default["default"].fn.bootstrapTable.utils;
    $__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, {
        editable: true,
        onEditableInit: function onEditableInit() {
            return false;
        },
        onEditableSave: function onEditableSave(field, row, rowIndex, oldValue, $el) {
            return false;
        },
        onEditableShown: function onEditableShown(field, row, $el, editable) {
            return false;
        },
        onEditableHidden: function onEditableHidden(field, row, $el, reason) {
            return false;
        }
    });
    $__default["default"].extend($__default["default"].fn.bootstrapTable.columnDefaults, {
        alwaysUseFormatter: false
    });
    $__default["default"].extend($__default["default"].fn.bootstrapTable.Constructor.EVENTS, {
        'editable-init.bs.table': 'onEditableInit',
        'editable-save.bs.table': 'onEditableSave',
        'editable-shown.bs.table': 'onEditableShown',
        'editable-hidden.bs.table': 'onEditableHidden'
    });

    $__default["default"].BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
        _inherits(_class, _$$BootstrapTable);

        var _super = _createSuper(_class);

        function _class() {
            _classCallCheck(this, _class);

            return _super.apply(this, arguments);
        }

        _createClass(_class, [{
            key: "initTable",
            value: function initTable() {
                var _this = this;

                _get(_getPrototypeOf(_class.prototype), "initTable", this).call(this);

                if (!this.options.editable) {
                    return;
                }

                this.editedCells = [];
                $__default["default"].each(this.columns, function (i, column) {
                    if (!column.editable) {
                        return;
                    }

                    var editableOptions = {};
                    var editableDataMarkup = [];
                    var editableDataPrefix = 'editable-';

                    var processDataOptions = function processDataOptions(key, value) {
                        // Replace camel case with dashes.
                        var dashKey = key.replace(/([A-Z])/g, function ($1) {
                            return "-".concat($1.toLowerCase());
                        });

                        if (dashKey.indexOf(editableDataPrefix) === 0) {
                            editableOptions[dashKey.replace(editableDataPrefix, 'data-')] = value;
                        }
                    };

                    $__default["default"].each(_this.options, processDataOptions);

                    column.formatter = column.formatter || function (value) {
                        return value;
                    };

                    column._formatter = column._formatter ? column._formatter : column.formatter;

                    column.formatter = function (value, row, index) {
                        var result = Utils.calculateObjectValue(column, column._formatter, [value, row, index], value);
                        result = typeof result === 'undefined' || result === null ? _this.options.undefinedText : result;

                        if (_this.options.uniqueId !== undefined && !column.alwaysUseFormatter) {
                            var uniqueId = Utils.getItemField(row, _this.options.uniqueId, false);

                            if ($__default["default"].inArray(column.field + uniqueId, _this.editedCells) !== -1) {
                                result = value;
                            }
                        }

                        $__default["default"].each(column, processDataOptions);
                        $__default["default"].each(editableOptions, function (key, value) {
                            editableDataMarkup.push(" ".concat(key, "=\"").concat(value, "\""));
                        });
                        var noEditFormatter = false;
                        var editableOpts = Utils.calculateObjectValue(column, column.editable, [index, row], {});

                        if (editableOpts.hasOwnProperty('noEditFormatter')) {
                            noEditFormatter = editableOpts.noEditFormatter(value, row, index);
                        }

                        if (noEditFormatter === false) {
                            return "<a href=\"javascript:void(0)\"\n            data-name=\"".concat(column.field, "\"\n            data-pk=\"").concat(row[_this.options.idField], "\"\n            data-value=\"").concat(result, "\"\n            ").concat(editableDataMarkup.join(''), "></a>");
                        }

                        return noEditFormatter;
                    };
                });
            }
        }, {
            key: "initBody",
            value: function initBody(fixedScroll) {
                var _this2 = this;

                _get(_getPrototypeOf(_class.prototype), "initBody", this).call(this, fixedScroll);

                if (!this.options.editable) {
                    return;
                }

                $__default["default"].each(this.columns, function (i, column) {
                    if (!column.editable) {
                        return;
                    }

                    var data = _this2.getData({
                        escape: true
                    });

                    var $field = _this2.$body.find("a[data-name=\"".concat(column.field, "\"]"));

                    $field.each(function (i, element) {
                        var $element = $__default["default"](element);
                        var $tr = $element.closest('tr');
                        var index = $tr.data('index');
                        var row = data[index];
                        var editableOpts = Utils.calculateObjectValue(column, column.editable, [index, row, $element], {});
                        $element.editable(editableOpts);
                    });
                    $field.off('save').on('save', function (_ref, _ref2) {
                        var currentTarget = _ref.currentTarget;
                        var submitValue = _ref2.submitValue;
                        var $this = $__default["default"](currentTarget);

                        var data = _this2.getData();

                        var rowIndex = $this.parents('tr[data-index]').data('index');
                        var row = data[rowIndex];
                        var oldValue = row[column.field];

                        if (_this2.options.uniqueId !== undefined && !column.alwaysUseFormatter) {
                            var uniqueId = Utils.getItemField(row, _this2.options.uniqueId, false);

                            if ($__default["default"].inArray(column.field + uniqueId, _this2.editedCells) === -1) {
                                _this2.editedCells.push(column.field + uniqueId);
                            }
                        }

                        submitValue = Utils.escapeHTML(submitValue);
                        $this.data('value', submitValue);
                        row[column.field] = submitValue;

                        _this2.trigger('editable-save', column.field, row, rowIndex, oldValue, $this);

                        _this2.initBody();
                    });
                    $field.off('shown').on('shown', function (_ref3, editable) {
                        var currentTarget = _ref3.currentTarget;
                        var $this = $__default["default"](currentTarget);

                        var data = _this2.getData();

                        var rowIndex = $this.parents('tr[data-index]').data('index');
                        var row = data[rowIndex];

                        _this2.trigger('editable-shown', column.field, row, $this, editable);
                    });
                    $field.off('hidden').on('hidden', function (_ref4, reason) {
                        var currentTarget = _ref4.currentTarget;
                        var $this = $__default["default"](currentTarget);

                        var data = _this2.getData();

                        var rowIndex = $this.parents('tr[data-index]').data('index');
                        var row = data[rowIndex];

                        _this2.trigger('editable-hidden', column.field, row, $this, reason);
                    });
                });
                this.trigger('editable-init');
            }
        }, {
            key: "getData",
            value: function getData(params) {
                var data = _get(_getPrototypeOf(_class.prototype), "getData", this).call(this, params);

                if (params && params.escape) {
                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var row = _step.value;

                            for (var _i = 0, _Object$entries = Object.entries(row); _i < _Object$entries.length; _i++) {
                                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                                    key = _Object$entries$_i[0],
                                    value = _Object$entries$_i[1];

                                row[key] = Utils.unescapeHTML(value);
                            }
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                }

                return data;
            }
        }]);

        return _class;
    }($__default["default"].BootstrapTable);

}));
