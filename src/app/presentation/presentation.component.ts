import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition } from "@angular/animations";
import * as Rellax from 'rellax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { LandingService } from '../services/landing.service';


@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss'],
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `],
    animations: [
        trigger("fade", [
            transition("void => *", [
                style({ opacity: 0 }),
                animate(2000, style({ opacity: 1 }))
            ])
        ])
    ]
})

export class PresentationComponent implements OnInit, OnDestroy, AfterViewInit { 
    
    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    focus5;
    focus6;
    focus7;
    focus8;

    imageObject = [];
    // [
    //     {
    //         id: 1,
    //         image: 'assets/img/selected/home/1.jpg',
    //         thumbImage: 'assets/img/selected/home/1.jpg',
    //     },
    //     {
    //         id: 2,
    //         image: 'assets/img/selected/home/2.jpg',
    //         thumbImage: 'assets/img/selected/home/2.jpg',
    //     },
    //     {
    //         id: 3,
    //         image: 'assets/img/selected/home/3.jpg',
    //         thumbImage: 'assets/img/selected/home/3.jpg',
    //     },
    //     {
    //         id: 4,
    //         image: 'assets/img/selected/home/4.jpg',
    //         thumbImage: 'assets/img/selected/home/4.jpg',
    //     },
    //     {
    //         id: 5,
    //         image: 'assets/img/selected/home/5.jpg',
    //         thumbImage: 'assets/img/selected/home/5.jpg',
    //     },
    // ];
    
    zoom: number = 14.9;
    lat: number = 35.7719374;
    lng: number = 10.837336;
    styles: any[] = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    
    model = {
        left: true,
        middle: false,
        right: false
    };
    date : Date = new Date();
    clientForm: FormGroup;
    aboutText;
    
     constructor(
         private _LandingService: LandingService,
        private fb: FormBuilder,
    ) {
        this.clientForm = this.fb.group({
            full_name: [null, Validators.compose([Validators.required])],
            b_date: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            tel: [null],
            nationality: [null, Validators.compose([Validators.required])],
            id_type: [null, Validators.compose([Validators.required])],
            id_n: [null, Validators.compose([Validators.required])],
            date_a: [null, Validators.compose([Validators.required])],
            date_d: [null, Validators.compose([Validators.required])],
            size: [null, Validators.compose([Validators.required])],
            view: [null, Validators.compose([Validators.required])],
            arrangement: [null, Validators.compose([Validators.required])],
            created_at: [moment(new Date()).format('YYYY-MM-DD HH:MM')],
            status: [0]
        });
    }

    ngOnInit() {
        let data;
        this._LandingService.slider().subscribe( (res) => {
            data = res;
            // this.imageObject = [
            //     { index: 0, id: parseFloat(data[0].id), image: 'http://localhost/delphin-api/public'+data[0].img_1, thumbImage: 'http://localhost/delphin-api/public'+data[0].img_1 },
            //     { index: 1, id: parseFloat(data[1].id), image: 'http://localhost/delphin-api/public'+data[1].img_1, thumbImage: 'http://localhost/delphin-api/public'+data[1].img_1 },
            //     { index: 2, id: parseFloat(data[2].id), image: 'http://localhost/delphin-api/public'+data[2].img_1, thumbImage: 'http://localhost/delphin-api/public'+data[2].img_1 },
            //     { index: 3, id: parseFloat(data[3].id), image: 'http://localhost/delphin-api/public'+data[3].img_1, thumbImage: 'http://localhost/delphin-api/public'+data[3].img_1 }
            // ]
            for(let i=0; i<data.length; i++){
                console.log("aaaax",i)
                this.imageObject.push({
                    index: i,
                    image: 'http://localhost/delphin-api/public'+data[i].img_1,
                    thumbImage: 'http://localhost/delphin-api/public'+data[i].img_1,
                });
            }
            console.log("aaaax",this.imageObject)
        });
        this._LandingService.about().subscribe((res)=>{
          data = res;
          this.aboutText = data[0].about;
        });
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngAfterViewInit(){
      setTimeout(function(){
        if (window.innerWidth >= 991) {
            var rellax = new Rellax('.rellax', {
                center: true
            });
            var rellax1 = new Rellax('.rellax1', {
                center: true
            });
            var rellax5 = new Rellax('.rellax5', {
                center: true
            });
            var rellax6 = new Rellax('.rellax6', {
                center: true
            });
            var rellax7 = new Rellax('.rellax7', {
                center: true
            });
            var rellax8 = new Rellax('.rellax8', {
                center: true
            });
            var rellax9 = new Rellax('.rellax9', {
                center: true
            });
            var rellax10 = new Rellax('.rellax10', {
                center: true
            });
            var rellax11 = new Rellax('.rellax11', {
                center: true
            });
            var rellax12 = new Rellax('.rellax12', {
                center: true
            });
            var rellax13 = new Rellax('.rellax13', {
                center: true
            });
            var rellax14 = new Rellax('.rellax14', {
                center: true
            });

            var rellaxHeader = new Rellax('.rellax-header');
            var rellaxText = new Rellax('.rellax-text');
        }
      },200);

    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    calculated: boolean = false;
    
    setCalculated(val){
        this.calculated = val;
    }

    reserve_step1: boolean = true;
    reserve_step2: boolean = false;

    reserveStep2(val){
        this.reserve_step1 = !this.reserve_step1;
        this.reserve_step2 = val;
    }
}
