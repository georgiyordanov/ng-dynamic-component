import { NgComponentOutlet } from '@angular/common';
import { ComponentRef } from '@angular/core';
import { DynamicComponentInjector } from './token';
export declare class ComponentOutletInjectorDirective implements DynamicComponentInjector {
    private componentOutlet;
    get componentRef(): ComponentRef<any>;
    constructor(componentOutlet: NgComponentOutlet);
}
