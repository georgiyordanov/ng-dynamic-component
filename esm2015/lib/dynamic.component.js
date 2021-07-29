import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, Output, Type, ViewContainerRef, } from '@angular/core';
import { DynamicComponentInjectorToken, } from './component-injector';
export class DynamicComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1keW5hbWljLWNvbXBvbmVudC9zcmMvbGliL2R5bmFtaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFlBQVksRUFDWixRQUFRLEVBQ1IsS0FBSyxFQUVMLE1BQU0sRUFHTixJQUFJLEVBQ0osZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCw2QkFBNkIsR0FDOUIsTUFBTSxzQkFBc0IsQ0FBQztBQVM5QixNQUFNLE9BQU8sZ0JBQWdCO0lBZTNCLFlBQ1UsR0FBcUIsRUFDckIsR0FBNkI7UUFEN0IsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFOdkMsc0JBQWlCLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7SUFPckUsQ0FBQztJQUVKLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUMxRCxDQUFDLEVBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztZQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFFNUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsbUJBQW1CO2dCQUNuQyxNQUFNLEVBQUUsUUFBUTthQUNqQixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7aUJBQzFFO2FBQ0Y7Ozs7WUFkQyxnQkFBZ0I7WUFWaEIsd0JBQXdCOzs7a0NBMEJ2QixLQUFLO2lDQUVMLEtBQUs7a0NBRUwsS0FBSztnQ0FFTCxLQUFLO2dDQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFN0YXRpY1Byb3ZpZGVyLFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgRHluYW1pY0NvbXBvbmVudEluamVjdG9yLFxuICBEeW5hbWljQ29tcG9uZW50SW5qZWN0b3JUb2tlbixcbn0gZnJvbSAnLi9jb21wb25lbnQtaW5qZWN0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZGMtZHluYW1pYycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBEeW5hbWljQ29tcG9uZW50SW5qZWN0b3JUb2tlbiwgdXNlRXhpc3Rpbmc6IER5bmFtaWNDb21wb25lbnQgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgRHluYW1pY0NvbXBvbmVudEluamVjdG9yIHtcbiAgQElucHV0KClcbiAgbmRjRHluYW1pY0NvbXBvbmVudDogVHlwZTxhbnk+O1xuICBASW5wdXQoKVxuICBuZGNEeW5hbWljSW5qZWN0b3I6IEluamVjdG9yO1xuICBASW5wdXQoKVxuICBuZGNEeW5hbWljUHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdO1xuICBASW5wdXQoKVxuICBuZGNEeW5hbWljQ29udGVudDogYW55W11bXTtcblxuICBAT3V0cHV0KClcbiAgbmRjRHluYW1pY0NyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxDb21wb25lbnRSZWY8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5uZGNEeW5hbWljQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNDb21wb25lbnQoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVEeW5hbWljQ29tcG9uZW50KCkge1xuICAgIHRoaXMudmNyLmNsZWFyKCk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMubmRjRHluYW1pY0NvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMubmRjRHluYW1pY0NvbXBvbmVudCksXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMuX3Jlc29sdmVJbmplY3RvcigpLFxuICAgICAgICB0aGlzLm5kY0R5bmFtaWNDb250ZW50LFxuICAgICAgKTtcbiAgICAgIHRoaXMubmRjRHluYW1pY0NyZWF0ZWQuZW1pdCh0aGlzLmNvbXBvbmVudFJlZik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzb2x2ZUluamVjdG9yKCk6IEluamVjdG9yIHtcbiAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLm5kY0R5bmFtaWNJbmplY3RvciB8fCB0aGlzLnZjci5pbmplY3RvcjtcblxuICAgIGlmICh0aGlzLm5kY0R5bmFtaWNQcm92aWRlcnMpIHtcbiAgICAgIGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLm5kY0R5bmFtaWNQcm92aWRlcnMsXG4gICAgICAgIHBhcmVudDogaW5qZWN0b3IsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5qZWN0b3I7XG4gIH1cbn1cbiJdfQ==