import * as i0 from '@angular/core';
import { InjectionToken, Directive, Host, NgModule, SimpleChange, ChangeDetectorRef, Injectable, KeyValueDiffers, ComponentFactoryResolver, Inject, Optional, Input, EventEmitter, Injector, Component, ViewContainerRef, Output, Renderer2, ElementRef, IterableDiffers } from '@angular/core';
import { NgComponentOutlet, CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

function defaultEventArgumentFactory() {
    return '$event';
}
const EventArgumentToken = new InjectionToken('EventArgument', {
    providedIn: 'root',
    factory: defaultEventArgumentFactory,
});

const DynamicComponentInjectorToken = new InjectionToken('DynamicComponentInjector');
/**
 * @deprecated Since v6.0.0 - Use {@link DynamicComponentInjectorToken} instead
 * and provide component class via `useExisting` instead of `useValue`
 */
const COMPONENT_INJECTOR = DynamicComponentInjectorToken;

class ComponentOutletInjectorDirective {
    constructor(componentOutlet) {
        this.componentOutlet = componentOutlet;
    }
    get componentRef() {
        // NOTE: Accessing private APIs of Angular
        return this.componentOutlet._componentRef;
    }
}
ComponentOutletInjectorDirective.decorators = [
    { type: Directive, args: [{
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
ComponentOutletInjectorDirective.ctorParameters = () => [
    { type: NgComponentOutlet, decorators: [{ type: Host }] }
];

class ComponentOutletInjectorModule {
}
ComponentOutletInjectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [ComponentOutletInjectorDirective],
                declarations: [ComponentOutletInjectorDirective],
            },] }
];

function createNewChange(val) {
    return new SimpleChange(undefined, val, true);
}
function createChange(val, prevVal) {
    return new SimpleChange(prevVal, val, false);
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
    return (_c = (_b = (_a = type) === null || _a === void 0 ? void 0 : _a.ctorParameters) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.map(param => param.type);
}

class IoService {
    constructor(differs, cfr, eventArgument, cdr) {
        this.differs = differs;
        this.cfr = cfr;
        this.eventArgument = eventArgument;
        this.cdr = cdr;
        this.checkInit = this.failInit;
        this.lastComponentInst = null;
        this.inputsDiffer = this.differs.find({}).create();
        this.compFactory = null;
        this.outputsShouldDisconnect$ = new Subject();
        this.outputsChanged = () => false;
    }
    get compRef() {
        return this.compInjector.componentRef;
    }
    get componentInst() {
        return this.compRef ? this.compRef.instance : null;
    }
    get componentInstChanged() {
        if (this.lastComponentInst !== this.componentInst) {
            this.lastComponentInst = this.componentInst;
            return true;
        }
        else {
            return false;
        }
    }
    get compCdr() {
        // tslint:disable-next-line: deprecation
        return this.compRef ? this.compRef.injector.get(ChangeDetectorRef) : null;
    }
    ngOnDestroy() {
        this._disconnectOutputs();
    }
    init(componentInjector, options = {}) {
        this.checkInit = componentInjector ? noop : this.failInit;
        this.compInjector = componentInjector;
        if (options.trackOutputChanges) {
            const outputsDiffer = this.differs.find({}).create();
            this.outputsChanged = outputs => !!outputsDiffer.diff(outputs);
        }
    }
    update(inputs, outputs, inputsChanged, outputsChanged) {
        this.checkInit();
        this.updateIO(inputs, outputs);
        const compChanged = this.componentInstChanged;
        if (compChanged || inputsChanged) {
            const inputsChanges = this._getInputsChanges();
            if (inputsChanges) {
                this._updateInputChanges(inputsChanges);
            }
            this.updateInputs(compChanged || !this.lastInputChanges);
        }
        if (compChanged || outputsChanged) {
            this.bindOutputs();
        }
    }
    maybeUpdate() {
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
        const inputsChanges = this._getInputsChanges();
        if (inputsChanges) {
            const isNotFirstChange = !!this.lastInputChanges;
            this._updateInputChanges(inputsChanges);
            if (isNotFirstChange) {
                this.updateInputs();
            }
        }
    }
    updateIO(inputs, outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
    }
    updateInputs(isFirstChange = false) {
        if (isFirstChange) {
            this._updateCompFactory();
        }
        const compInst = this.componentInst;
        let inputs = this.inputs;
        if (!inputs || !compInst) {
            return;
        }
        inputs = this._resolveInputs(inputs);
        Object.keys(inputs).forEach(p => (compInst[p] = inputs[p]));
        // Mark component for check to re-render with new inputs
        if (this.compCdr) {
            this.compCdr.markForCheck();
        }
        this.notifyOnInputChanges(this.lastInputChanges, isFirstChange);
    }
    bindOutputs() {
        this._disconnectOutputs();
        const compInst = this.componentInst;
        let outputs = this.outputs;
        if (!outputs || !compInst) {
            return;
        }
        outputs = this._resolveOutputs(outputs);
        Object.keys(outputs)
            .filter(p => compInst[p])
            .forEach(p => compInst[p]
            .pipe(takeUntil(this.outputsShouldDisconnect$))
            .subscribe((event) => {
            this.cdr.markForCheck();
            return outputs[p](event);
        }));
    }
    notifyOnInputChanges(changes = {}, forceFirstChanges) {
        // Exit early if component not interested to receive changes
        if (!this.componentInst.ngOnChanges) {
            return;
        }
        if (forceFirstChanges) {
            changes = this._collectFirstChanges();
        }
        this.componentInst.ngOnChanges(changes);
    }
    _disconnectOutputs() {
        this.outputsShouldDisconnect$.next();
    }
    _getInputsChanges() {
        return this.inputsDiffer.diff(this.inputs);
    }
    _updateInputChanges(differ) {
        this.lastInputChanges = this._collectChangesFromDiffer(differ);
    }
    _collectFirstChanges() {
        const changes = {};
        const inputs = this.inputs;
        Object.keys(inputs).forEach(prop => (changes[prop] = createNewChange(inputs[prop])));
        return this._resolveChanges(changes);
    }
    _collectChangesFromDiffer(differ) {
        const changes = {};
        differ.forEachAddedItem(record => (changes[record.key] = createNewChange(record.currentValue)));
        differ.forEachChangedItem(record => (changes[record.key] = createChange(record.currentValue, record.previousValue)));
        return this._resolveChanges(changes);
    }
    _resolveCompFactory() {
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
    }
    _updateCompFactory() {
        this.compFactory = this._resolveCompFactory();
    }
    _resolveInputs(inputs) {
        if (!this.compFactory) {
            return inputs;
        }
        return this._remapIO(inputs, this.compFactory.inputs);
    }
    _resolveOutputs(outputs) {
        outputs = this._processOutputs(outputs);
        if (!this.compFactory) {
            return outputs;
        }
        return this._remapIO(outputs, this.compFactory.outputs);
    }
    _processOutputs(outputs) {
        const processedOutputs = {};
        Object.keys(outputs).forEach(key => {
            const outputExpr = outputs[key];
            if (typeof outputExpr === 'function') {
                processedOutputs[key] = outputExpr;
            }
            else {
                processedOutputs[key] =
                    outputExpr && this._processOutputArgs(outputExpr);
            }
        });
        return processedOutputs;
    }
    _processOutputArgs(output) {
        const { handler } = output;
        const args = 'args' in output ? output.args || [] : [this.eventArgument];
        return event => handler(...args.map(arg => (arg === this.eventArgument ? event : arg)));
    }
    _resolveChanges(changes) {
        if (!this.compFactory) {
            return changes;
        }
        return this._remapIO(changes, this.compFactory.inputs);
    }
    _remapIO(io, mapping) {
        const newIO = {};
        Object.keys(io).forEach(key => {
            const newKey = this._findPropByTplInMapping(key, mapping) || key;
            newIO[newKey] = io[key];
        });
        return newIO;
    }
    _findPropByTplInMapping(tplName, mapping) {
        for (const map of mapping) {
            if (map.templateName === tplName) {
                return map.propName;
            }
        }
        return null;
    }
    failInit() {
        throw Error('IoService: ComponentInjector was not set! Please call init() method!');
    }
}
IoService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IoService.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: ComponentFactoryResolver },
    { type: String, decorators: [{ type: Inject, args: [EventArgumentToken,] }] },
    { type: ChangeDetectorRef }
];

