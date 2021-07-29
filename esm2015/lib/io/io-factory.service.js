import { ChangeDetectorRef, ComponentFactoryResolver, Inject, Injectable, KeyValueDiffers, } from '@angular/core';
import { EventArgumentToken } from './event-argument';
import { IoService } from './io.service';
export class IoFactoryService {
    constructor(differs, cfr, eventArgument, cdr) {
        this.differs = differs;
        this.cfr = cfr;
        this.eventArgument = eventArgument;
        this.cdr = cdr;
    }
    create() {
        return new IoService(this.differs, this.cfr, this.eventArgument, this.cdr);
    }
}
IoFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IoFactoryService.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: ComponentFactoryResolver },
    { type: String, decorators: [{ type: Inject, args: [EventArgumentToken,] }] },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW8tZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZHluYW1pYy1jb21wb25lbnQvc3JjL2xpYi9pby9pby1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixlQUFlLEdBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekMsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUNVLE9BQXdCLEVBQ3hCLEdBQTZCLEVBRTdCLGFBQXFCLEVBQ3JCLEdBQXNCO1FBSnRCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBRTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQzdCLENBQUM7SUFFSixNQUFNO1FBQ0osT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBWkYsVUFBVTs7OztZQU5ULGVBQWU7WUFIZix3QkFBd0I7eUNBY3JCLE1BQU0sU0FBQyxrQkFBa0I7WUFmNUIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBLZXlWYWx1ZURpZmZlcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEFyZ3VtZW50VG9rZW4gfSBmcm9tICcuL2V2ZW50LWFyZ3VtZW50JztcbmltcG9ydCB7IElvU2VydmljZSB9IGZyb20gJy4vaW8uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJb0ZhY3RvcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBASW5qZWN0KEV2ZW50QXJndW1lbnRUb2tlbilcbiAgICBwcml2YXRlIGV2ZW50QXJndW1lbnQ6IHN0cmluZyxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBJb1NlcnZpY2UodGhpcy5kaWZmZXJzLCB0aGlzLmNmciwgdGhpcy5ldmVudEFyZ3VtZW50LCB0aGlzLmNkcik7XG4gIH1cbn1cbiJdfQ==