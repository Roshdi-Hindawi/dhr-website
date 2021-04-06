import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-chambers',
  templateUrl: './chambers.component.html',
  styleUrls: ['./chambers.component.css']
})
export class ChambersComponent implements OnInit {

  date: Date = new Date();

  images = [
    // {id: 1, image: "assets/img/gallery/1.jpg"}, 
    // {id: 15, image: "assets/img/selected/chambers/1.jpg"},
    // {id: 16, image: "assets/img/gallery/16.jpg"}, 
    // {id: 40, image: "assets/img/selected/chambers/4.jpg"},
    // {id: 41, image: "assets/img/selected/chambers/6.jpg"},
    // {id: 41, image: "assets/img/selected/chambers/9.jpg"},
    // {id: 41, image: "assets/img/selected/chambers/10.jpg"},
    // {id: 42, image: "assets/img/gallery/45.jpg"},
    // {id: 43, image: "assets/img/gallery/46.jpg"},
    // {id: 43, image: "assets/img/gallery/47.jpg"},
    // {id: 64, image: "assets/img/gallery/64.jpg"},
  ]
  constructor(
    private _GalleryService: GalleryService
  ) { }

  ngOnInit() {
    let data;
    this._GalleryService.getImages().subscribe((res)=>{
      data = res;
      for(let i=0; i<data.data.length; i++){
        if (data.data[i].category === 1) {
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