class IoFactoryService {
    constructor(differs, cfr, eventArgument, cdr) {
        this.differs = differs;
        this.cfr = cfr;
        this.eventArgument = eventArgument;
        this.cdr = cdr;
    }
    create() {
        return new IoService(this.differs, this.cfr, this.eventArgument, this.cdr);
    }
}
IoFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IoFactoryService.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: ComponentFactoryResolver },
    { type: String, decorators: [{ type: Inject, args: [EventArgumentToken,] }] },
    { type: ChangeDetectorRef }
];

// tslint:disable-next-line: no-conflicting-lifecycle
class DynamicIoDirective {
    constructor(ioService, componentInjector) {
        this.ioService = ioService;
        this.componentInjector = componentInjector;
        this.ioService.init(this.componentInjector);
    }
    get inputs() {
        return this.ndcDynamicInputs || this.ngComponentOutletNdcDynamicInputs;
    }
    get outputs() {
        return this.ndcDynamicOutputs || this.ngComponentOutletNdcDynamicOutputs;
    }
    ngOnChanges(changes) {
        this.ioService.update(this.inputs, this.outputs, this.inputsChanged(changes), this.outputsChanged(changes));
    }
    ngDoCheck() {
        this.ioService.maybeUpdate();
    }
    inputsChanged(changes) {
        return ('ngComponentOutletNdcDynamicInputs' in changes ||
            'ndcDynamicInputs' in changes);
    }
    outputsChanged(changes) {
        return ('ngComponentOutletNdcDynamicOutputs' in changes ||
            'ndcDynamicOutputs' in changes);
    }
}
DynamicIoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ndcDynamicInputs],[ndcDynamicOutputs],[ngComponentOutletNdcDynamicInputs],[ngComponentOutletNdcDynamicOutputs]',
                providers: [IoService],
            },] }
];
/** @nocollapse */
DynamicIoDirective.ctorParameters = () => [
    { type: IoService },
    { type: undefined, decorators: [{ type: Inject, args: [DynamicComponentInjectorToken,] }, { type: Optional }] }
];
DynamicIoDirective.propDecorators = {
    ndcDynamicInputs: [{ type: Input }],
    ngComponentOutletNdcDynamicInputs: [{ type: Input }],
    ndcDynamicOutputs: [{ type: Input }],
    ngComponentOutletNdcDynamicOutputs: [{ type: Input }]
};

