import { CommonModule } from '@angular/common';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponenet } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponenet,
        PlaceHolderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponenet,
        PlaceHolderDirective,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [
      AlertComponent
    ]
})
export class SharedModule { }