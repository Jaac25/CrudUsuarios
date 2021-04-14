import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Articulo } from 'src/app/Modelo/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  /* recibiendo un parametro
  Propiedades de entrada y salida */

  //recibe un objeto

  //evento
  @Input() articulo: Articulo = new Articulo();
  @Output() deleteArticulo: EventEmitter<Articulo> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  onDelete(articulo: Articulo){
    this.deleteArticulo.emit(articulo);
  }

  onToggle(articulo: Articulo){
    articulo.pago = !articulo.pago;
  }

}