class DynamicIoModule {
}
DynamicIoModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [DynamicIoDirective, ComponentOutletInjectorModule],
                declarations: [DynamicIoDirective],
            },] }
];

class DynamicComponent {
    constructor(vcr, cfr) {
        this.vcr = vcr;
        this.cfr = cfr;
        this.ndcDynamicCreated = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.ndcDynamicComponent) {
            this.createDynamicComponent();
        }
    }
    createDynamicComponent() {
        this.vcr.clear();
        this.componentRef = null;
        if (this.ndcDynamicComponent) {
            this.componentRef = this.vcr.createComponent(this.cfr.resolveComponentFactory(this.ndcDynamicComponent), 0, this._resolveInjector(), this.ndcDynamicContent);
            this.ndcDynamicCreated.emit(this.componentRef);
        }
    }
    _resolveInjector() {
        let injector = this.ndcDynamicInjector || this.vcr.injector;
        if (this.ndcDynamicProviders) {
            injector = Injector.create({
                providers: this.ndcDynamicProviders,
                parent: injector,
            });
        }
        return injector;
    }
}
DynamicComponent.decorators = [
    { type: Component, args: [{
                selector: 'ndc-dynamic',
                template: '',
                providers: [
                    { provide: DynamicComponentInjectorToken, useExisting: DynamicComponent },
                ]
            },] }
];
/** @nocollapse */
DynamicComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver }
];
DynamicComponent.propDecorators = {
    ndcDynamicComponent: [{ type: Input }],
    ndcDynamicInjector: [{ type: Input }],
    ndcDynamicProviders: [{ type: Input }],
    ndcDynamicContent: [{ type: Input }],
    ndcDynamicCreated: [{ type: Output }]
};

class DynamicModule {
}
DynamicModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DynamicIoModule],
                exports: [DynamicComponent, DynamicIoModule],
                declarations: [DynamicComponent],
            },] }
];

