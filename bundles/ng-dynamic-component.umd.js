(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-dynamic-component', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-dynamic-component'] = {}, global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, common, rxjs, operators) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    function defaultEventArgumentFactory() {
        return '$event';
    }
    var EventArgumentToken = new i0.InjectionToken('EventArgument', {
        providedIn: 'root',
        factory: defaultEventArgumentFactory,
    });

    var DynamicComponentInjectorToken = new i0.InjectionToken('DynamicComponentInjector');
    /**
     * @deprecated Since v6.0.0 - Use {@link DynamicComponentInjectorToken} instead
     * and provide component class via `useExisting` instead of `useValue`
     */
    var COMPONENT_INJECTOR = DynamicComponentInjectorToken;

    var ComponentOutletInjectorDirective = /** @class */ (function () {
        function ComponentOutletInjectorDirective(componentOutlet) {
            this.componentOutlet = componentOutlet;
        }
        Object.defineProperty(ComponentOutletInjectorDirective.prototype, "componentRef", {
            get: function () {
                // NOTE: Accessing private APIs of Angular
                return this.componentOutlet._componentRef;
            },
            enumerable: false,
            configurable: true
        });
        return ComponentOutletInjectorDirective;
    }());
    ComponentOutletInjectorDirective.decorators = [
        { type: i0.Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ngComponentOutlet]',
                    exportAs: 'ndcComponentOutletInjector',
                    providers: [
                        {
                            provide: DynamicComponentInjectorToken,
                            useExisting: ComponentOutletInjectorDirective,
                        },
                    ],
                },] }
    ];
    /** @nocollapse */
    ComponentOutletInjectorDirective.ctorParameters = function () { return [
        { type: common.NgComponentOutlet, decorators: [{ type: i0.Host }] }
    ]; };

    var ComponentOutletInjectorModule = /** @class */ (function () {
        function ComponentOutletInjectorModule() {
        }
        return ComponentOutletInjectorModule;
    }());
    ComponentOutletInjectorModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [ComponentOutletInjectorDirective],
                    declarations: [ComponentOutletInjectorDirective],
                },] }
    ];

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function createNewChange(val) {
        return new i0.SimpleChange(undefined, val, true);
    }
    function createChange(val, prevVal) {
        return new i0.SimpleChange(prevVal, val, false);
    }
    function noop() { }
    function getCtorParamTypes(ctor, reflect) {
        return reflect.getMetadata('design:paramtypes', ctor);
    }
    /**
     * Extract type arguments from Angular Directive/Component
     */
    function extractNgParamTypes(type) {
        var _a, _b, _c;
        // NOTE: Accessing private APIs of Angular
        return (_c = (_b = (_a = type) === null || _a === void 0 ? void 0 : _a.ctorParameters) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.map(function (param) { return param.type; });
    }

    var IoService = /** @class */ (function () {
        function IoService(differs, cfr, eventArgument, cdr) {
            this.differs = differs;
            this.cfr = cfr;
            this.eventArgument = eventArgument;
            this.cdr = cdr;
            this.checkInit = this.failInit;
            this.lastComponentInst = null;
            this.inputsDiffer = this.differs.find({}).create();
            this.compFactory = null;
            this.outputsShouldDisconnect$ = new rxjs.Subject();
            this.outputsChanged = function () { return false; };
        }
        Object.defineProperty(IoService.prototype, "compRef", {
            get: function () {
                return this.compInjector.componentRef;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IoService.prototype, "componentInst", {
            get: function () {
                return this.compRef ? this.compRef.instance : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IoService.prototype, "componentInstChanged", {
            get: function () {
                if (this.lastComponentInst !== this.componentInst) {
                    this.lastComponentInst = this.componentInst;
                    return true;
                }
                else {
                    return false;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IoService.prototype, "compCdr", {
            get: function () {
                // tslint:disable-next-line: deprecation
                return this.compRef ? this.compRef.injector.get(i0.ChangeDetectorRef) : null;
            },
            enumerable: false,
            configurable: true
        });
        IoService.prototype.ngOnDestroy = function () {
            this._disconnectOutputs();
        };
        IoService.prototype.init = function (componentInjector, options) {
            if (options === void 0) { options = {}; }
            this.checkInit = componentInjector ? noop : this.failInit;
            this.compInjector = componentInjector;
            if (options.trackOutputChanges) {
                var outputsDiffer_1 = this.differs.find({}).create();
                this.outputsChanged = function (outputs) { return !!outputsDiffer_1.diff(outputs); };
            }
        };
        IoService.prototype.update = function (inputs, outputs, inputsChanged, outputsChanged) {
            this.checkInit();
            this.updateIO(inputs, outputs);
            var compChanged = this.componentInstChanged;
            if (compChanged || inputsChanged) {
                var inputsChanges = this._getInputsChanges();
                if (inputsChanges) {
                    this._updateInputChanges(inputsChanges);
                }
                this.updateInputs(compChanged || !this.lastInputChanges);
            }
            if (compChanged || outputsChanged) {
                this.bindOutputs();
            }
        };
        IoService.prototype.maybeUpdate = function () {
            this.checkInit();
            if (this.componentInstChanged) {
                this.updateInputs(true);
                this.bindOutputs();
                return;
            }
            if (this.outputsChanged(this.outputs)) {
                this.bindOutputs();
            }
            if (!this.inputs) {
                return;
            }
            var inputsChanges = this._getInputsChanges();
            if (inputsChanges) {
                var isNotFirstChange = !!this.lastInputChanges;
                this._updateInputChanges(inputsChanges);
                if (isNotFirstChange) {
                    this.updateInputs();
                }
            }
        };
        IoService.prototype.updateIO = function (inputs, outputs) {
            this.inputs = inputs;
            this.outputs = outputs;
        };
        IoService.prototype.updateInputs = function (isFirstChange) {
            if (isFirstChange === void 0) { isFirstChange = false; }
            if (isFirstChange) {
                this._updateCompFactory();
            }
            var compInst = this.componentInst;
            var inputs = this.inputs;
            if (!inputs || !compInst) {
                return;
            }
            inputs = this._resolveInputs(inputs);
            Object.keys(inputs).forEach(function (p) { return (compInst[p] = inputs[p]); });
            // Mark component for check to re-render with new inputs
            if (this.compCdr) {
                this.compCdr.markForCheck();
            }
            this.notifyOnInputChanges(this.lastInputChanges, isFirstChange);
        };
        IoService.prototype.bindOutputs = function () {
            var _this = this;
            this._disconnectOutputs();
            var compInst = this.componentInst;
            var outputs = this.outputs;
            if (!outputs || !compInst) {
                return;
            }
            outputs = this._resolveOutputs(outputs);
            Object.keys(outputs)
                .filter(function (p) { return compInst[p]; })
                .forEach(function (p) { return compInst[p]
                .pipe(operators.takeUntil(_this.outputsShouldDisconnect$))
                .subscribe(function (event) {
                _this.cdr.markForCheck();
                return outputs[p](event);
            }); });
        };
        IoService.prototype.notifyOnInputChanges = function (changes, forceFirstChanges) {
            if (changes === void 0) { changes = {}; }
            // Exit early if component not interested to receive changes
            if (!this.componentInst.ngOnChanges) {
                return;
            }
            if (forceFirstChanges) {
                changes = this._collectFirstChanges();
            }
            this.componentInst.ngOnChanges(changes);
        };
        IoService.prototype._disconnectOutputs = function () {
            this.outputsShouldDisconnect$.next();
        };
        IoService.prototype._getInputsChanges = function () {
            return this.inputsDiffer.diff(this.inputs);
        };
        IoService.prototype._updateInputChanges = function (differ) {
            this.lastInputChanges = this._collectChangesFromDiffer(differ);
        };
        IoService.prototype._collectFirstChanges = function () {
            var changes = {};
            var inputs = this.inputs;
            Object.keys(inputs).forEach(function (prop) { return (changes[prop] = createNewChange(inputs[prop])); });
            return this._resolveChanges(changes);
        };
        IoService.prototype._collectChangesFromDiffer = function (differ) {
            var changes = {};
            differ.forEachAddedItem(function (record) { return (changes[record.key] = createNewChange(record.currentValue)); });
            differ.forEachChangedItem(function (record) { return (changes[record.key] = createChange(record.currentValue, record.previousValue)); });
            return this._resolveChanges(changes);
        };
        IoService.prototype._resolveCompFactory = function () {
            try {
                try {
                    return this.cfr.resolveComponentFactory(this.compRef.componentType);
                }
                catch (e) {
                    // Fallback if componentType does not exist (happens on NgComponentOutlet)
                    return this.cfr.resolveComponentFactory(this.compRef.instance.constructor);
                }
            }
            catch (e) {
                // Factory not available - bailout
                return null;
            }
        };
        IoService.prototype._updateCompFactory = function () {
            this.compFactory = this._resolveCompFactory();
        };
        IoService.prototype._resolveInputs = function (inputs) {
            if (!this.compFactory) {
                return inputs;
            }
            return this._remapIO(inputs, this.compFactory.inputs);
        };
        IoService.prototype._resolveOutputs = function (outputs) {
            outputs = this._processOutputs(outputs);
            if (!this.compFactory) {
                return outputs;
            }
            return this._remapIO(outputs, this.compFactory.outputs);
        };
        IoService.prototype._processOutputs = function (outputs) {
            var _this = this;
            var processedOutputs = {};
            Object.keys(outputs).forEach(function (key) {
                var outputExpr = outputs[key];
                if (typeof outputExpr === 'function') {
                    processedOutputs[key] = outputExpr;
                }
                else {
                    processedOutputs[key] =
                        outputExpr && _this._processOutputArgs(outputExpr);
                }
            });
            return processedOutputs;
        };
        IoService.prototype._processOutputArgs = function (output) {
            var _this = this;
            var handler = output.handler;
            var args = 'args' in output ? output.args || [] : [this.eventArgument];
            return function (event) { return handler.apply(void 0, __spreadArray([], __read(args.map(function (arg) { return (arg === _this.eventArgument ? event : arg); })))); };
        };
        IoService.prototype._resolveChanges = function (changes) {
            if (!this.compFactory) {
                return changes;
            }
            return this._remapIO(changes, this.compFactory.inputs);
        };
        IoService.prototype._remapIO = function (io, mapping) {
            var _this = this;
            var newIO = {};
            Object.keys(io).forEach(function (key) {
                var newKey = _this._findPropByTplInMapping(key, mapping) || key;
                newIO[newKey] = io[key];
            });
            return newIO;
        };
        IoService.prototype._findPropByTplInMapping = function (tplName, mapping) {
            var e_1, _a;
            try {
                for (var mapping_1 = __values(mapping), mapping_1_1 = mapping_1.next(); !mapping_1_1.done; mapping_1_1 = mapping_1.next()) {
                    var map = mapping_1_1.value;
                    if (map.templateName === tplName) {
                        return map.propName;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (mapping_1_1 && !mapping_1_1.done && (_a = mapping_1.return)) _a.call(mapping_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        IoService.prototype.failInit = function () {
            throw Error('IoService: ComponentInjector was not set! Please call init() method!');
        };
        return IoService;
    }());
    IoService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    IoService.ctorParameters = function () { return [
        { type: i0.KeyValueDiffers },
        { type: i0.ComponentFactoryResolver },
        { type: String, decorators: [{ type: i0.Inject, args: [EventArgumentToken,] }] },
        { type: i0.ChangeDetectorRef }
    ]; };

    var IoFactoryService = /** @class */ (function () {
        function IoFactoryService(differs, cfr, eventArgument, cdr) {
            this.differs = differs;
            this.cfr = cfr;
            this.eventArgument = eventArgument;
            this.cdr = cdr;
        }
        IoFactoryService.prototype.create = function () {
            return new IoService(this.differs, this.cfr, this.eventArgument, this.cdr);
        };
        return IoFactoryService;
    }());
    IoFactoryService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    IoFactoryService.ctorParameters = function () { return [
        { type: i0.KeyValueDiffers },
        { type: i0.ComponentFactoryResolver },
        { type: String, decorators: [{ type: i0.Inject, args: [EventArgumentToken,] }] },
        { type: i0.ChangeDetectorRef }
    ]; };

    // tslint:disable-next-line: no-conflicting-lifecycle
    var DynamicIoDirective = /** @class */ (function () {
        function DynamicIoDirective(ioService, componentInjector) {
            this.ioService = ioService;
            this.componentInjector = componentInjector;
            this.ioService.init(this.componentInjector);
        }
        Object.defineProperty(DynamicIoDirective.prototype, "inputs", {
            get: function () {
                return this.ndcDynamicInputs || this.ngComponentOutletNdcDynamicInputs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicIoDirective.prototype, "outputs", {
            get: function () {
                return this.ndcDynamicOutputs || this.ngComponentOutletNdcDynamicOutputs;
            },
            enumerable: false,
            configurable: true
        });
        DynamicIoDirective.prototype.ngOnChanges = function (changes) {
            this.ioService.update(this.inputs, this.outputs, this.inputsChanged(changes), this.outputsChanged(changes));
        };
        DynamicIoDirective.prototype.ngDoCheck = function () {
            this.ioService.maybeUpdate();
        };
        DynamicIoDirective.prototype.inputsChanged = function (changes) {
            return ('ngComponentOutletNdcDynamicInputs' in changes ||
                'ndcDynamicInputs' in changes);
        };
        DynamicIoDirective.prototype.outputsChanged = function (changes) {
            return ('ngComponentOutletNdcDynamicOutputs' in changes ||
                'ndcDynamicOutputs' in changes);
        };
        return DynamicIoDirective;
    }());
    DynamicIoDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ndcDynamicInputs],[ndcDynamicOutputs],[ngComponentOutletNdcDynamicInputs],[ngComponentOutletNdcDynamicOutputs]',
                    providers: [IoService],
                },] }
    ];
    /** @nocollapse */
    DynamicIoDirective.ctorParameters = function () { return [
        { type: IoService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [DynamicComponentInjectorToken,] }, { type: i0.Optional }] }
    ]; };
    DynamicIoDirective.propDecorators = {
        ndcDynamicInputs: [{ type: i0.Input }],
        ngComponentOutletNdcDynamicInputs: [{ type: i0.Input }],
        ndcDynamicOutputs: [{ type: i0.Input }],
        ngComponentOutletNdcDynamicOutputs: [{ type: i0.Input }]
    };

    var DynamicIoModule = /** @class */ (function () {
        function DynamicIoModule() {
        }
        return DynamicIoModule;
    }());
    DynamicIoModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [DynamicIoDirective, ComponentOutletInjectorModule],
                    declarations: [DynamicIoDirective],
                },] }
    ];

    var DynamicComponent = /** @class */ (function () {
        function DynamicComponent(vcr, cfr) {
            this.vcr = vcr;
            this.cfr = cfr;
            this.ndcDynamicCreated = new i0.EventEmitter();
        }
        DynamicComponent.prototype.ngOnChanges = function (changes) {
            if (changes.ndcDynamicComponent) {
                this.createDynamicComponent();
            }
        };
        DynamicComponent.prototype.createDynamicComponent = function () {
            this.vcr.clear();
            this.componentRef = null;
            if (this.ndcDynamicComponent) {
                this.componentRef = this.vcr.createComponent(this.cfr.resolveComponentFactory(this.ndcDynamicComponent), 0, this._resolveInjector(), this.ndcDynamicContent);
                this.ndcDynamicCreated.emit(this.componentRef);
            }
        };
        DynamicComponent.prototype._resolveInjector = function () {
            var injector = this.ndcDynamicInjector || this.vcr.injector;
            if (this.ndcDynamicProviders) {
                injector = i0.Injector.create({
                    providers: this.ndcDynamicProviders,
                    parent: injector,
                });
            }
            return injector;
        };
        return DynamicComponent;
    }());
    DynamicComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ndc-dynamic',
                    template: '',
                    providers: [
                        { provide: DynamicComponentInjectorToken, useExisting: DynamicComponent },
                    ]
                },] }
    ];
    /** @nocollapse */
    DynamicComponent.ctorParameters = function () { return [
        { type: i0.ViewContainerRef },
        { type: i0.ComponentFactoryResolver }
    ]; };
    DynamicComponent.propDecorators = {
        ndcDynamicComponent: [{ type: i0.Input }],
        ndcDynamicInjector: [{ type: i0.Input }],
        ndcDynamicProviders: [{ type: i0.Input }],
        ndcDynamicContent: [{ type: i0.Input }],
        ndcDynamicCreated: [{ type: i0.Output }]
    };

    var DynamicModule = /** @class */ (function () {
        function DynamicModule() {
        }
        return DynamicModule;
    }());
    DynamicModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, DynamicIoModule],
                    exports: [DynamicComponent, DynamicIoModule],
                    declarations: [DynamicComponent],
                },] }
    ];

    var DynamicAttributesDirective = /** @class */ (function () {
        function DynamicAttributesDirective(renderer, differs, injector, componentInjector) {
            this.renderer = renderer;
            this.differs = differs;
            this.injector = injector;
            this.componentInjector = componentInjector;
            this.attrsDiffer = this.differs.find({}).create();
        }
        Object.defineProperty(DynamicAttributesDirective.prototype, "_attributes", {
            get: function () {
                return (this.ndcDynamicAttributes || this.ngComponentOutletNdcDynamicAttributes);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicAttributesDirective.prototype, "_nativeElement", {
            get: function () {
                var _a;
                return (_a = this.componentInjector.componentRef) === null || _a === void 0 ? void 0 : _a.location.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicAttributesDirective.prototype, "_compType", {
            get: function () {
                var _a;
                return (_a = this.componentInjector.componentRef) === null || _a === void 0 ? void 0 : _a.componentType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicAttributesDirective.prototype, "_isCompChanged", {
            get: function () {
                if (this.lastCompType !== this._compType) {
                    this.lastCompType = this._compType;
                    return true;
                }
                return false;
            },
            enumerable: false,
            configurable: true
        });
        DynamicAttributesDirective.prototype.ngDoCheck = function () {
            var isCompChanged = this._isCompChanged;
            var changes = this.attrsDiffer.diff(this._attributes);
            if (changes) {
                this.lastAttrActions = this._changesToAttrActions(changes);
            }
            if (changes || (isCompChanged && this.lastAttrActions)) {
                this._updateAttributes(this.lastAttrActions);
            }
        };
        DynamicAttributesDirective.prototype.setAttribute = function (name, value, namespace) {
            if (this._nativeElement) {
                this.renderer.setAttribute(this._nativeElement, name, value, namespace);
            }
        };
        DynamicAttributesDirective.prototype.removeAttribute = function (name, namespace) {
            if (this._nativeElement) {
                this.renderer.removeAttribute(this._nativeElement, name, namespace);
            }
        };
        DynamicAttributesDirective.prototype._updateAttributes = function (actions) {
            var _this = this;
            // ? Early exit if no dynamic component
            if (!this._compType) {
                return;
            }
            Object.keys(actions.set).forEach(function (key) { return _this.setAttribute(key, actions.set[key]); });
            actions.remove.forEach(function (key) { return _this.removeAttribute(key); });
        };
        DynamicAttributesDirective.prototype._changesToAttrActions = function (changes) {
            var attrActions = {
                set: {},
                remove: [],
            };
            changes.forEachAddedItem(function (r) { return (attrActions.set[r.key] = r.currentValue); });
            changes.forEachChangedItem(function (r) { return (attrActions.set[r.key] = r.currentValue); });
            changes.forEachRemovedItem(function (r) { return attrActions.remove.push(r.key); });
            return attrActions;
        };
        return DynamicAttributesDirective;
    }());
    DynamicAttributesDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ndcDynamicAttributes],[ngComponentOutletNdcDynamicAttributes]',
                    exportAs: 'ndcDynamicAttributes',
                },] }
    ];
    /** @nocollapse */
    DynamicAttributesDirective.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: i0.KeyValueDiffers },
        { type: i0.Injector },
        { type: undefined, decorators: [{ type: i0.Inject, args: [DynamicComponentInjectorToken,] }, { type: i0.Optional }] }
    ]; };
    DynamicAttributesDirective.propDecorators = {
        ndcDynamicAttributes: [{ type: i0.Input }],
        ngComponentOutletNdcDynamicAttributes: [{ type: i0.Input }]
    };

    var DynamicAttributesModule = /** @class */ (function () {
        function DynamicAttributesModule() {
        }
        return DynamicAttributesModule;
    }());
    DynamicAttributesModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [DynamicAttributesDirective, ComponentOutletInjectorModule],
                    declarations: [DynamicAttributesDirective],
                },] }
    ];

    function browserWindowFactory() {
        return window;
    }

    var WindowRefToken = new i0.InjectionToken('WindowRef', {
        providedIn: 'root',
        factory: browserWindowFactory,
    });
    var WindowRefService = /** @class */ (function () {
        function WindowRefService(injector) {
            this.injector = injector;
            this.nativeWindow = this.injector.get(WindowRefToken, null);
        }
        return WindowRefService;
    }());
    /** @nocollapse */ WindowRefService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function WindowRefService_Factory() { return new WindowRefService(i0__namespace.ɵɵinject(i0__namespace.INJECTOR)); }, token: WindowRefService, providedIn: "root" });
    WindowRefService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    WindowRefService.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };

    function dynamicDirectiveDef(type, inputs, outputs) {
        return { type: type, inputs: inputs, outputs: outputs };
    }
    var DynamicDirectivesDirective = /** @class */ (function () {
        function DynamicDirectivesDirective(iterableDiffers, ioFactoryService, windowRef, componentInjector) {
            this.iterableDiffers = iterableDiffers;
            this.ioFactoryService = ioFactoryService;
            this.windowRef = windowRef;
            this.componentInjector = componentInjector;
            this.ndcDynamicDirectivesCreated = new i0.EventEmitter();
            this.dirRef = new Map();
            this.dirIo = new Map();
            this.dirsDiffer = this.iterableDiffers
                .find([])
                .create(function (_, def) { return def.type; });
        }
        Object.defineProperty(DynamicDirectivesDirective.prototype, "directives", {
            get: function () {
                return (this.ndcDynamicDirectives || this.ngComponentOutletNdcDynamicDirectives);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicDirectivesDirective.prototype, "componentRef", {
            get: function () {
                return this.componentInjector.componentRef;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicDirectivesDirective.prototype, "compInstance", {
            get: function () {
                return this.componentRef && this.componentRef.instance;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicDirectivesDirective.prototype, "isCompChanged", {
            get: function () {
                if (this.lastCompInstance !== this.compInstance) {
                    this.lastCompInstance = this.compInstance;
                    return true;
                }
                return false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicDirectivesDirective.prototype, "hostInjector", {
            get: function () {
                return this.componentRef.injector;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicDirectivesDirective.prototype, "hostVcr", {
            get: function () {
                // NOTE: Accessing private APIs of Angular
                // tslint:disable-next-line: no-string-literal
                return this.componentRef['_viewRef']['_viewContainerRef'];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DynamicDirectivesDirective.prototype, "reflect", {
            get: function () {
                return this.windowRef.nativeWindow.Reflect;
            },
            enumerable: false,
            configurable: true
        });
        DynamicDirectivesDirective.prototype.ngDoCheck = function () {
            if (this.maybeDestroyDirectives()) {
                return;
            }
            var dirsChanges = this.dirsDiffer.diff(this.directives);
            if (!dirsChanges) {
                return this.updateDirectives();
            }
            this.processDirChanges(dirsChanges);
        };
        DynamicDirectivesDirective.prototype.ngOnDestroy = function () {
            this.destroyAllDirectives();
        };
        DynamicDirectivesDirective.prototype.maybeDestroyDirectives = function () {
            if (this.isCompChanged || !this.componentRef) {
                this.dirsDiffer.diff([]);
                this.destroyAllDirectives();
            }
            return !this.componentRef;
        };
        DynamicDirectivesDirective.prototype.processDirChanges = function (changes) {
            var _this = this;
            changes.forEachRemovedItem(function (_c) {
                var item = _c.item;
                return _this.destroyDirective(item);
            });
            var createdDirs = [];
            changes.forEachAddedItem(function (_c) {
                var item = _c.item;
                return createdDirs.push(_this.initDirective(item));
            });
            if (createdDirs.length) {
                this.ndcDynamicDirectivesCreated.emit(createdDirs.filter(Boolean));
            }
        };
        DynamicDirectivesDirective.prototype.updateDirectives = function () {
            var _this = this;
            this.directives.forEach(function (dir) { return _this.updateDirective(dir); });
        };
        DynamicDirectivesDirective.prototype.updateDirective = function (dirDef) {
            var io = this.dirIo.get(dirDef.type);
            io.update(dirDef.inputs, dirDef.outputs, false, false);
            io.maybeUpdate();
        };
        DynamicDirectivesDirective.prototype.initDirective = function (dirDef) {
            if (this.dirRef.has(dirDef.type)) {
                return;
            }
            var instance = this.createDirective(dirDef.type);
            var dir = {
                instance: instance,
                type: dirDef.type,
                injector: this.hostInjector,
                hostComponent: this.componentRef.instance,
                hostView: this.componentRef.hostView,
                location: this.componentRef.location,
                changeDetectorRef: this.componentRef.changeDetectorRef,
                onDestroy: this.componentRef.onDestroy,
            };
            this.initDirIO(dir, dirDef.inputs, dirDef.outputs);
            this.callInitHooks(instance);
            this.dirRef.set(dir.type, dir);
            return dir;
        };
        DynamicDirectivesDirective.prototype.destroyAllDirectives = function () {
            var _this = this;
            this.dirRef.forEach(function (dir) { return _this.destroyDirRef(dir); });
            this.dirRef.clear();
            this.dirIo.clear();
        };
        DynamicDirectivesDirective.prototype.destroyDirective = function (dirDef) {
            this.destroyDirRef(this.dirRef.get(dirDef.type));
            this.dirRef.delete(dirDef.type);
            this.dirIo.delete(dirDef.type);
        };
        DynamicDirectivesDirective.prototype.initDirIO = function (dir, inputs, outputs) {
            var io = this.ioFactoryService.create();
            io.init({ componentRef: this.dirToCompDef(dir) }, { trackOutputChanges: true });
            io.update(inputs, outputs, !!inputs, !!outputs);
            this.dirIo.set(dir.type, io);
        };
        DynamicDirectivesDirective.prototype.dirToCompDef = function (dir) {
            return {
                changeDetectorRef: this.componentRef.changeDetectorRef,
                hostView: this.componentRef.hostView,
                location: this.componentRef.location,
                destroy: this.componentRef.destroy,
                onDestroy: this.componentRef.onDestroy,
                injector: this.componentRef.injector,
                instance: dir.instance,
                componentType: dir.type,
            };
        };
        DynamicDirectivesDirective.prototype.destroyDirRef = function (dir) {
            var io = this.dirIo.get(dir.type);
            io.ngOnDestroy();
            if ('ngOnDestroy' in dir.instance) {
                dir.instance.ngOnDestroy();
            }
        };
        DynamicDirectivesDirective.prototype.createDirective = function (dirType) {
            var directiveInjector = i0.Injector.create({
                providers: [
                    {
                        provide: dirType,
                        useClass: dirType,
                        deps: this.resolveDirParamTypes(dirType),
                    },
                    { provide: i0.ElementRef, useValue: this.componentRef.location },
                ],
                parent: this.hostInjector,
                name: "DynamicDirectiveInjector:" + dirType.name + "@" + this.componentRef.componentType.name,
            });
            return directiveInjector.get(dirType);
        };
        DynamicDirectivesDirective.prototype.resolveDirParamTypes = function (dirType) {
            var _a, _b;
            return (
            // First try Angular Compiler's metadata
            (_b = (_a = extractNgParamTypes(dirType)) !== null && _a !== void 0 ? _a :
                // Then fallback to Typescript Reflect API
                getCtorParamTypes(dirType, this.reflect)) !== null && _b !== void 0 ? _b :
                // Bailout
                []);
        };
        DynamicDirectivesDirective.prototype.callInitHooks = function (obj) {
            this.callHook(obj, 'ngOnInit');
            this.callHook(obj, 'ngDoCheck');
            this.callHook(obj, 'ngAfterContentInit');
            this.callHook(obj, 'ngAfterContentChecked');
            this.callHook(obj, 'ngAfterViewInit');
            this.callHook(obj, 'ngAfterViewChecked');
        };
        DynamicDirectivesDirective.prototype.callHook = function (obj, hook, args) {
            if (args === void 0) { args = []; }
            if (obj[hook]) {
                obj[hook].apply(obj, __spreadArray([], __read(args)));
            }
        };
        return DynamicDirectivesDirective;
    }());
    DynamicDirectivesDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ndcDynamicDirectives],[ngComponentOutletNdcDynamicDirectives]',
                    providers: [IoFactoryService],
                },] }
    ];
    /** @nocollapse */
    DynamicDirectivesDirective.ctorParameters = function () { return [
        { type: i0.IterableDiffers },
        { type: IoFactoryService },
        { type: WindowRefService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [DynamicComponentInjectorToken,] }, { type: i0.Optional }] }
    ]; };
    DynamicDirectivesDirective.propDecorators = {
        ndcDynamicDirectives: [{ type: i0.Input }],
        ngComponentOutletNdcDynamicDirectives: [{ type: i0.Input }],
        ndcDynamicDirectivesCreated: [{ type: i0.Output }]
    };

    var DynamicDirectivesModule = /** @class */ (function () {
        function DynamicDirectivesModule() {
        }
        return DynamicDirectivesModule;
    }());
    DynamicDirectivesModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [DynamicDirectivesDirective, ComponentOutletInjectorModule],
                    declarations: [DynamicDirectivesDirective],
                },] }
    ];

    /*
     * Public API Surface of ng-dynamic-component
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.COMPONENT_INJECTOR = COMPONENT_INJECTOR;
    exports.ComponentOutletInjectorDirective = ComponentOutletInjectorDirective;
    exports.ComponentOutletInjectorModule = ComponentOutletInjectorModule;
    exports.DynamicAttributesDirective = DynamicAttributesDirective;
    exports.DynamicAttributesModule = DynamicAttributesModule;
    exports.DynamicComponent = DynamicComponent;
    exports.DynamicComponentInjectorToken = DynamicComponentInjectorToken;
    exports.DynamicDirectivesDirective = DynamicDirectivesDirective;
    exports.DynamicDirectivesModule = DynamicDirectivesModule;
    exports.DynamicIoDirective = DynamicIoDirective;
    exports.DynamicIoModule = DynamicIoModule;
    exports.DynamicModule = DynamicModule;
    exports.EventArgumentToken = EventArgumentToken;
    exports.defaultEventArgumentFactory = defaultEventArgumentFactory;
    exports.dynamicDirectiveDef = dynamicDirectiveDef;
    exports.ɵa = DynamicIoModule;
    exports.ɵb = DynamicComponentInjectorToken;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-dynamic-component.umd.js.map
