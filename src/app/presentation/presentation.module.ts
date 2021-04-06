import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { PresentationComponent } from './presentation.component';
import {DpDatePickerModule} from 'ng2-date-picker';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        NgImageSliderModule,
        // IvyCarouselModule,
        ReactiveFormsModule,
        DpDatePickerModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAvyAHD4-dlwBAT9K8CFWtfPCZnGjZmQlk'
        }),
    ],
    declarations: [ PresentationComponent ],
    exports:[ PresentationComponent ],
    providers: []
})
export class PresentationModule { }