class DynamicAttributesDirective {
    constructor(renderer, differs, injector, componentInjector) {
        this.renderer = renderer;
        this.differs = differs;
        this.injector = injector;
        this.componentInjector = componentInjector;
        this.attrsDiffer = this.differs.find({}).create();
    }
    get _attributes() {
        return (this.ndcDynamicAttributes || this.ngComponentOutletNdcDynamicAttributes);
    }
    get _nativeElement() {
        var _a;
        return (_a = this.componentInjector.componentRef) === null || _a === void 0 ? void 0 : _a.location.nativeElement;
    }
    get _compType() {
        var _a;
        return (_a = this.componentInjector.componentRef) === null || _a === void 0 ? void 0 : _a.componentType;
    }
    get _isCompChanged() {
        if (this.lastCompType !== this._compType) {
            this.lastCompType = this._compType;
            return true;
        }
        return false;
    }
    ngDoCheck() {
        const isCompChanged = this._isCompChanged;
        const changes = this.attrsDiffer.diff(this._attributes);
        if (changes) {
            this.lastAttrActions = this._changesToAttrActions(changes);
        }
        if (changes || (isCompChanged && this.lastAttrActions)) {
            this._updateAttributes(this.lastAttrActions);
        }
    }
    setAttribute(name, value, namespace) {
        if (this._nativeElement) {
            this.renderer.setAttribute(this._nativeElement, name, value, namespace);
        }
    }
    removeAttribute(name, namespace) {
        if (this._nativeElement) {
            this.renderer.removeAttribute(this._nativeElement, name, namespace);
        }
    }
    _updateAttributes(actions) {
        // ? Early exit if no dynamic component
        if (!this._compType) {
            return;
        }
        Object.keys(actions.set).forEach(key => this.setAttribute(key, actions.set[key]));
        actions.remove.forEach(key => this.removeAttribute(key));
    }
    _changesToAttrActions(changes) {
        const attrActions = {
            set: {},
            remove: [],
        };
        changes.forEachAddedItem(r => (attrActions.set[r.key] = r.currentValue));
        changes.forEachChangedItem(r => (attrActions.set[r.key] = r.currentValue));
        changes.forEachRemovedItem(r => attrActions.remove.push(r.key));
        return attrActions;
    }
}
DynamicAttributesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ndcDynamicAttributes],[ngComponentOutletNdcDynamicAttributes]',
                exportAs: 'ndcDynamicAttributes',
            },] }
];
/** @nocollapse */
DynamicAttributesDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: KeyValueDiffers },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DynamicComponentInjectorToken,] }, { type: Optional }] }
];
DynamicAttributesDirective.propDecorators = {
    ndcDynamicAttributes: [{ type: Input }],
    ngComponentOutletNdcDynamicAttributes: [{ type: Input }]
};

class DynamicAttributesModule {
}
DynamicAttributesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [DynamicAttributesDirective, ComponentOutletInjectorModule],
                declarations: [DynamicAttributesDirective],
            },] }
];

function browserWindowFactory() {
    return window;
}

const WindowRefToken = new InjectionToken('WindowRef', {
    providedIn: 'root',
    factory: browserWindowFactory,
});
class WindowRefService {
    constructor(injector) {
        this.injector = injector;
        this.nativeWindow = this.injector.get(WindowRefToken, null);
    }
}
/** @nocollapse */ WindowRefService.ɵprov = i0.ɵɵdefineInjectable({ factory: function WindowRefService_Factory() { return new WindowRefService(i0.ɵɵinject(i0.INJECTOR)); }, token: WindowRefService, providedIn: "root" });
WindowRefService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
WindowRefService.ctorParameters = () => [
    { type: Injector }
];

