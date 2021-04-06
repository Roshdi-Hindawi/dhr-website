import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { ImageUploadModule } from '../shared/image-upload/image-upload.module';

import { ExamplesComponent } from './examples.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { CheckingComponent } from '../checking/checking.component';

import {DpDatePickerModule} from 'ng2-date-picker';
import { ChambersComponent } from './chambers/chambers.component';
import { DiversComponent } from './divers/divers.component';
import { SpaComponent } from './spa/spa.component';
import { CheckinComponent } from './checkin/checkin.component';
import { SallesComponent } from './salles/salles.component';
import { GolfComponent } from './golf/golf.component';



@NgModule({
    imports: [
        DpDatePickerModule,
        CommonModule,
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAvyAHD4-dlwBAT9K8CFWtfPCZnGjZmQlk'
        }),
        ImageUploadModule
    ],
    declarations: [
        ExamplesComponent,
        AboutusComponent,
        BlogpostComponent,
        BlogpostsComponent,
        ContactusComponent,
        EcommerceComponent,
        LandingComponent,
        LoginComponent,
        ProductpageComponent,
        ProfileComponent,
        RegisterComponent,
        PricingComponent,
        CheckingComponent,
        ChambersComponent,
        DiversComponent,
        SpaComponent,
        CheckinComponent,
        SallesComponent,
        GolfComponent
    ]
})
export class ExamplesModule { }
