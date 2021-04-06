import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  date : Date = new Date();
  
  images = [
    // {id: 1, image: "assets/img/selected/salle/1.jpg"},
    // {id: 8, image: "assets/img/selected/salle/2.jpg"},
    // {id: 41, image: "assets/img/selected/salle/3.jpg"},
    // {id: 15, image: "assets/img/selected/salle/4.jpg"},
    // {id: 16, image: "assets/img/selected/salle/5.jpg"}, 
    // {id: 40, image: "assets/img/selected/salle/6.jpg"},
    // {id: 5, image: "assets/img/selected/salle/7.jpg"},
    // {id: 6, image: "assets/img/selected/salle/8.jpg"},
    // {id: 7, image: "assets/img/selected/salle/9.jpg"},
    // {id: 10, image: "assets/img/selected/salle/10.jpg"},
    // {id: 11, image: "assets/img/selected/salle/11.jpg"},
    // {id: 12, image: "assets/img/selected/salle/12.jpg"},
  ]
  constructor(
    private _GalleryService: GalleryService
  ) { }

  ngOnInit() {
    let data;
    this._GalleryService.getImages().subscribe((res)=>{
      data = res;
      for(let i=0; i<data.data.length; i++){
        if (data.data[i].category === 2) {
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
