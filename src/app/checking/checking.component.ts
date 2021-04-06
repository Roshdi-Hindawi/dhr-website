import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent implements OnInit {

  @Input() public reqModal;

  constructor(
    public activeModal: NgbActiveModal,
    ) { }

  ngOnInit(): void {
    console.log(this.reqModal)
  }
  
  confirm(){
    this.activeModal.close(this.reqModal);
  }

  close(){
    this.activeModal.close();
  }

}
