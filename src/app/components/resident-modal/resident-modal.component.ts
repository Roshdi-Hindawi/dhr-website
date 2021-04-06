import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckingService } from '../../services/checking.service';

@Component({
  selector: 'app-resident-modal',
  templateUrl: './resident-modal.component.html',
  styleUrls: ['./resident-modal.component.css']
})
export class ResidentModalComponent implements OnInit {

  @Input() public reqModal;
  data;
  
  constructor(
    private _CheckinService: CheckingService,
    private _router: Router,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.data = this.reqModal.data;
    console.log(this.data)
  }

//   cancel(id){
//     let payload = {
//       id: id,
//       status: 2
//     }
//     this._CheckinService.update(payload).subscribe((res)=>{
//       this.activeModal.close(res);
//     });
//   }

//   updateStatus(id,status){
//     let payload = {
//       id: id,
//       status: status === "0" ? "1" : "0"
//     }
//     this._CheckinService.update(payload).subscribe((res)=>{
//       this.activeModal.close(res);
//     });
//   }
}
