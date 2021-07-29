import { Directive, Inject, Injector, Input, KeyValueDiffers, Optional, Renderer2, } from '@angular/core';
import { DynamicComponentInjectorToken, } from '../component-injector';
export class DynamicAttributesDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWR5bmFtaWMtY29tcG9uZW50L3NyYy9saWIvZHluYW1pYy1hdHRyaWJ1dGVzL2R5bmFtaWMtYXR0cmlidXRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFFTCxlQUFlLEVBQ2YsUUFBUSxFQUNSLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsNkJBQTZCLEdBQzlCLE1BQU0sdUJBQXVCLENBQUM7QUFlL0IsTUFBTSxPQUFPLDBCQUEwQjtJQWdDckMsWUFDVSxRQUFtQixFQUNuQixPQUF3QixFQUN4QixRQUFrQixFQUdsQixpQkFBNEM7UUFMNUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBR2xCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMkI7UUFoQzlDLGdCQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFrQixDQUFDO0lBaUNsRSxDQUFDO0lBN0JKLElBQVksV0FBVztRQUNyQixPQUFPLENBQ0wsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxxQ0FBcUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFZLGNBQWM7O1FBQ3hCLE9BQU8sTUFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSwwQ0FBRSxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFZLFNBQVM7O1FBQ25CLE9BQU8sTUFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSwwQ0FBRSxhQUFhLENBQUM7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QUhmLFFBQVE7NENBK0RMLE1BQU0sU0FBQyw2QkFBNkIsY0FDcEMsUUFBUTs7O21DQXBDVixLQUFLO29EQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIERvQ2hlY2ssXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBLZXlWYWx1ZUNoYW5nZXMsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIER5bmFtaWNDb21wb25lbnRJbmplY3RvcixcbiAgRHluYW1pY0NvbXBvbmVudEluamVjdG9yVG9rZW4sXG59IGZyb20gJy4uL2NvbXBvbmVudC1pbmplY3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlc01hcCB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEF0dHJpYnV0ZUFjdGlvbnMge1xuICBzZXQ6IEF0dHJpYnV0ZXNNYXA7XG4gIHJlbW92ZTogc3RyaW5nW107XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZGNEeW5hbWljQXR0cmlidXRlc10sW25nQ29tcG9uZW50T3V0bGV0TmRjRHluYW1pY0F0dHJpYnV0ZXNdJyxcbiAgZXhwb3J0QXM6ICduZGNEeW5hbWljQXR0cmlidXRlcycsXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNBdHRyaWJ1dGVzRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XG4gIEBJbnB1dCgpXG4gIG5kY0R5bmFtaWNBdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzTWFwO1xuICBASW5wdXQoKVxuICBuZ0NvbXBvbmVudE91dGxldE5kY0R5bmFtaWNBdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzTWFwO1xuXG4gIHByaXZhdGUgYXR0cnNEaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh7fSkuY3JlYXRlPHN0cmluZywgc3RyaW5nPigpO1xuICBwcml2YXRlIGxhc3RDb21wVHlwZTogVHlwZTxhbnk+O1xuICBwcml2YXRlIGxhc3RBdHRyQWN0aW9uczogQXR0cmlidXRlQWN0aW9ucztcblxuICBwcml2YXRlIGdldCBfYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5uZGNEeW5hbWljQXR0cmlidXRlcyB8fCB0aGlzLm5nQ29tcG9uZW50T3V0bGV0TmRjRHluYW1pY0F0dHJpYnV0ZXNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX25hdGl2ZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5qZWN0b3IuY29tcG9uZW50UmVmPy5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2NvbXBUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEluamVjdG9yLmNvbXBvbmVudFJlZj8uY29tcG9uZW50VHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9pc0NvbXBDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLmxhc3RDb21wVHlwZSAhPT0gdGhpcy5fY29tcFR5cGUpIHtcbiAgICAgIHRoaXMubGFzdENvbXBUeXBlID0gdGhpcy5fY29tcFR5cGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoRHluYW1pY0NvbXBvbmVudEluamVjdG9yVG9rZW4pXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcml2YXRlIGNvbXBvbmVudEluamVjdG9yPzogRHluYW1pY0NvbXBvbmVudEluamVjdG9yLFxuICApIHt9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ29tcENoYW5nZWQgPSB0aGlzLl9pc0NvbXBDaGFuZ2VkO1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmF0dHJzRGlmZmVyLmRpZmYodGhpcy5fYXR0cmlidXRlcyk7XG5cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy5sYXN0QXR0ckFjdGlvbnMgPSB0aGlzLl9jaGFuZ2VzVG9BdHRyQWN0aW9ucyhjaGFuZ2VzKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcyB8fCAoaXNDb21wQ2hhbmdlZCAmJiB0aGlzLmxhc3RBdHRyQWN0aW9ucykpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUF0dHJpYnV0ZXModGhpcy5sYXN0QXR0ckFjdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9uYXRpdmVFbGVtZW50LCBuYW1lLCB2YWx1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fbmF0aXZlRWxlbWVudCwgbmFtZSwgbmFtZXNwYWNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBdHRyaWJ1dGVzKGFjdGlvbnM6IEF0dHJpYnV0ZUFjdGlvbnMpIHtcbiAgICAvLyA/IEVhcmx5IGV4aXQgaWYgbm8gZHluYW1pYyBjb21wb25lbnRcbiAgICBpZiAoIXRoaXMuX2NvbXBUeXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucy5zZXQpLmZvckVhY2goa2V5ID0+XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShrZXksIGFjdGlvbnMuc2V0W2tleV0pLFxuICAgICk7XG5cbiAgICBhY3Rpb25zLnJlbW92ZS5mb3JFYWNoKGtleSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZShrZXkpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZXNUb0F0dHJBY3Rpb25zKFxuICAgIGNoYW5nZXM6IEtleVZhbHVlQ2hhbmdlczxzdHJpbmcsIHN0cmluZz4sXG4gICk6IEF0dHJpYnV0ZUFjdGlvbnMge1xuICAgIGNvbnN0IGF0dHJBY3Rpb25zOiBBdHRyaWJ1dGVBY3Rpb25zID0ge1xuICAgICAgc2V0OiB7fSxcbiAgICAgIHJlbW92ZTogW10sXG4gICAgfTtcblxuICAgIGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbShyID0+IChhdHRyQWN0aW9ucy5zZXRbci5rZXldID0gci5jdXJyZW50VmFsdWUpKTtcbiAgICBjaGFuZ2VzLmZvckVhY2hDaGFuZ2VkSXRlbShyID0+IChhdHRyQWN0aW9ucy5zZXRbci5rZXldID0gci5jdXJyZW50VmFsdWUpKTtcbiAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbShyID0+IGF0dHJBY3Rpb25zLnJlbW92ZS5wdXNoKHIua2V5KSk7XG5cbiAgICByZXR1cm4gYXR0ckFjdGlvbnM7XG4gIH1cbn1cbiJdfQ==