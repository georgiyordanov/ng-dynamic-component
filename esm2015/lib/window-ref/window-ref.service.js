import { Injectable, InjectionToken, Injector } from '@angular/core';
import { browserWindowFactory } from './window-ref-browser';
import * as i0 from "@angular/core";
export const WindowRefToken = new InjectionToken('WindowRef', {
    providedIn: 'root',
    factory: browserWindowFactory,
});
export class WindowRefService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZHluYW1pYy1jb21wb25lbnQvc3JjL2xpYi93aW5kb3ctcmVmL3dpbmRvdy1yZWYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTVELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBUyxXQUFXLEVBQUU7SUFDcEUsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtDQUM5QixDQUFDLENBQUM7QUFHSCxNQUFNLE9BQU8sZ0JBQWdCO0lBRzNCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGdEMsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFZCxDQUFDOzs7O1lBSjNDLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFURyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGJyb3dzZXJXaW5kb3dGYWN0b3J5IH0gZnJvbSAnLi93aW5kb3ctcmVmLWJyb3dzZXInO1xuXG5leHBvcnQgY29uc3QgV2luZG93UmVmVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48V2luZG93PignV2luZG93UmVmJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IGJyb3dzZXJXaW5kb3dGYWN0b3J5LFxufSk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgV2luZG93UmVmU2VydmljZSB7XG4gIG5hdGl2ZVdpbmRvdyA9IHRoaXMuaW5qZWN0b3IuZ2V0KFdpbmRvd1JlZlRva2VuLCBudWxsKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cbn1cbiJdfQ==