(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
        typeof define === 'function' && define.amd ? define(['jquery'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$3) {
    'use strict';

    function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
    }

    var $__default = /*#__PURE__*/_interopDefaultLegacy($$3);

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

    var call$7 = Function.prototype.call;

    var functionCall = NATIVE_BIND$2 ? call$7.bind(call$7) : function () {
        return call$7.apply(call$7, arguments);
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
    var bind$2 = FunctionPrototype$1.bind;
    var call$6 = FunctionPrototype$1.call;
    var uncurryThis$e = NATIVE_BIND$1 && bind$2.bind(call$6, call$6);

    var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
        return fn && uncurryThis$e(fn);
    } : function (fn) {
        return fn && function () {
            return call$6.apply(fn, arguments);
        };
    };

    var uncurryThis$d = functionUncurryThis;

    var toString$5 = uncurryThis$d({}.toString);
    var stringSlice$1 = uncurryThis$d(''.slice);

    var classofRaw$1 = function (it) {
        return stringSlice$1(toString$5(it), 8, -1);
    };

    var global$s = global$t;
    var uncurryThis$c = functionUncurryThis;
    var fails$c = fails$f;
    var classof$6 = classofRaw$1;

    var Object$4 = global$s.Object;
    var split = uncurryThis$c(''.split);

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var indexedObject = fails$c(function () {
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
    var requireObjectCoercible$3 = function (it) {
        if (it == undefined) throw TypeError$9("Can't call method on " + it);
        return it;
    };

    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject$1 = indexedObject;
    var requireObjectCoercible$2 = requireObjectCoercible$3;

    var toIndexedObject$4 = function (it) {
        return IndexedObject$1(requireObjectCoercible$2(it));
    };

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    var isCallable$d = function (argument) {
        return typeof argument == 'function';
    };

    var isCallable$c = isCallable$d;

    var isObject$7 = function (it) {
        return typeof it == 'object' ? it !== null : isCallable$c(it);
    };

    var global$q = global$t;
    var isCallable$b = isCallable$d;

    var aFunction = function (argument) {
        return isCallable$b(argument) ? argument : undefined;
    };

    var getBuiltIn$5 = function (namespace, method) {
        return arguments.length < 2 ? aFunction(global$q[namespace]) : global$q[namespace] && global$q[namespace][method];
    };

    var uncurryThis$b = functionUncurryThis;

    var objectIsPrototypeOf = uncurryThis$b({}.isPrototypeOf);

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

    var global$o = global$t;
    var getBuiltIn$3 = getBuiltIn$5;
    var isCallable$a = isCallable$d;
    var isPrototypeOf = objectIsPrototypeOf;
    var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

    var Object$3 = global$o.Object;

    var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
        return typeof it == 'symbol';
    } : function (it) {
        var $Symbol = getBuiltIn$3('Symbol');
        return isCallable$a($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
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
    var isCallable$9 = isCallable$d;
    var tryToString = tryToString$1;

    var TypeError$8 = global$m.TypeError;

    // `Assert: IsCallable(argument) is true`
    var aCallable$2 = function (argument) {
        if (isCallable$9(argument)) return argument;
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
    var call$5 = functionCall;
    var isCallable$8 = isCallable$d;
    var isObject$6 = isObject$7;

    var TypeError$7 = global$l.TypeError;

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    var ordinaryToPrimitive$1 = function (input, pref) {
        var fn, val;
        if (pref === 'string' && isCallable$8(fn = input.toString) && !isObject$6(val = call$5(fn, input))) return val;
        if (isCallable$8(fn = input.valueOf) && !isObject$6(val = call$5(fn, input))) return val;
        if (pref !== 'string' && isCallable$8(fn = input.toString) && !isObject$6(val = call$5(fn, input))) return val;
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
    var requireObjectCoercible$1 = requireObjectCoercible$3;

    var Object$2 = global$i.Object;

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    var toObject$3 = function (argument) {
        return Object$2(requireObjectCoercible$1(argument));
    };

    var uncurryThis$a = functionUncurryThis;
    var toObject$2 = toObject$3;

    var hasOwnProperty = uncurryThis$a({}.hasOwnProperty);

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es-x/no-object-hasown -- safe
    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject$2(it), key);
    };

    var uncurryThis$9 = functionUncurryThis;

    var id = 0;
    var postfix = Math.random();
    var toString$4 = uncurryThis$9(1.0.toString);

    var uid$2 = function (key) {
        return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
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

    var global$g = global$t;
    var call$4 = functionCall;
    var isObject$5 = isObject$7;
    var isSymbol$1 = isSymbol$2;
    var getMethod$1 = getMethod$2;
    var ordinaryToPrimitive = ordinaryToPrimitive$1;
    var wellKnownSymbol$7 = wellKnownSymbol$8;

    var TypeError$6 = global$g.TypeError;
    var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    var toPrimitive$1 = function (input, pref) {
        if (!isObject$5(input) || isSymbol$1(input)) return input;
        var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call$4(exoticToPrim, input, pref);
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

    var DESCRIPTORS$7 = descriptors;
    var fails$a = fails$f;
    var createElement = documentCreateElement$1;

    // Thanks to IE8 for its funny defineProperty
    var ie8DomDefine = !DESCRIPTORS$7 && !fails$a(function () {
        // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
        return Object.defineProperty(createElement('div'), 'a', {
            get: function () {
                return 7;
            }
        }).a != 7;
    });

    var DESCRIPTORS$6 = descriptors;
    var call$3 = functionCall;
    var propertyIsEnumerableModule = objectPropertyIsEnumerable;
    var createPropertyDescriptor$2 = createPropertyDescriptor$3;
    var toIndexedObject$3 = toIndexedObject$4;
    var toPropertyKey$2 = toPropertyKey$3;
    var hasOwn$5 = hasOwnProperty_1;
    var IE8_DOM_DEFINE$1 = ie8DomDefine;

    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject$3(O);
        P = toPropertyKey$2(P);
        if (IE8_DOM_DEFINE$1) try {
            return $getOwnPropertyDescriptor$1(O, P);
        } catch (error) { /* empty */
        }
        if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$3(propertyIsEnumerableModule.f, O, P), O[P]);
    };

    var objectDefineProperty = {};

    var DESCRIPTORS$5 = descriptors;
    var fails$9 = fails$f;

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$9(function () {
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
    var DESCRIPTORS$4 = descriptors;
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
    objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
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

    var DESCRIPTORS$3 = descriptors;
    var definePropertyModule$4 = objectDefineProperty;
    var createPropertyDescriptor$1 = createPropertyDescriptor$3;

    var createNonEnumerableProperty$4 = DESCRIPTORS$3 ? function (object, key, value) {
        return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
    } : function (object, key, value) {
        object[key] = value;
        return object;
    };

    var makeBuiltIn$2 = {exports: {}};

    var DESCRIPTORS$2 = descriptors;
    var hasOwn$4 = hasOwnProperty_1;

    var FunctionPrototype = Function.prototype;
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

    var EXISTS = hasOwn$4(FunctionPrototype, 'name');
    // additional protection from minified / mangled / dropped function names
    var PROPER = EXISTS && (function something() { /* empty */
    }).name === 'something';
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype, 'name').configurable));

    var functionName = {
        EXISTS: EXISTS,
        PROPER: PROPER,
        CONFIGURABLE: CONFIGURABLE
    };

    var uncurryThis$8 = functionUncurryThis;
    var isCallable$7 = isCallable$d;
    var store$1 = sharedStore;

    var functionToString = uncurryThis$8(Function.toString);

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable$7(store$1.inspectSource)) {
        store$1.inspectSource = function (it) {
            return functionToString(it);
        };
    }

    var inspectSource$3 = store$1.inspectSource;

    var global$c = global$t;
    var isCallable$6 = isCallable$d;
    var inspectSource$2 = inspectSource$3;

    var WeakMap$1 = global$c.WeakMap;

    var nativeWeakMap = isCallable$6(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

    var shared$2 = shared$4.exports;
    var uid = uid$2;

    var keys = shared$2('keys');

    var sharedKey$2 = function (key) {
        return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys$4 = {};

    var NATIVE_WEAK_MAP = nativeWeakMap;
    var global$b = global$t;
    var uncurryThis$7 = functionUncurryThis;
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
        var wmget = uncurryThis$7(store.get);
        var wmhas = uncurryThis$7(store.has);
        var wmset = uncurryThis$7(store.set);
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

    var fails$8 = fails$f;
    var isCallable$5 = isCallable$d;
    var hasOwn$2 = hasOwnProperty_1;
    var DESCRIPTORS$1 = descriptors;
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
    var inspectSource$1 = inspectSource$3;
    var InternalStateModule = internalState;

    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState$1 = InternalStateModule.get;
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var defineProperty = Object.defineProperty;

    var CONFIGURABLE_LENGTH = DESCRIPTORS$1 && !fails$8(function () {
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
            if (DESCRIPTORS$1) try {
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
        return isCallable$5(this) && getInternalState$1(this).source || inspectSource$1(this);
    }, 'toString');

    var global$a = global$t;
    var isCallable$4 = isCallable$d;
    var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
    var makeBuiltIn = makeBuiltIn$2.exports;
    var setGlobal$1 = setGlobal$3;

    var defineBuiltIn$3 = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== undefined ? options.name : key;
        if (isCallable$4(value)) makeBuiltIn(value, name, options);
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
    var floor = Math.floor;

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    var toIntegerOrInfinity$2 = function (argument) {
        var number = +argument;
        // eslint-disable-next-line no-self-compare -- safe
        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
    };

    var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

    var max = Math.max;
    var min$1 = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    var toAbsoluteIndex$1 = function (index, length) {
        var integer = toIntegerOrInfinity$1(index);
        return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
    };

    var toIntegerOrInfinity = toIntegerOrInfinity$2;

    var min = Math.min;

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    var toLength$1 = function (argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    var toLength = toLength$1;

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    var lengthOfArrayLike$3 = function (obj) {
        return toLength(obj.length);
    };

    var toIndexedObject$2 = toIndexedObject$4;
    var toAbsoluteIndex = toAbsoluteIndex$1;
    var lengthOfArrayLike$2 = lengthOfArrayLike$3;

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod$1 = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
            var O = toIndexedObject$2($this);
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
        includes: createMethod$1(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod$1(false)
    };

    var uncurryThis$6 = functionUncurryThis;
    var hasOwn$1 = hasOwnProperty_1;
    var toIndexedObject$1 = toIndexedObject$4;
    var indexOf$1 = arrayIncludes.indexOf;
    var hiddenKeys$2 = hiddenKeys$4;

    var push$1 = uncurryThis$6([].push);

    var objectKeysInternal = function (object, names) {
        var O = toIndexedObject$1(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$1(result, key);
        // Don't enum bug & hidden keys
        while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
            ~indexOf$1(result, key) || push$1(result, key);
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
    var uncurryThis$5 = functionUncurryThis;
    var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
    var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
    var anObject$5 = anObject$7;

    var concat = uncurryThis$5([].concat);

    // all object keys, includes non-enumerable and symbols
    var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject$5(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
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
    var isCallable$3 = isCallable$d;

    var replacement = /#|\.prototype\./;

    var isForced$1 = function (feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true
            : value == NATIVE ? false
                : isCallable$3(detection) ? fails$7(detection)
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

    var classof$5 = classofRaw$1;

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es-x/no-array-isarray -- safe
    var isArray$2 = Array.isArray || function isArray(argument) {
        return classof$5(argument) == 'Array';
    };

    var toPropertyKey = toPropertyKey$3;
    var definePropertyModule$2 = objectDefineProperty;
    var createPropertyDescriptor = createPropertyDescriptor$3;

    var createProperty$1 = function (object, key, value) {
        var propertyKey = toPropertyKey(key);
        if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor(0, value));
        else object[propertyKey] = value;
    };

    var wellKnownSymbol$6 = wellKnownSymbol$8;

    var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
    var test = {};

    test[TO_STRING_TAG$1] = 'z';

    var toStringTagSupport = String(test) === '[object z]';

    var global$8 = global$t;
    var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
    var isCallable$2 = isCallable$d;
    var classofRaw = classofRaw$1;
    var wellKnownSymbol$5 = wellKnownSymbol$8;

    var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
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
    var classof$4 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
            // @@toStringTag case
            : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag
                // builtinTag case
                : CORRECT_ARGUMENTS ? classofRaw(O)
                    // ES3 arguments fallback
                    : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
    };

    var uncurryThis$4 = functionUncurryThis;
    var fails$6 = fails$f;
    var isCallable$1 = isCallable$d;
    var classof$3 = classof$4;
    var getBuiltIn$1 = getBuiltIn$5;
    var inspectSource = inspectSource$3;

    var noop = function () { /* empty */
    };
    var empty = [];
    var construct = getBuiltIn$1('Reflect', 'construct');
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec$1 = uncurryThis$4(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

    var isConstructorModern = function isConstructor(argument) {
        if (!isCallable$1(argument)) return false;
        try {
            construct(noop, empty, argument);
            return true;
        } catch (error) {
            return false;
        }
    };

    var isConstructorLegacy = function isConstructor(argument) {
        if (!isCallable$1(argument)) return false;
        switch (classof$3(argument)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return false;
        }
        try {
            // we can't check .prototype since constructors produced by .bind haven't it
            // `Function#toString` throws on some built-it function in some legacy engines
            // (for example, `DOMQuad` and similar in FF41-)
            return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
        } catch (error) {
            return true;
        }
    };

    isConstructorLegacy.sham = true;

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    var isConstructor$1 = !construct || fails$6(function () {
        var called;
        return isConstructorModern(isConstructorModern.call)
            || !isConstructorModern(Object)
            || !isConstructorModern(function () {
                called = true;
            })
            || called;
    }) ? isConstructorLegacy : isConstructorModern;

    var global$7 = global$t;
    var isArray$1 = isArray$2;
    var isConstructor = isConstructor$1;
    var isObject$1 = isObject$7;
    var wellKnownSymbol$4 = wellKnownSymbol$8;

    var SPECIES$2 = wellKnownSymbol$4('species');
    var Array$1 = global$7.Array;

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesConstructor$1 = function (originalArray) {
        var C;
        if (isArray$1(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (isConstructor(C) && (C === Array$1 || isArray$1(C.prototype))) C = undefined;
            else if (isObject$1(C)) {
                C = C[SPECIES$2];
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

    var fails$5 = fails$f;
    var wellKnownSymbol$3 = wellKnownSymbol$8;
    var V8_VERSION$1 = engineV8Version;

    var SPECIES$1 = wellKnownSymbol$3('species');

    var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
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

    var $$2 = _export;
    var global$6 = global$t;
    var fails$4 = fails$f;
    var isArray = isArray$2;
    var isObject = isObject$7;
    var toObject$1 = toObject$3;
    var lengthOfArrayLike$1 = lengthOfArrayLike$3;
    var createProperty = createProperty$1;
    var arraySpeciesCreate$1 = arraySpeciesCreate$2;
    var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
    var wellKnownSymbol$2 = wellKnownSymbol$8;
    var V8_VERSION = engineV8Version;

    var IS_CONCAT_SPREADABLE = wellKnownSymbol$2('isConcatSpreadable');
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
    var TypeError$2 = global$6.TypeError;

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$4(function () {
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
    $$2({target: 'Array', proto: true, arity: 1, forced: FORCED}, {
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
                    if (n + len > MAX_SAFE_INTEGER) throw TypeError$2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
                } else {
                    if (n >= MAX_SAFE_INTEGER) throw TypeError$2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty(A, n++, E);
                }
            }
            A.length = n;
            return A;
        }
    });

    var uncurryThis$3 = functionUncurryThis;
    var aCallable = aCallable$2;
    var NATIVE_BIND = functionBindNative;

    var bind$1 = uncurryThis$3(uncurryThis$3.bind);

    // optional / simple context binding
    var functionBindContext = function (fn, that) {
        aCallable(fn);
        return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
            return fn.apply(that, arguments);
        };
    };

    var bind = functionBindContext;
    var uncurryThis$2 = functionUncurryThis;
    var IndexedObject = indexedObject;
    var toObject = toObject$3;
    var lengthOfArrayLike = lengthOfArrayLike$3;
    var arraySpeciesCreate = arraySpeciesCreate$2;

    var push = uncurryThis$2([].push);

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

    var objectDefineProperties = {};

    var internalObjectKeys = objectKeysInternal;
    var enumBugKeys$1 = enumBugKeys$3;

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es-x/no-object-keys -- safe
    var objectKeys$1 = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys$1);
    };

    var DESCRIPTORS = descriptors;
    var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
    var definePropertyModule$1 = objectDefineProperty;
    var anObject$4 = anObject$7;
    var toIndexedObject = toIndexedObject$4;
    var objectKeys = objectKeys$1;

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es-x/no-object-defineproperties -- safe
    objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject$4(O);
        var props = toIndexedObject(Properties);
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

    var anObject$3 = anObject$7;
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
            EmptyConstructor[PROTOTYPE] = anObject$3(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
    };

    var wellKnownSymbol$1 = wellKnownSymbol$8;
    var create$1 = objectCreate;
    var definePropertyModule = objectDefineProperty;

    var UNSCOPABLES = wellKnownSymbol$1('unscopables');
    var ArrayPrototype = Array.prototype;

    // Array.prototype[@@unscopables]
    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype[UNSCOPABLES] == undefined) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create$1(null)
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
    var classof$2 = classof$4;

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
        return '[object ' + classof$2(this) + ']';
    };

    var TO_STRING_TAG_SUPPORT = toStringTagSupport;
    var defineBuiltIn$1 = defineBuiltIn$3;
    var toString$3 = objectToString;

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
        defineBuiltIn$1(Object.prototype, 'toString', toString$3, {unsafe: true});
    }

    var global$5 = global$t;
    var classof$1 = classof$4;

    var String$1 = global$5.String;

    var toString$2 = function (argument) {
        if (classof$1(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
        return String$1(argument);
    };

    var anObject$2 = anObject$7;

    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    var regexpFlags$1 = function () {
        var that = anObject$2(this);
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

    var fails$3 = fails$f;
    var global$4 = global$t;

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var $RegExp$2 = global$4.RegExp;

    var UNSUPPORTED_Y$1 = fails$3(function () {
        var re = $RegExp$2('a', 'y');
        re.lastIndex = 2;
        return re.exec('abcd') != null;
    });

    // UC Browser bug
    // https://github.com/zloirock/core-js/issues/1008
    var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$3(function () {
        return !$RegExp$2('a', 'y').sticky;
    });

    var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$3(function () {
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

    var fails$2 = fails$f;
    var global$3 = global$t;

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var $RegExp$1 = global$3.RegExp;

    var regexpUnsupportedDotAll = fails$2(function () {
        var re = $RegExp$1('.', 's');
        return !(re.dotAll && re.exec('\n') && re.flags === 's');
    });

    var fails$1 = fails$f;
    var global$2 = global$t;

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
    var $RegExp = global$2.RegExp;

    var regexpUnsupportedNcg = fails$1(function () {
        var re = $RegExp('(?<a>b)', 'g');
        return re.exec('b').groups.a !== 'b' ||
            'b'.replace(re, '$<a>c') !== 'bc';
    });

    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
    /* eslint-disable regexp/no-useless-quantifier -- testing */
    var call$2 = functionCall;
    var uncurryThis$1 = functionUncurryThis;
    var toString$1 = toString$2;
    var regexpFlags = regexpFlags$1;
    var stickyHelpers = regexpStickyHelpers;
    var shared = shared$4.exports;
    var create = objectCreate;
    var getInternalState = internalState.get;
    var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
    var UNSUPPORTED_NCG = regexpUnsupportedNcg;

    var nativeReplace = shared('native-string-replace', String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt = uncurryThis$1(''.charAt);
    var indexOf = uncurryThis$1(''.indexOf);
    var replace = uncurryThis$1(''.replace);
    var stringSlice = uncurryThis$1(''.slice);

    var UPDATES_LAST_INDEX_WRONG = (function () {
        var re1 = /a/;
        var re2 = /b*/g;
        call$2(nativeExec, re1, 'a');
        call$2(nativeExec, re2, 'a');
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
            var str = toString$1(string);
            var raw = state.raw;
            var result, reCopy, lastIndex, match, i, object, group;

            if (raw) {
                raw.lastIndex = re.lastIndex;
                result = call$2(patchedExec, raw, str);
                re.lastIndex = raw.lastIndex;
                return result;
            }

            var groups = state.groups;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = call$2(regexpFlags, re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;

            if (sticky) {
                flags = replace(flags, 'y', '');
                if (indexOf(flags, 'g') === -1) {
                    flags += 'g';
                }

                strCopy = stringSlice(str, re.lastIndex);
                // Support anchored sticky behavior.
                if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
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

            match = call$2(nativeExec, sticky ? reCopy : re, strCopy);

            if (sticky) {
                if (match) {
                    match.input = stringSlice(match.input, charsAdded);
                    match[0] = stringSlice(match[0], charsAdded);
                    match.index = re.lastIndex;
                    re.lastIndex += match[0].length;
                } else re.lastIndex = 0;
            } else if (UPDATES_LAST_INDEX_WRONG && match) {
                re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
                // Fix browsers whose `exec` methods don't consistently return `undefined`
                // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                call$2(nativeReplace, match[0], reCopy, function () {
                    for (i = 1; i < arguments.length - 2; i++) {
                        if (arguments[i] === undefined) match[i] = undefined;
                    }
                });
            }

            if (match && groups) {
                match.groups = object = create(null);
                for (i = 0; i < groups.length; i++) {
                    group = groups[i];
                    object[group[0]] = match[group[1]];
                }
            }

            return match;
        };
    }

    var regexpExec$2 = patchedExec;

    var $ = _export;
    var exec = regexpExec$2;

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    $({target: 'RegExp', proto: true, forced: /./.exec !== exec}, {
        exec: exec
    });

    // TODO: Remove from `core-js@4` since it's moved to entry points

    var uncurryThis = functionUncurryThis;
    var defineBuiltIn = defineBuiltIn$3;
    var regexpExec$1 = regexpExec$2;
    var fails = fails$f;
    var wellKnownSymbol = wellKnownSymbol$8;
    var createNonEnumerableProperty = createNonEnumerableProperty$4;

    var SPECIES = wellKnownSymbol('species');
    var RegExpPrototype = RegExp.prototype;

    var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
        var SYMBOL = wellKnownSymbol(KEY);

        var DELEGATES_TO_SYMBOL = !fails(function () {
            // String methods call symbol-named RegEp methods
            var O = {};
            O[SYMBOL] = function () {
                return 7;
            };
            return ''[KEY](O) != 7;
        });

        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
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
                re.constructor[SPECIES] = function () {
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
            var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
            var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
                var uncurriedNativeMethod = uncurryThis(nativeMethod);
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

            defineBuiltIn(String.prototype, KEY, methods[0]);
            defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
        }

        if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
    };

    // `SameValue` abstract operation
    // https://tc39.es/ecma262/#sec-samevalue
    // eslint-disable-next-line es-x/no-object-is -- safe
    var sameValue$1 = Object.is || function is(x, y) {
        // eslint-disable-next-line no-self-compare -- NaN check
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };

    var global$1 = global$t;
    var call$1 = functionCall;
    var anObject$1 = anObject$7;
    var isCallable = isCallable$d;
    var classof = classofRaw$1;
    var regexpExec = regexpExec$2;

    var TypeError$1 = global$1.TypeError;

    // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec
    var regexpExecAbstract = function (R, S) {
        var exec = R.exec;
        if (isCallable(exec)) {
            var result = call$1(exec, R, S);
            if (result !== null) anObject$1(result);
            return result;
        }
        if (classof(R) === 'RegExp') return call$1(regexpExec, R, S);
        throw TypeError$1('RegExp#exec called on incompatible receiver');
    };

    var call = functionCall;
    var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
    var anObject = anObject$7;
    var requireObjectCoercible = requireObjectCoercible$3;
    var sameValue = sameValue$1;
    var toString = toString$2;
    var getMethod = getMethod$2;
    var regExpExec = regexpExecAbstract;

    // @@search logic
    fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
        return [
            // `String.prototype.search` method
            // https://tc39.es/ecma262/#sec-string.prototype.search
            function search(regexp) {
                var O = requireObjectCoercible(this);
                var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
                return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
            },
            // `RegExp.prototype[@@search]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
            function (string) {
                var rx = anObject(this);
                var S = toString(string);
                var res = maybeCallNative(nativeSearch, rx, S);

                if (res.done) return res.value;

                var previousLastIndex = rx.lastIndex;
                if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
                var result = regExpExec(rx, S);
                if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
                return result === null ? -1 : result.index;
            }
        ];
    });

    /**
     * @author: Dennis Hernández
     * @webSite: http://djhvscf.github.io/Blog
     * @update zhixin wen <wenzhixin2010@gmail.com>
     */

    var Utils = $__default["default"].fn.bootstrapTable.utils;
    $__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, {
        keyEvents: false
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

                if (this.options.keyEvents) {
                    this.initKeyEvents();
                }
            }
        }, {
            key: "initKeyEvents",
            value: function initKeyEvents() {
                var _this = this;

                $__default["default"](document).off('keydown').on('keydown', function (e) {
                    var $search = Utils.getSearchInput(_this);

                    var $refresh = _this.$toolbar.find('button[name="refresh"]');

                    var $toggle = _this.$toolbar.find('button[name="toggle"]');

                    var $paginationSwitch = _this.$toolbar.find('button[name="paginationSwitch"]');

                    if (document.activeElement === $search.get(0) || !$__default["default"].contains(document.activeElement, _this.$toolbar.get(0))) {
                        return true;
                    }

                    switch (e.keyCode) {
                        case 83:
                            // s
                            if (!_this.options.search) {
                                return;
                            }

                            $search.focus();
                            return false;

                        case 82:
                            // r
                            if (!_this.options.showRefresh) {
                                return;
                            }

                            $refresh.click();
                            return false;

                        case 84:
                            // t
                            if (!_this.options.showToggle) {
                                return;
                            }

                            $toggle.click();
                            return false;

                        case 80:
                            // p
                            if (!_this.options.showPaginationSwitch) {
                                return;
                            }

                            $paginationSwitch.click();
                            return false;

                        case 37:
                            // left
                            if (!_this.options.pagination) {
                                return;
                            }

                            _this.prevPage();

                            return false;

                        case 39:
                            // right
                            if (!_this.options.pagination) {
                                return;
                            }

                            _this.nextPage();

                            return;
                    }
                });
            }
        }]);

        return _class;
    }($__default["default"].BootstrapTable);

}));
