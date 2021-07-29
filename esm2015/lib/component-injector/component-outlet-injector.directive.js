import { NgComponentOutlet } from '@angular/common';
import { Directive, Host } from '@angular/core';
import { DynamicComponentInjectorToken, } from './token';
export class ComponentOutletInjectorDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW91dGxldC1pbmplY3Rvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1keW5hbWljLWNvbXBvbmVudC9zcmMvbGliL2NvbXBvbmVudC1pbmplY3Rvci9jb21wb25lbnQtb3V0bGV0LWluamVjdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWdCLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUVMLDZCQUE2QixHQUM5QixNQUFNLFNBQVMsQ0FBQztBQWFqQixNQUFNLE9BQU8sZ0NBQWdDO0lBTzNDLFlBQTRCLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtJQUFHLENBQUM7SUFMbEUsSUFBSSxZQUFZO1FBQ2QsMENBQTBDO1FBQzFDLE9BQVEsSUFBSSxDQUFDLGVBQXVCLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsK0NBQStDO2dCQUMvQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLDZCQUE2Qjt3QkFDdEMsV0FBVyxFQUFFLGdDQUFnQztxQkFDOUM7aUJBQ0Y7YUFDRjs7OztZQWxCUSxpQkFBaUIsdUJBMEJYLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NvbXBvbmVudE91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBEeW5hbWljQ29tcG9uZW50SW5qZWN0b3IsXG4gIER5bmFtaWNDb21wb25lbnRJbmplY3RvclRva2VuLFxufSBmcm9tICcuL3Rva2VuJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25nQ29tcG9uZW50T3V0bGV0XScsXG4gIGV4cG9ydEFzOiAnbmRjQ29tcG9uZW50T3V0bGV0SW5qZWN0b3InLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBEeW5hbWljQ29tcG9uZW50SW5qZWN0b3JUb2tlbixcbiAgICAgIHVzZUV4aXN0aW5nOiBDb21wb25lbnRPdXRsZXRJbmplY3RvckRpcmVjdGl2ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRPdXRsZXRJbmplY3RvckRpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIER5bmFtaWNDb21wb25lbnRJbmplY3RvciB7XG4gIGdldCBjb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIC8vIE5PVEU6IEFjY2Vzc2luZyBwcml2YXRlIEFQSXMgb2YgQW5ndWxhclxuICAgIHJldHVybiAodGhpcy5jb21wb25lbnRPdXRsZXQgYXMgYW55KS5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGNvbXBvbmVudE91dGxldDogTmdDb21wb25lbnRPdXRsZXQpIHt9XG59XG4iXX0=