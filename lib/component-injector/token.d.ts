import { ComponentRef, InjectionToken } from '@angular/core';
export interface DynamicComponentInjector {
    componentRef: ComponentRef<any> | null;
}
/**
 * @deprecated Since v6.0.0 - Use {@link DynamicComponentInjector} instead
 */
export declare type ComponentInjector = DynamicComponentInjector;
export declare const DynamicComponentInjectorToken: InjectionToken<DynamicComponentInjector>;
/**
 * @deprecated Since v6.0.0 - Use {@link DynamicComponentInjectorToken} instead
 * and provide component class via `useExisting` instead of `useValue`
 */
export declare const COMPONENT_INJECTOR: InjectionToken<DynamicComponentInjector>;
