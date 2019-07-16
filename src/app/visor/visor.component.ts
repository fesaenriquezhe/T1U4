import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  public imagenes;
  constructor() { 
    this.imagenes = [
      {
        "name":"paisaje 1",
        "id":"1",
        "description":"descripcion paisaje 1",
        "img":"https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "rank":this.generarRango(1),
        "ranking":1
      },
      {
        "name":"paisaje 2",
        "id":"2",
        "description":"descripcion paisaje 2",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc8sCtTPyEZgY6MTyaZY4TK4rLE8FJ4jJ6ettKhYJRjLa_Aurdw",
        "rank":this.generarRango(4),
        "ranking":4
      },
      {
        "name":"paisaje 3",
        "id":"3",
        "description":"descripcion paisaje 3",
        "img":"https://locuraviajes.com/wp-content/uploads/2014/05/10-mejores-paisajes-del-mundo-600x350.jpg",
        "rank":this.generarRango(2),
        "ranking":2
      },
      {
        "name":"paisaje 4",
        "id":"4",
        "description":"descripcion paisaje 4",
        "img":"https://locuraviajes.com/wp-content/uploads/2014/05/los-10-mejores-paisajes-del-mundo-glaciar-perito-moreno-600x450.jpg",
        "rank":this.generarRango(5),
        "ranking":5
      },
      {
        "name":"paisaje 5",
        "id":"5",
        "description":"descripcion paisaje 5",
        "img":"https://locuraviajes.com/wp-content/uploads/2014/05/los-10-mejores-paisajes-del-mundo-gran-ca%C3%B1on-del-colorado-600x480.jpg",
        "rank":this.generarRango(3),
        "ranking":3
      }
    ]
  }

  ngOnInit() {
  }

  generarRango(rank){
    var arr = [];
    for (var i=0; i<rank; i++)
    arr.push(i);
  return arr;
  }
}
