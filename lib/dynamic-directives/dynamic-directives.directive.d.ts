import { ChangeDetectorRef, DoCheck, ElementRef, EventEmitter, Injector, IterableDiffers, OnDestroy, Type, ViewRef } from '@angular/core';
import { DynamicComponentInjector } from '../component-injector';
import { InputsType, IoFactoryService, OutputsType } from '../io';
import { WindowRefService } from '../window-ref';
export interface DynamicDirectiveDef<T> {
    type: Type<T>;
    inputs?: InputsType;
    outputs?: OutputsType;
}
export declare function dynamicDirectiveDef<T>(type: Type<T>, inputs?: InputsType, outputs?: OutputsType): DynamicDirectiveDef<T>;
export interface DirectiveRef<T> {
    instance: T;
    type: Type<T>;
    injector: Injector;
    hostComponent: Type<any>;
    hostView: ViewRef;
    location: ElementRef;
    changeDetectorRef: ChangeDetectorRef;
    onDestroy: (callback: Function) => void;
}
export declare class DynamicDirectivesDirective implements OnDestroy, DoCheck {
    private iterableDiffers;
    private ioFactoryService;
    private windowRef;
    private componentInjector?;
    ndcDynamicDirectives: DynamicDirectiveDef<any>[];
    ngComponentOutletNdcDynamicDirectives: DynamicDirectiveDef<any>[];
    ndcDynamicDirectivesCreated: EventEmitter<DirectiveRef<any>[]>;
    private lastCompInstance;
    private get directives();
    private get componentRef();
    private get compInstance();
    private get isCompChanged();
    private get hostInjector();
    private get hostVcr();
    private get reflect();
    private dirRef;
    private dirIo;
    private dirsDiffer;
    constructor(iterableDiffers: IterableDiffers, ioFactoryService: IoFactoryService, windowRef: WindowRefService, componentInjector?: DynamicComponentInjector);
    ngDoCheck(): void;
    ngOnDestroy(): void;
    private maybeDestroyDirectives;
    private processDirChanges;
    private updateDirectives;
    private updateDirective;
    private initDirective;
    private destroyAllDirectives;
    private destroyDirective;
    private initDirIO;
    private dirToCompDef;
    private destroyDirRef;
    private createDirective;
    private resolveDirParamTypes;
    private callInitHooks;
    private callHook;
}
