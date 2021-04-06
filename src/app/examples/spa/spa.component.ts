import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {

  date : Date = new Date();
  
  images = [
    // {id: 1, image: "assets/img/gallery/9.jpg"},
    // {id: 8, image: "assets/img/gallery/10.jpg"},
    // {id: 41, image: "assets/img/gallery/99.jpg"},
    // {id: 15, image: "assets/img/gallery/11.jpg"},
    // {id: 16, image: "assets/img/gallery/12.jpg"}, 
    // {id: 40, image: "assets/img/gallery/18.jpg"},
  ]
  constructor(
    private _GalleryService: GalleryService
  ) { }

  ngOnInit() {
    let data;
    this._GalleryService.getImages().subscribe((res)=>{
      data = res;
      for(let i=0; i<data.data.length; i++){
        if (data.data[i].category === 4) {
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
