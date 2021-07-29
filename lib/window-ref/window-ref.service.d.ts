import { InjectionToken, Injector } from '@angular/core';
export declare const WindowRefToken: InjectionToken<Window>;
export declare class WindowRefService {
    private injector;
    nativeWindow: Window;
    constructor(injector: Injector);
}
