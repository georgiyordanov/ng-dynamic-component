import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injector, OnChanges, SimpleChanges, StaticProvider, Type, ViewContainerRef } from '@angular/core';
import { DynamicComponentInjector } from './component-injector';
export declare class DynamicComponent implements OnChanges, DynamicComponentInjector {
    private vcr;
    private cfr;
    ndcDynamicComponent: Type<any>;
    ndcDynamicInjector: Injector;
    ndcDynamicProviders: StaticProvider[];
    ndcDynamicContent: any[][];
    ndcDynamicCreated: EventEmitter<ComponentRef<any>>;
    componentRef: ComponentRef<any> | null;
    constructor(vcr: ViewContainerRef, cfr: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    createDynamicComponent(): void;
    private _resolveInjector;
}
