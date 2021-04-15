import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Articulo } from 'src/app/Modelo/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  listo = false;

  /* recibiendo un parametro
  Propiedades de entrada y salida */

  //recibe un objeto

  //evento
  @Input() articulo: Articulo = new Articulo();

  //evento personalizado no es nativo del componente
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