import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-golf',
  templateUrl: './golf.component.html',
  styleUrls: ['./golf.component.css']
})
export class GolfComponent implements OnInit {

  constructor() { }

  images = [
    { id: 1, image: "../../../assets/img/golf/1.jpg"},
    { id: 2, image: "../../../assets/img/golf/2.jpg"},
    { id: 3, image: "../../../assets/img/golf/3.jpg"},
    { id: 4, image: "../../../assets/img/golf/4.jpg"},
    { id: 5, image: "../../../assets/img/golf/5.jpg"},
    { id: 6, image: "../../../assets/img/golf/6.jpg"},
    { id: 7, image: "../../../assets/img/golf/7.jpg"},
    { id: 8, image: "../../../assets/img/golf/8.jpg"},
    { id: 9, image: "../../../assets/img/golf/9.jpg"},
    { id: 10, image: "../../../assets/img/golf/10.jpg"},
    { id: 11, image: "../../../assets/img/golf/11.jpg"},
    { id: 12, image: "../../../assets/img/golf/12.jpg"},
    { id: 13, image: "../../../assets/img/golf/13.jpg"},
    { id: 14, image: "../../../assets/img/golf/14.jpg"},
    { id: 15, image: "../../../assets/img/golf/15.jpg"},
    { id: 16, image: "../../../assets/img/golf/16.jpg"},
    { id: 17, image: "../../../assets/img/golf/17.jpg"},
  ]
  ngOnInit(): void {
  }

}
