import { DoCheck, Injector, KeyValueDiffers, Renderer2 } from '@angular/core';
import { DynamicComponentInjector } from '../component-injector';
export interface AttributesMap {
    [key: string]: string;
}
export declare class DynamicAttributesDirective implements DoCheck {
    private renderer;
    private differs;
    private injector;
    private componentInjector?;
    ndcDynamicAttributes: AttributesMap;
    ngComponentOutletNdcDynamicAttributes: AttributesMap;
    private attrsDiffer;
    private lastCompType;
    private lastAttrActions;
    private get _attributes();
    private get _nativeElement();
    private get _compType();
    private get _isCompChanged();
    constructor(renderer: Renderer2, differs: KeyValueDiffers, injector: Injector, componentInjector?: DynamicComponentInjector);
    ngDoCheck(): void;
    setAttribute(name: string, value: string, namespace?: string): void;
    removeAttribute(name: string, namespace?: string): void;
    private _updateAttributes;
    private _changesToAttrActions;
}
