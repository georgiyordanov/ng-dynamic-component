import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicIoModule } from './dynamic-io';
import { DynamicComponent } from './dynamic.component';
export class DynamicModule {
}
DynamicModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DynamicIoModule],
                exports: [DynamicComponent, DynamicIoModule],
                declarations: [DynamicComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1keW5hbWljLWNvbXBvbmVudC9zcmMvbGliL2R5bmFtaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPdkQsTUFBTSxPQUFPLGFBQWE7OztZQUx6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO2dCQUM1QyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEeW5hbWljSW9Nb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtaW8nO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEeW5hbWljSW9Nb2R1bGVdLFxuICBleHBvcnRzOiBbRHluYW1pY0NvbXBvbmVudCwgRHluYW1pY0lvTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRHluYW1pY0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNNb2R1bGUge31cbiJdfQ==