function dynamicDirectiveDef(type, inputs, outputs) {
    return { type, inputs, outputs };
}
class DynamicDirectivesDirective {
    constructor(iterableDiffers, ioFactoryService, windowRef, componentInjector) {
        this.iterableDiffers = iterableDiffers;
        this.ioFactoryService = ioFactoryService;
        this.windowRef = windowRef;
        this.componentInjector = componentInjector;
        this.ndcDynamicDirectivesCreated = new EventEmitter();
        this.dirRef = new Map();
        this.dirIo = new Map();
        this.dirsDiffer = this.iterableDiffers
            .find([])
            .create((_, def) => def.type);
    }
    get directives() {
        return (this.ndcDynamicDirectives || this.ngComponentOutletNdcDynamicDirectives);
    }
    get componentRef() {
        return this.componentInjector.componentRef;
    }
    get compInstance() {
        return this.componentRef && this.componentRef.instance;
    }
    get isCompChanged() {
        if (this.lastCompInstance !== this.compInstance) {
            this.lastCompInstance = this.compInstance;
            return true;
        }
        return false;
    }
    get hostInjector() {
        return this.componentRef.injector;
    }
    get hostVcr() {
        // NOTE: Accessing private APIs of Angular
        // tslint:disable-next-line: no-string-literal
        return this.componentRef['_viewRef']['_viewContainerRef'];
    }
    get reflect() {
        return this.windowRef.nativeWindow.Reflect;
    }
    ngDoCheck() {
        if (this.maybeDestroyDirectives()) {
            return;
        }
        const dirsChanges = this.dirsDiffer.diff(this.directives);
        if (!dirsChanges) {
            return this.updateDirectives();
        }
        this.processDirChanges(dirsChanges);
    }
    ngOnDestroy() {
        this.destroyAllDirectives();
    }
    maybeDestroyDirectives() {
        if (this.isCompChanged || !this.componentRef) {
            this.dirsDiffer.diff([]);
            this.destroyAllDirectives();
        }
        return !this.componentRef;
    }
    processDirChanges(changes) {
        changes.forEachRemovedItem(({ item }) => this.destroyDirective(item));
        const createdDirs = [];
        changes.forEachAddedItem(({ item }) => createdDirs.push(this.initDirective(item)));
        if (createdDirs.length) {
            this.ndcDynamicDirectivesCreated.emit(createdDirs.filter(Boolean));
        }
    }
    updateDirectives() {
        this.directives.forEach(dir => this.updateDirective(dir));
    }
    updateDirective(dirDef) {
        const io = this.dirIo.get(dirDef.type);
        io.update(dirDef.inputs, dirDef.outputs, false, false);
        io.maybeUpdate();
    }
    initDirective(dirDef) {
        if (this.dirRef.has(dirDef.type)) {
            return;
        }
        const instance = this.createDirective(dirDef.type);
        const dir = {
            instance,
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
    }
    destroyAllDirectives() {
        this.dirRef.forEach(dir => this.destroyDirRef(dir));
        this.dirRef.clear();
        this.dirIo.clear();
    }
    destroyDirective(dirDef) {
        this.destroyDirRef(this.dirRef.get(dirDef.type));
        this.dirRef.delete(dirDef.type);
        this.dirIo.delete(dirDef.type);
    }
    initDirIO(dir, inputs, outputs) {
        const io = this.ioFactoryService.create();
        io.init({ componentRef: this.dirToCompDef(dir) }, { trackOutputChanges: true });
        io.update(inputs, outputs, !!inputs, !!outputs);
        this.dirIo.set(dir.type, io);
    }
    dirToCompDef(dir) {
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
    }
    destroyDirRef(dir) {
        const io = this.dirIo.get(dir.type);
        io.ngOnDestroy();
        if ('ngOnDestroy' in dir.instance) {
            dir.instance.ngOnDestroy();
        }
    }
    createDirective(dirType) {
        const directiveInjector = Injector.create({
            providers: [
                {
                    provide: dirType,
                    useClass: dirType,
                    deps: this.resolveDirParamTypes(dirType),
                },
                { provide: ElementRef, useValue: this.componentRef.location },
            ],
            parent: this.hostInjector,
            name: `DynamicDirectiveInjector:${dirType.name}@${this.componentRef.componentType.name}`,
        });
        return directiveInjector.get(dirType);
    }
    resolveDirParamTypes(dirType) {
        var _a, _b;
        return (
        // First try Angular Compiler's metadata
        (_b = (_a = extractNgParamTypes(dirType)) !== null && _a !== void 0 ? _a : 
        // Then fallback to Typescript Reflect API
        getCtorParamTypes(dirType, this.reflect)) !== null && _b !== void 0 ? _b : 
        // Bailout
        []);
    }
    callInitHooks(obj) {
        this.callHook(obj, 'ngOnInit');
        this.callHook(obj, 'ngDoCheck');
        this.callHook(obj, 'ngAfterContentInit');
        this.callHook(obj, 'ngAfterContentChecked');
        this.callHook(obj, 'ngAfterViewInit');
        this.callHook(obj, 'ngAfterViewChecked');
    }
    callHook(obj, hook, args = []) {
        if (obj[hook]) {
            obj[hook](...args);
        }
    }
}
DynamicDirectivesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ndcDynamicDirectives],[ngComponentOutletNdcDynamicDirectives]',
                providers: [IoFactoryService],
            },] }
];
/** @nocollapse */
DynamicDirectivesDirective.ctorParameters = () => [
    { type: IterableDiffers },
    { type: IoFactoryService },
    { type: WindowRefService },
    { type: undefined, decorators: [{ type: Inject, args: [DynamicComponentInjectorToken,] }, { type: Optional }] }
];
DynamicDirectivesDirective.propDecorators = {
    ndcDynamicDirectives: [{ type: Input }],
    ngComponentOutletNdcDynamicDirectives: [{ type: Input }],
    ndcDynamicDirectivesCreated: [{ type: Output }]
};

class DynamicDirectivesModule {
}
DynamicDirectivesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
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

export { COMPONENT_INJECTOR, ComponentOutletInjectorDirective, ComponentOutletInjectorModule, DynamicAttributesDirective, DynamicAttributesModule, DynamicComponent, DynamicComponentInjectorToken, DynamicDirectivesDirective, DynamicDirectivesModule, DynamicIoDirective, DynamicIoModule, DynamicModule, EventArgumentToken, defaultEventArgumentFactory, dynamicDirectiveDef, DynamicIoModule as ɵa, DynamicComponentInjectorToken as ɵb };
//# sourceMappingURL=ng-dynamic-component.js.map
