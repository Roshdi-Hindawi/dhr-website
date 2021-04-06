import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { PricingComponent } from './examples/pricing/pricing.component';
import { ChambersComponent } from './examples/chambers/chambers.component';
import { DiversComponent } from './examples/divers/divers.component';
import { SpaComponent } from './examples/spa/spa.component';
import { CheckinComponent } from './examples/checkin/checkin.component';
import { SallesComponent } from './examples/salles/salles.component';
import { GolfComponent } from './examples/golf/golf.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes =[
    // { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: '',         component: PresentationComponent },
    { path: 'components',           component: ComponentsComponent },
    { path: 'sections',             component: SectionsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/aboutus',     component: AboutusComponent },
    { path: 'examples/blogpost',    component: BlogpostComponent },
    { path: 'gallerie',   component: BlogpostsComponent },
    { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'examples/landing',     component: LandingComponent },
    // { path: 'auth/login', canActivate: [AuthGuard], component: LoginComponent, },
    { path: 'examples/pricing',     component: PricingComponent },
    { path: 'hébergement',   component: EcommerceComponent },
    { path: 'chambres/simple', component: ProductpageComponent },
    { path: 'chambres/double', component: ProductpageComponent },
    { path: 'chambres/triple', component: ProductpageComponent },
    { path: 'chambres/quadruple', component: ProductpageComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'reservation',    component: RegisterComponent },
    { path: 'images-chambres',    component: ChambersComponent },
    { path: 'images-divers',    component: DiversComponent },
    { path: 'images-spa',    component: SpaComponent },
    { path: 'images-salles',    component: SallesComponent },
    { path: 'check-in',    component: CheckinComponent },
    { path: 'golf',    component: GolfComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
          useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
