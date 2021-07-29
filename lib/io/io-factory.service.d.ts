import { ChangeDetectorRef, ComponentFactoryResolver, KeyValueDiffers } from '@angular/core';
import { IoService } from './io.service';
export declare class IoFactoryService {
    private differs;
    private cfr;
    private eventArgument;
    private cdr;
    constructor(differs: KeyValueDiffers, cfr: ComponentFactoryResolver, eventArgument: string, cdr: ChangeDetectorRef);
    create(): IoService;
}
