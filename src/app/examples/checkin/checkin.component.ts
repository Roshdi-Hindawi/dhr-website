import { Component, OnInit,ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from "@angular/animations";
// import { CheckingComponent } from '../../checking/checking.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CheckingService } from '../../services/checking.service';
// import Swal from 'sweetalert2/src/sweetalert2.js';
// import 'sweetalert2/src/sweetalert2.scss';
import { ResidentModalComponent } from '../../components/resident-modal/resident-modal.component';
import {DatePickerDirective} from 'ng2-date-picker'; 
import * as Rellax from 'rellax';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
  animations: [
      trigger("fade", [
          transition("void => *", [
              style({ opacity: 0 }),
              animate(2000, style({ opacity: 1 }))
          ])
      ])
  ]
})
export class CheckinComponent implements OnInit {


  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;
  focus8;


  lpd: boolean = false;
  dp: boolean = false;
  pc: boolean = false;
  all_in: boolean = false;

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;

  id_1: boolean = false;
  id_2: boolean = false;

  size_1: boolean = false;
  size_2: boolean = false;
  size_3: boolean = false;
  size_4: boolean = false;

  view_1: boolean = false;
  view_2: boolean = false;

  clientForm: FormGroup;

  public reqModal = {
      data: {}
  }

  date: Date = new Date();
  id_type_verif: boolean;
  size_verif: boolean;
  view_verif: boolean;
  view_arr: boolean;
  id_ty: boolean;

