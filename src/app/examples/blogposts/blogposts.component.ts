import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.scss']
})
export class BlogpostsComponent implements OnInit {
  date: Date = new Date();
  focus;

  images = [
    {id: 1, image: "assets/img/gallery/1.jpg"},
    {id: 2, image: "assets/img/gallery/2.jpg"},
    {id: 3, image: "assets/img/gallery/13.jpg"},
    {id: 4, image: "assets/img/gallery/4.jpg"},
    {id: 5, image: "assets/img/gallery/5.jpg"},
    {id: 6, image: "assets/img/gallery/6.jpg"},
    {id: 7, image: "assets/img/gallery/7.jpg"},
    {id: 8, image: "assets/img/gallery/8.jpg"},
    {id: 9, image: "assets/img/gallery/9.jpg"},
    {id: 10, image: "assets/img/gallery/10.jpg"},
    {id: 11, image: "assets/img/gallery/11.jpg"},
    {id: 12, image: "assets/img/gallery/12.jpg"},
    {id: 13, image: "assets/img/gallery/13.jpg"},
    {id: 14, image: "assets/img/gallery/14.jpg"},
    {id: 15, image: "assets/img/gallery/15.jpg"},
    {id: 16, image: "assets/img/gallery/13.jpg"}, 
    {id: 17, image: "assets/img/gallery/17.jpg"},
    {id: 18, image: "assets/img/gallery/18.jpg"},
    {id: 19, image: "assets/img/gallery/19.jpg"},
    {id: 20, image: "assets/img/gallery/20.jpg"},
    {id: 21, image: "assets/img/gallery/21.jpg"},
    {id: 22, image: "assets/img/gallery/22.jpg"},
    {id: 23, image: "assets/img/gallery/23.jpg"},
    {id: 24, image: "assets/img/gallery/24.jpg"},
    {id: 25, image: "assets/img/gallery/25.jpg"},
    {id: 26, image: "assets/img/gallery/26.jpg"},
    {id: 27, image: "assets/img/gallery/27.jpg"},
    {id: 28, image: "assets/img/gallery/28.jpg"},
    {id: 29, image: "assets/img/gallery/29.jpg"},
    {id: 30, image: "assets/img/gallery/30.jpg"},
    {id: 31, image: "assets/img/gallery/31.jpg"},
    {id: 32, image: "assets/img/gallery/32.jpg"},
    {id: 33, image: "assets/img/gallery/33.jpg"},
    {id: 34, image: "assets/img/gallery/34.jpg"},
    {id: 35, image: "assets/img/gallery/35.jpg"},
    {id: 36, image: "assets/img/gallery/36.jpg"},
    {id: 37, image: "assets/img/gallery/37.jpg"},
    {id: 38, image: "assets/img/gallery/38.jpg"},
    {id: 44, image: "assets/img/gallery/44.jpg"},
    {id: 39, image: "assets/img/gallery/39.jpg"},
    {id: 40, image: "assets/img/gallery/40.jpg"},
    {id: 41, image: "assets/img/gallery/41.jpg"},
    {id: 42, image: "assets/img/gallery/42.jpg"},
    {id: 43, image: "assets/img/gallery/43.jpg"},
  ]
  constructor() { }

  ngOnInit() {
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
