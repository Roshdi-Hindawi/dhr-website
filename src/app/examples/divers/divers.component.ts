import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.css']
})
export class DiversComponent implements OnInit {

  date: Date = new Date();
  images = [
    // {id: 1, image: "assets/img/selected/animation/1.jpg"},
    // {id: 16, image: "assets/img/selected/animation/2.jpg"}, 
    // {id: 40, image: "assets/img/selected/animation/3.jpg"},
    // {id: 41, image: "assets/img/selected/animation/4.jpg"},
    // {id: 42, image: "assets/img/selected/animation/5.jpg"},
    // {id: 43, image: "assets/img/selected/animation/6.jpg"},
    // {id: 43, image: "assets/img/selected/animation/7.jpg"},
    // {id: 60, image: "assets/img/selected/animation/8.jpg"},
    // {id: 61, image: "assets/img/selected/animation/9.jpg"},
    // {id: 62, image: "assets/img/selected/animation/10.jpg"},
    // {id: 63, image: "assets/img/selected/animation/11.jpg"},
    // {id: 64, image: "assets/img/selected/animation/12.jpg"},
    // {id: 65, image: "assets/img/selected/animation/13.jpg"},
    // {id: 66, image: "assets/img/selected/animation/14.jpg"},
    // {id: 67, image: "assets/img/selected/animation/15.jpg"},
    // {id: 68, image: "assets/img/selected/animation/16.jpg"},
    // {id: 69, image: "assets/img/selected/animation/17.jpg"},
  ]
  constructor(
    private _GalleryService: GalleryService
  ) { }

  ngOnInit() {
    let data;
    this._GalleryService.getImages().subscribe((res)=>{
      data = res;
      for(let i=0; i<data.data.length; i++){
        if (data.data[i].category === 3) {
          this.images.push({
            id: data.data[i].id,
            image: 'http://localhost/delphin-api/public' + data.data[i].image
          })
        }
      }
      console.log(data)
    });
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('blog-posts');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('blog-posts');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');

  }
}