  constructor(
      private _CheckinService: CheckingService,
      private fb: FormBuilder,
      private modalService: NgbModal,
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

  config = {
      min: new Date()
  }
  ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('signup-page');
      // var navbar = document.getElementsByTagName('nav')[0];
      // navbar.classList.remove('navbar-transparent');
      // navbar.classList.add('navbar-absolute');
      // navbar.classList.remove('fixed-top');
      // var navbar = document.getElementsByTagName('nav')[0];

  }
  
  ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('signup-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      // var navbar = document.getElementsByTagName('nav')[0];
      // navbar.classList.remove('navbar-absolute');
      // navbar.classList.add('fixed-top');
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

  confirmReserve(){

  }

  step_1() {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
  }
  step_2() {
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
  }
  step_3() {
      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
      this.step4 = false;
  }
  step_4() {
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = true;
  }

  done() {
    this.reqModal.data = "aaaa";
    const modalRef = this.modalService.open(ResidentModalComponent, { windowClass: "residentModalClass" });
    modalRef.componentInstance.reqModal = this.reqModal;
    modalRef.result.then((result) => {
      if (result === true) {
        this.ngOnInit();
      }
    });
      // Swal.fire({
      //     type: 'info',
      //     title: 'Confirmation',
      //     text: 'Confirmez vous votre reservation ?',
      //     confirmButtonClass: "btn btn-sm btn-danger",
      //     cancelButtonClass: "btn btn-sm btn-secondary",
      //     showCancelButton: true,
      //     confirmButtonText: 'Oui',
      //     cancelButtonText: 'Non'
      // }).then((result) => {
      //     if (result.value) {
      //         this._CheckinService.new(this.clientForm.value).subscribe((res) => {
      //             console.log(res);
      //             this.clientForm.reset();
      //             this.id_1 = false;
      //             this.id_2 = false;
      //             this.size_1 = false;
      //             this.size_2 = false;
      //             this.size_3 = false;
      //             this.size_4 = false;
      //             this.view_1 = false;
      //             this.view_2 = false;
      //             this.step_1();
      //         });
      //         Swal.fire(
      //             'Reservation Terminé'
      //         );
      //     } else if (result.dismiss === Swal.DismissReason.cancel) {
      //         Swal.fire(
      //             'Annulé'
      //         )
      //     }
      // });
  }

  handleName(ev) {
      this.clientForm.controls['full_name'].setValue(ev.target.value);
  }

  handleBDate(ev) {
      this.clientForm.controls['b_date'].setValue(ev.target.value);
  }

  handleEmail(ev) {
      this.clientForm.controls['email'].setValue(ev.target.value);
  }

  handleTel(ev) {
      this.clientForm.controls['tel'].setValue(ev.target.value);
  }
  
  setNationality(ev) {
      this.clientForm.controls['nationality'].setValue(ev.target.value);
      console.log(ev.target.value) 
  }

  handleIdN(ev) {
      this.clientForm.controls['id_n'].setValue(ev.target.value);
  }

  handleDate_a(ev) {
      console.log(ev)
      this.clientForm.controls['date_a'].setValue(ev.target.value);
    //   console.log(this.clientForm.value);
  }

  handleDate_b(ev) {
      this.clientForm.controls['date_d'].setValue(ev.target.value);
    //   console.log(this.clientForm.value);
  }

  handleId(ev) {
      switch (ev.target.defaultValue) {
          case 'passport':
              this.id_2 = true;
              this.id_1 = false;
              this.clientForm.controls['id_type'].setValue('Passport');
              this.id_type_verif = true;
              break;
          default:
              this.id_1 = true;
              this.id_2 = false;
              this.clientForm.controls['id_type'].setValue('CIN');
              this.id_type_verif = true;
              break;
      }
  }

  handleSize(ev) {
      switch (ev.target.defaultValue) {
          case 'option2':
              this.size_1 = false;
              this.size_2 = true;
              this.size_3 = false;
              this.size_4 = false;
              this.clientForm.controls['size'].setValue('Chambre double 1 lit double');
              this.size_verif = true;
              break;
          case 'option3':
              this.size_1 = false;
              this.size_2 = false;
              this.size_3 = true;
              this.size_4 = false;
              this.clientForm.controls['size'].setValue('Chambre triple 1 lit simple et 1 lit double');
              this.size_verif = true;
              break;
          case 'option4':
              this.size_1 = false;
              this.size_2 = false;
              this.size_3 = false;
              this.size_4 = true;
              this.clientForm.controls['size'].setValue('Chambre quadruple 2 lits simples et 1 lit double');
              this.size_verif = true;
              break;
          default:
              this.size_1 = true;
              this.size_2 = false;
              this.size_3 = false;
              this.size_4 = false;
              this.clientForm.controls['size'].setValue('Chambre simple 1 lit double');
              this.size_verif = true;
              break;
      }
  }

  handleView(ev) {
      switch (ev.target.defaultValue) {
          case 'no':
              this.view_1 = false;
              this.view_2 = true;
              this.clientForm.controls['view'].setValue('Sans vu sur la mer');
              this.view_verif = true;
              break;
          default:
              this.view_1 = true;
              this.view_2 = false;
              this.clientForm.controls['view'].setValue('Avec vu sur la mer');
              this.view_verif = true;
              break;
      }
  }

  handleArrangement(ev) {
      switch (ev.target.defaultValue) {
          case 'lpd':
              this.lpd = true;
              this.dp = false;
              this.pc = false;
              this.all_in = false;
              this.clientForm.controls['arrangement'].setValue('L.P.D');
              this.view_arr = true;
              break;
          case 'dp':
              this.lpd = false;
              this.dp = true;
              this.pc = false;
              this.all_in = false;
              this.clientForm.controls['arrangement'].setValue('D.P');
              this.view_arr = true;
              break;
          case 'pc':
              this.lpd = false;
              this.dp = false;
              this.pc = true;
              this.all_in = false;
              this.clientForm.controls['arrangement'].setValue('P.C');
              this.view_arr = true;
              break;
          default:
              this.lpd = false;
              this.dp = false;
              this.pc = false;
              this.all_in = true;
              this.clientForm.controls['arrangement'].setValue('ALL In');
              this.view_arr = true;
              break;
      }
  }

  validateSetp1() {
      if (this.clientForm.controls['full_name'].valid &&
          this.clientForm.controls['b_date'].valid &&
          this.clientForm.controls['email'].valid &&
          this.clientForm.controls['nationality'].valid) {
          return false;
      } else {
          return true;
      }
  }

  validateSetp2() {
      if (this.clientForm.controls['id_type'].valid &&
          this.clientForm.controls['id_n'].valid &&
          this.clientForm.controls['date_a'].valid &&
          this.clientForm.controls['date_d'].valid) {
          return false;
      } else {
          return true;
      }
  }

  validateForm() {
      if (this.clientForm.controls['size'].valid &&
          this.clientForm.controls['view'].valid &&
          this.clientForm.controls['size'].valid &&
          this.clientForm.controls['view'].valid &&
          this.clientForm.controls['arrangement'].valid &&
          this.clientForm.valid) {
          return false;
      } else {
          return true;
      }
  }
}
