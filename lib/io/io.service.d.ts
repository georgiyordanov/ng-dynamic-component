import { ChangeDetectorRef, ComponentFactoryResolver, KeyValueChanges, KeyValueDiffers, OnDestroy } from '@angular/core';
import { DynamicComponentInjector } from '../component-injector';
import { InputsType, OutputsType } from './types';
export interface IOMapInfo {
    propName: string;
    templateName: string;
}
export declare type IOMappingList = IOMapInfo[];
export declare type KeyValueChangesAny = KeyValueChanges<any, any>;
export interface IoInitOptions {
    trackOutputChanges?: boolean;
}
export declare class IoService implements OnDestroy {
    private differs;
    private cfr;
    private eventArgument;
    private cdr;
    private checkInit;
    private lastComponentInst;
    private lastInputChanges;
    private inputsDiffer;
    private compFactory;
    private outputsShouldDisconnect$;
    private inputs;
    private outputs;
    private compInjector;
    private outputsChanged;
    private get compRef();
    private get componentInst();
    private get componentInstChanged();
    private get compCdr();
    constructor(differs: KeyValueDiffers, cfr: ComponentFactoryResolver, eventArgument: string, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    init(componentInjector: DynamicComponentInjector, options?: IoInitOptions): void;
    update(inputs: InputsType, outputs: OutputsType, inputsChanged: boolean, outputsChanged: boolean): void;
    maybeUpdate(): void;
    private updateIO;
    private updateInputs;
    private bindOutputs;
    private notifyOnInputChanges;
    private _disconnectOutputs;
    private _getInputsChanges;
    private _updateInputChanges;
    private _collectFirstChanges;
    private _collectChangesFromDiffer;
    private _resolveCompFactory;
    private _updateCompFactory;
    private _resolveInputs;
    private _resolveOutputs;
    private _processOutputs;
    private _processOutputArgs;
    private _resolveChanges;
    private _remapIO;
    private _findPropByTplInMapping;
    private failInit;
}
