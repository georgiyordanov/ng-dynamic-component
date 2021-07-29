import { DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { DynamicComponentInjector } from '../component-injector';
import { InputsType, IoService, OutputsType } from '../io';
export declare class DynamicIoDirective implements OnChanges, DoCheck {
    private ioService;
    private componentInjector?;
    ndcDynamicInputs: InputsType;
    ngComponentOutletNdcDynamicInputs: InputsType;
    ndcDynamicOutputs: OutputsType;
    ngComponentOutletNdcDynamicOutputs: OutputsType;
    private get inputs();
    private get outputs();
    constructor(ioService: IoService, componentInjector?: DynamicComponentInjector);
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    private inputsChanged;
    private outputsChanged;
}
