
import {Component, OnInit } from '@angular/core';
import { Articulo } from '../../Modelo/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})

// Interfaz OnInit que es implementada en la clase ProductosComponent
export class ArticulosComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor() { }

  //Ciclo de vida de un componente
  ngOnInit(): void {

    this.articulos=[
      {
        id:0,
        descripcion: 'jabon',
        precio: 10.1,
        cantidad: 2.3,
        pago:false
      },
      {
        id:1,
        precio: 122.1,
        descripcion: 'papel',
        cantidad: 5,
        pago:true
      },
      {
        id:2,
        precio: 222222,
        descripcion: 'panela',
        cantidad: 5,
        pago:false
      }
    ];
  }
  deleteArticulo(articulo:Articulo){
    this.articulos = this.articulos.filter(item => item.id != articulo.id);
  }

}

